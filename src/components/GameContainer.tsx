import { Box, Heading, Grid, GridItem, Flex } from '@chakra-ui/react';
import GameCard from './GameCard';

const GameContainer = () => {
  const border = `2px solid teal`;

  return (
    <>
      <Grid templateColumns={'repeat(3,1fr)'} gap={'3rem'}>
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
      </Grid>
    </>
  );
};

export default GameContainer;
