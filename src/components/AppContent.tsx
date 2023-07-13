// Common parent that manages the State for both Sidebar and App Content.
import { useState } from 'react';

import {
  Flex,
  Box,
  Spacer,
  Heading,
  Spinner,
  Text,
  useColorMode,
} from '@chakra-ui/react';

import SideBar from './SideBar';
import GameContainer from './GameContainer';
import { useGames } from '../hooks/useGames';
import { Genre, useGenres } from '../hooks/useGenres';
import Dropdowns from './Dropdowns';

function AppContent() {
  const { colorMode } = useColorMode();

  const {
    data: games,
    error: imageError,
    isLoading: loadingImages,
  } = useGames();

  const {
    data: genres,
    error: genreError,
    isLoading: loadingGenres,
  } = useGenres();

  const genreErrorisAxios = genreError?.name === 'AxiosError';
  const imageErrorisAxios = imageError?.name === 'AxiosError';

  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  const retrieveGenre = (genre: Genre) => {
    console.log(genre);
    setSelectedGenre(genre);
  };

  // Sort the games with selected genre

  return (
    <>
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
            <SideBar genres={genres} getSelectedGenre={retrieveGenre} />
          )}
        </Box>

        <Spacer />

        <Box w={'100%'} pr={'1rem'}>
          <Flex mb={'3rem'} gap={'2rem'} as={'div'} direction={'column'}>
            <Heading
              color={`${colorMode === 'dark' ? '#6dc849' : '#671ddf'}`}
              fontWeight={'500'}
              fontSize={'8xl'}
              as={'h1'}
            >
              TOP PICKS
            </Heading>

            <Dropdowns />
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

export default AppContent;
