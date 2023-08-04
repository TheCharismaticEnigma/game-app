import { Grid, GridItem } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import CardSkeleton from '../utils/CardSkeleton';
import GameCard from './GameCard';

interface GameContainerProps {
  isLoading: boolean;
  games: Game[] | undefined;
  gridDisplayIsActive: boolean;
}

const GameContainer = (Props: GameContainerProps) => {
  const { isLoading, games, gridDisplayIsActive } = Props;
  const skeletons = [1, 2, 3, 4, 5, 6];

  const gridView = {
    width: 'minmax(100%,32rem)',
    height: '35rem',
    imageHeight: '55%',
    gridTemplateColumns: {
      base: 'repeat(1,1fr)',
      md: 'repeat(2,1fr)',
      lg: 'repeat(3,1fr)',
    },
  };

  const cardView = {
    width: 'min(100%, 75rem)',
    height: '60rem',
    imageHeight: '75%',
    gridTemplateColumns: {
      base: 'repeat(1,1fr)',
      md: 'repeat(1,1fr)',
      lg: 'repeat(1,1fr)',
    },
  };

  return (
    <>
      <Grid
        border={'1x solid green'}
        as={'ul'}
        padding={'0 0.5rem '}
        gridTemplateColumns={
          gridDisplayIsActive
            ? gridView.gridTemplateColumns
            : cardView.gridTemplateColumns
        }
        justifyItems={gridDisplayIsActive ? 'stretch' : 'center'}
        gap={'2rem'}
        overflow={'hidden'}
      >
        {isLoading &&
          skeletons.map((skeleton) => {
            return <CardSkeleton key={skeleton} />;
          })}

        {!isLoading &&
          games?.map((game) => {
            return (
              <GridItem
                as={'li'}
                _hover={{
                  transform: 'scale(1.02)',
                  transition: 'transform 300ms ease-in-out',
                }}
                width={gridDisplayIsActive ? gridView.width : cardView.width}
                height={gridDisplayIsActive ? gridView.height : cardView.height}
                key={game.id}
              >
                <GameCard
                  game={game}
                  imageHeight={
                    gridDisplayIsActive
                      ? gridView.imageHeight
                      : cardView.imageHeight
                  }
                />
              </GridItem>
            );
          })}
      </Grid>
    </>
  );
};

export default GameContainer;
