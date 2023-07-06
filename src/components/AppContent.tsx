// Parent which contains all the state of the app.

import { Flex, Box, Spacer } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SideBar from './SideBar';
import GameContainer from './GameContainer';

function AppContent() {
  const key = `b3edbbccbb684a8b88a68744acbcf2df`;
  const pageNumber = 1;
  const lastPage = 851080 / 20; // Each array 20 games.

  useEffect(() => {
    axios
      .get(`https://api.rawg.io/api/games?key=${key}&page=${pageNumber}`)
      .then((response) => {
        const { data } = response;
        console.log(data);
        console.log(data.next);
      });
  }, []);

  const border = `2px solid yellow`;
  const border2 = `2px solid tomato`;

  return (
    <>
      <Flex as="section" minH={'80vh'}>
        <Box w={'min(100%,22rem)'}>
          <SideBar />
        </Box>

        <Spacer />

        <Box w={'80%'} border={border2}>
          <GameContainer />
        </Box>
      </Flex>
    </>
  );
}

export default AppContent;
