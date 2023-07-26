// Common parent that manages the State for both Sidebar and App Content.
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { Box, Flex, Grid, GridItem, Spinner, Text } from '@chakra-ui/react';

import { Game, useAllGames } from '../hooks/useAllGames';
import { Genre, useGenres } from '../hooks/useGenres';
import { Platform } from '../hooks/usePlatforms';
import AppHeading from './AppHeading';
import Dropdowns from './Dropdowns';
import GameContainer from './GameContainer';
import NavBar from './NavBar';
import SideBar from './SideBar';

// Contains schema of all the query parameters used to fetch games.
interface GameQuery {
  selectedGenre?: Genre; // selected Genre
  selectedPlatform?: Platform; // selected Platform
  searchQuery?: string;
  orderBy?: string;
  page: number;
  page_size?: number;
}

function AppContent() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const [isGridDisplay, setGridDisplayStatus] = useState(true);

  const { selectedGenre } = gameQuery;

  const {
    data: allGamePages,
    error: imageError,
    isLoading: loadingImages,
    fetchNextPage,
    hasNextPage,
  } = useAllGames(gameQuery);

  const { data, error: genreError, isLoading: loadingGenres } = useGenres();
  const genres = data?.results;

  const genreErrorisAxios = genreError?.name === 'AxiosError';
  const imageErrorisAxios = imageError?.name === 'AxiosError';

  const allGames = allGamePages?.pages.reduce((currentGames, page) => {
    return [...currentGames, ...page.results];
  }, [] as Game[]);

  return (
    <>
      <Grid
        position={'relative'}
        margin={'0 auto '}
        width={'min(100%, 1250px)'}
        gridTemplateColumns={{
          base: '1fr',
          md: '22rem 1fr',
        }}
        justifyItems={{
          base: 'center',
          md: 'stretch',
        }}
        templateAreas={{
          base: `"nav" 
                 "main"`,

          md: `"nav   nav"
               "aside main" `,
        }}
      >
        <GridItem area={'nav'}>
          <NavBar
            onSearch={(searchQuery: string) => {
              setGameQuery({ ...gameQuery, searchQuery });
            }}
          />
        </GridItem>

        <GridItem
          area={'aside'}
          width={'min(100%, 22rem)'}
          display={{
            base: 'none',
            md: 'block',
          }}
        >
          <Box>
            {loadingGenres && (
              <Spinner
                thickness="5px"
                speed="0.55s"
                emptyColor="gray.200"
                color="red.500"
                size="xl"
                margin={'40%'}
              />
            )}

            {genreErrorisAxios && null}

            {!genreErrorisAxios && (
              <SideBar
                genres={genres}
                selectedGenre={selectedGenre}
                getSelectedGenre={(genre: Genre) => {
                  setGameQuery({ ...gameQuery, selectedGenre: genre });
                }}
              />
            )}
          </Box>
        </GridItem>

        <GridItem area={'main'} overflow={'auto'} scrollBehavior={'smooth'}>
          <Box w={'100%'} pr={'1rem'}>
            <Flex mb={'3rem'} gap={'2rem'} as={'div'} direction={'column'}>
              <AppHeading
                selectedPlatformHeading={gameQuery.selectedPlatform?.name}
                selectedGenreHeading={selectedGenre?.name}
              />

              <Dropdowns
                selectPlatform={(platform: Platform) =>
                  setGameQuery({ ...gameQuery, selectedPlatform: platform })
                }
                selectOrdering={(ordering: string) => {
                  setGameQuery({ ...gameQuery, orderBy: ordering });
                }}
                setDisplay={(gridDisplayActive: boolean) => {
                  setGridDisplayStatus(gridDisplayActive);
                }}
              />
            </Flex>

            {imageErrorisAxios && (
              <Text
                color={'red.400'}
                fontStyle={'italic'}
                textAlign={'center'}
                fontSize={'6xl'}
              >
                {imageError?.message.toUpperCase()}
              </Text>
            )}

            {/* !!value => if value is nullish, then converted to false*/}

            {!imageErrorisAxios && (
              <InfiniteScroll
                dataLength={allGames?.length ?? 0} //This is important field to render the next data
                next={() => {
                  // dataLength takes the value of total components fetched so far.
                  fetchNextPage();
                }}
                hasMore={!!hasNextPage}
                scrollThreshold={0.8}
                loader={
                  <p
                    style={{
                      textAlign: 'center',
                      fontSize: '2rem',
                      margin: '1.5rem auto',
                      color: '#6DC849',
                    }}
                  >
                    Loading...
                  </p>
                }
                endMessage={
                  <p
                    style={{
                      textAlign: 'center',
                      fontStyle: 'italic',
                      fontSize: '3rem',
                      color: '#6DC849',
                    }}
                  >
                    <b>Yay! You have seen it all!</b>
                  </p>
                }
              >
                {
                  <GameContainer
                    gridDisplayIsActive={isGridDisplay}
                    isLoading={loadingImages}
                    games={allGames}
                  />
                }
              </InfiniteScroll>
            )}

            {/* {hasNextPage && (
              <Button
                size={'lg'}
                marginY={5}
                marginLeft={2}
                disabled={!hasNextPage}
                onClick={() => {
                  fetchNextPage();
                }}
              >
                {isFetchingNextPage ? 'Loading' : 'Load More'}
              </Button>
            )} */}
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}

export { AppContent, type GameQuery };
