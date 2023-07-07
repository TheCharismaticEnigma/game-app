// Common parent that manages the State for both Sidebar and App Content.

import { Flex, Box, Spacer, Heading, Select } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import SideBar from './SideBar';
import GameContainer from './GameContainer';

import RogueHttpService from '../utils/RogueHttpService';

function AppContent() {
  const [games, setGames] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    RogueHttpService('games').then((response) => {
      if (response?.length) setGames(response);
    });
    RogueHttpService('genres').then((response) => {
      if (response?.length) setGenres(response);
    });
  }, []);

  const border2 = `2px solid tomato`;

  return (
    <>
      <Flex pt={'1rem'} as="section" minH={'80vh'}>
        <Box w={'min(100%,22rem)'}>
          <SideBar genres={genres} />
        </Box>

        <Spacer />

        <Box w={'80%'} border={border2}>
          <Flex
            border={border2}
            mb={'3rem'}
            gap={'2rem'}
            as={'div'}
            direction={'column'}
          >
            <Heading fontSize={'8xl'} as={'h1'}>
              TOP PICKS
            </Heading>

            <Flex
              as="div"
              justifyContent={'space-between'}
              border={'2px solid teal'}
            >
              <Flex>
                <Select
                  fontSize={'2rem'}
                  fontFamily={'cursive'}
                  size={'lg'}
                  borderColor={'teal.600'}
                  placeholder={`Order by: `}
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>

                <p>Relevance</p>
                <p>Platforms</p>
              </Flex>

              <Flex>
                <span>Display Options: </span>
                <p>Grid Display</p>
                <p>Single Large Card Display</p>
              </Flex>
            </Flex>
          </Flex>

          <GameContainer />
        </Box>
      </Flex>
    </>
  );
}

export default AppContent;
