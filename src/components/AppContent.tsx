// Common parent that manages the State for both Sidebar and App Content.
import { useState } from 'react';

import { Flex, Box, Spacer, Spinner, Text } from '@chakra-ui/react';

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

  // Sort the games with selected genre

  return (
    <>
      <NavBar
        onSearch={(searchQuery: string) => {
          setGameQuery({ ...gameQuery, searchQuery });
        }}
      />

      <Flex pt={'1rem'} gap={'0.5rem'} as="section" minH={'80vh'}>
        <Box width={'min(100%, 22rem)'}>
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

        <Spacer />

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
      </Flex>
    </>
  );
}

export { type GameQuery, AppContent };
