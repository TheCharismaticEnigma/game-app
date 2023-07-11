import { Grid, GridItem } from '@chakra-ui/react';
import GameCard from './GameCard';
import { Game } from '../hooks/useGames';
interface GameContainerProps {
  games: Game[];
}

const GameContainer = (Props: GameContainerProps) => {
  const { games } = Props;

  return (
    <>
      <Grid
        as={'ul'}
        padding={'0 0.5rem '}
        templateColumns={'repeat(3, 1fr)'}
        gap={'2rem'}
      >
        {games.map((game, index) => {
          if (index < 4) console.log(game);
          return (
            <GridItem as={'li'} key={game.id}>
              <GameCard game={game} />
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
};

export default GameContainer;
