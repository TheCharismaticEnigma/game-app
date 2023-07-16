import { Grid, GridItem } from '@chakra-ui/react';
import GameCard from './GameCard';
import { Game } from '../hooks/useGames';
import CardSkeleton from '../utils/CardSkeleton';

interface GameContainerProps {
  isLoading: boolean;
  games: Game[];
  fetchNextGamesPage: () => void;
}

const GameContainer = (Props: GameContainerProps) => {
  const { isLoading, games, fetchNextGamesPage } = Props;
  const gridView = { width: 'minmax(30rem,32rem)', height: '35rem' };
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <Grid
        border={'1x solid green'}
        as={'ul'}
        padding={'0 0.5rem '}
        gridTemplateColumns={{
          base: 'repeat(1,1fr)',
          md: 'repeat(2,1fr)',
          lg: 'repeat(3,1fr)',
        }}
        gap={'2rem'}
        overflow={'hidden'}
      >
        {isLoading &&
          skeletons.map((skeleton) => {
            return <CardSkeleton key={skeleton} />;
          })}

        {!isLoading &&
          games.map((game) => {
            return (
              <GridItem
                as={'li'}
                width={gridView.width}
                height={gridView.height}
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
