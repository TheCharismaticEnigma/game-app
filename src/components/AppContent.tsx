// Common parent that manages the State for both Sidebar and App Content.

import {
  Flex,
  Box,
  Spacer,
  Heading,
  Select,
  Text,
  Icon,
  border,
} from '@chakra-ui/react';

// COMPONENTS Should only be responsible for rendering markup.
// Rest funtionality should be in other files. Import as required.
// Transfer effect hook into another custom hook.

import { BiSolidGridAlt, BiSolidCard } from 'react-icons/bi';

import SideBar from './SideBar';
import GameContainer from './GameContainer';
import { useGames } from '../hooks/useGames';
import useGenres from '../hooks/useGenres';

function AppContent() {
  const { games, error } = useGames();
  const { genres, error: genreError } = useGenres();

  return (
    <>
      <Flex pt={'1rem'} gap={'0.5rem'} as="section" minH={'80vh'}>
        <Box width={'min(100%, 22rem)'}>
          {genreError?.name === 'AxiosError' && (
            <Text
              color={'red.400'}
              fontStyle={'italic'}
              textAlign={'center'}
              fontSize={'3xl'}
            >
              {genreError?.message.toUpperCase()}
            </Text>
          )}

          {genreError?.name !== 'AxiosError' && <SideBar genres={genres} />}
        </Box>

        <Spacer />

        <Box w={'100%'} pr={'1rem'}>
          <Flex mb={'3rem'} gap={'2rem'} as={'div'} direction={'column'}>
            <Heading
              color={'#6dc849'}
              fontWeight={'500'}
              fontSize={'8xl'}
              as={'h1'}
            >
              TOP PICKS
            </Heading>

            <Flex
              as="div"
              padding={'0 0.5rem '}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Flex gap={'1.5rem'}>
                <Select
                  cursor={'pointer'}
                  fontSize={'2rem'}
                  fontFamily={'cursive'}
                  size={'lg'}
                  borderColor={'teal.600'}
                  placeholder={`Order by `}
                  width={'15rem'}
                  textAlign={'left'}
                >
                  <option value=""></option>
                </Select>

                <Select
                  cursor={'pointer'}
                  fontSize={'2rem'}
                  fontFamily={'cursive'}
                  size={'lg'}
                  borderColor={'teal.600'}
                  placeholder={`Platforms`}
                  textAlign={'left'}
                  width={'15rem'}
                >
                  <option value="xbox">XBOX</option>
                </Select>
              </Flex>

              <Flex alignItems={'center'} gap={'1rem '}>
                <Text
                  fontFamily={'cursive'}
                  fontSize={'1.5rem'}
                  fontStyle={'italic'}
                >
                  Display Options:{' '}
                </Text>

                <Icon
                  color={'teal'}
                  _hover={{ color: 'teal.400' }}
                  cursor={'pointer'}
                  onClick={() => console.log('clicked')}
                  as={BiSolidCard}
                  boxSize={'4rem'}
                  focusable={'true'}
                ></Icon>

                <Icon
                  cursor={'pointer'}
                  focusable={'true'}
                  as={BiSolidGridAlt}
                  color={'teal'}
                  _hover={{ color: 'teal.400' }}
                  boxSize={'4rem'}
                ></Icon>
              </Flex>
            </Flex>
          </Flex>

          {error?.name === 'AxiosError' && (
            <Text
              color={'red.400'}
              fontStyle={'italic'}
              textAlign={'center'}
              fontSize={'6xl'}
            >
              {error?.message.toUpperCase()}
            </Text>
          )}

          {error?.name !== 'AxiosError' && <GameContainer games={games} />}
        </Box>
      </Flex>
    </>
  );
}

export default AppContent;
