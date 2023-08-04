// Common parent that manages the State for both Sidebar and App Content.
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { Box, Flex, Grid, GridItem, Spinner, Text } from '@chakra-ui/react';

import { useAllGames } from '../hooks/useAllGames';
import { Game } from '../entities/Game';
import { useGenres } from '../hooks/useGenres';
import useGameQueryStore from '../store';
import AppHeading from './AppHeading';
import Dropdowns from './Dropdowns';
import GameContainer from './GameContainer';
import SideBar from './SideBar';

function AppContent() {
  // const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  // We want this component to rerender ONLY WHEN GAME QUERY OBJECT CHANGES.
  const gameQuery = useGameQueryStore((selector) => selector.gameQuery);

  const [isGridDisplay, setGridDisplayStatus] = useState(true);

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
        justifyItems={'stretch'}
        templateAreas={{
          base: `"main"`,
          md: `"aside main" `,
        }}
      >
        {/*  
        NavBar is permanently on top. 
        <GridItem area={'nav'}>
          <NavBar />
        </GridItem> */}

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

            {!genreErrorisAxios && <SideBar genres={genres} />}
          </Box>
        </GridItem>

        <GridItem area={'main'} overflow={'auto'} scrollBehavior={'smooth'}>
          <Box w={'100%'} pr={'1rem'}>
            <Flex mb={'3rem'} gap={'2rem'} as={'div'} direction={'column'}>
              <AppHeading />

              <Dropdowns
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

export default AppContent;
