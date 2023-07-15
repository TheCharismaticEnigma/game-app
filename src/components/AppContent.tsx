// Common parent that manages the State for both Sidebar and App Content.
import { useState } from 'react';

import { Flex, Box, Spacer, Spinner, Text } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react';

import NavBar from './NavBar';
import AppHeading from './AppHeading';
import SideBar from './SideBar';
import GameContainer from './GameContainer';
import Dropdowns from './Dropdowns';
import { useGames } from '../hooks/useGames';
import { Genre, useGenres } from '../hooks/useGenres';
import { Platform } from '../hooks/usePlatforms';

// Contains schema of all the query parameters used to fetch games.
interface GameQuery {
  selectedGenre: Genre | null; // selected Genre
  selectedPlatform: Platform | null; // selected Platform
  searchQuery: string | null;
  orderBy: string | null;
}

function AppContent() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const { selectedGenre } = gameQuery;

  const {
    data: games,
    error: imageError,
    isLoading: loadingImages,
  } = useGames(gameQuery);

  const {
    data: genres,
    error: genreError,
    isLoading: loadingGenres,
  } = useGenres();

  const genreErrorisAxios = genreError?.name === 'AxiosError';
  const imageErrorisAxios = imageError?.name === 'AxiosError';

  return (
    <>
      <Grid
        margin={'0 auto '}
        width={'min(100%, 1250px)'}
        gridTemplateColumns={{
          base: '1fr',
          md: '22rem 1fr  ',
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

        <GridItem area={'main'}>
          <Box w={'100%'} pr={'1rem'}>
            <Flex mb={'3rem'} gap={'2rem'} as={'div'} direction={'column'}>
              <AppHeading selectedGenreHeading={selectedGenre?.name} />
              <Dropdowns
                selectPlatform={(platform: Platform | null) =>
                  setGameQuery({ ...gameQuery, selectedPlatform: platform })
                }
                selectOrdering={(ordering: string | null) => {
                  setGameQuery({ ...gameQuery, orderBy: ordering });
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
              <GameContainer isLoading={loadingImages} games={games} />
            )}
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}

export { type GameQuery, AppContent };
