// Common parent that manages the State for both Sidebar and App Content.
import { useState } from 'react';
import {
  Grid,
  GridItem,
  Flex,
  Box,
  Spinner,
  Text,
  Button,
} from '@chakra-ui/react';

import NavBar from './NavBar';
import AppHeading from './AppHeading';
import SideBar from './SideBar';
import GameContainer from './GameContainer';
import Dropdowns from './Dropdowns';
import { Game, useAllGames } from '../hooks/useAllGames';
import { Genre, useGenres } from '../hooks/useGenres';
import { Platform } from '../hooks/usePlatforms';

// Contains schema of all the query parameters used to fetch games.
interface GameQuery {
  selectedGenre: Genre | null; // selected Genre
  selectedPlatform: Platform | null; // selected Platform
  searchQuery: string | null;
  orderBy: string | null;
  page?: number;
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
    isFetchingNextPage,
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
                selectPlatform={(platform: Platform | null) =>
                  setGameQuery({ ...gameQuery, selectedPlatform: platform })
                }
                selectOrdering={(ordering: string | null) => {
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

            {!imageErrorisAxios && (
              <GameContainer
                gridDisplayIsActive={isGridDisplay}
                isLoading={loadingImages}
                games={allGames}
              />
            )}

            {hasNextPage && (
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
            )}
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}

export { type GameQuery, AppContent };
