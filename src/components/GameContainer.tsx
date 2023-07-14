import { Grid, GridItem } from '@chakra-ui/react';
import GameCard from './GameCard';
import { Game } from '../hooks/useGames';
import CardSkeleton from '../utils/CardSkeleton';
interface GameContainerProps {
  isLoading: boolean;
  games: Game[];
}

const GameContainer = (Props: GameContainerProps) => {
  const { isLoading, games } = Props;

  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <Grid
        width={'auto'}
        as={'ul'}
        padding={'0 0.5rem '}
        templateColumns={'repeat(3, 1fr)'}
        justifyItems={'center'}
        gap={'2rem'}
      >
        {isLoading &&
          skeletons.map((skeleton) => {
            return <CardSkeleton key={skeleton} />;
          })}

        {!isLoading &&
          games.map((game, index) => {
            if (index < 10) console.log(game);
            return (
              <GridItem
                height={'35rem'}
                minW={'33rem'}
                maxW={'75rem'}
                as={'li'}
                key={game.id}
              >
                <GameCard game={game} />
              </GridItem>
            );
          })}
      </Grid>
    </>
  );
};

export default GameContainer;
