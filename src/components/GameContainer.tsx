import { Grid, GridItem } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import CardSkeleton from './CardSkeleton';
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
    mediaHeight: '55%',
    gridTemplateColumns: {
      base: 'repeat(1,1fr)',
      md: 'repeat(2,1fr)',
      lg: 'repeat(3,1fr)',
    },
  };

  const cardView = {
    width: 'min(100%, 64rem)',
    height: 'min(100%, 51rem)',
    mediaHeight: '75%',
    gridTemplateColumns: {
      base: 'repeat(1,1fr)',
      md: 'repeat(1,1fr)',
      lg: 'repeat(2,1fr)',
    },
  };

  const cardHeight = gridDisplayIsActive ? gridView.height : cardView.height;

  return (
    <>
      <Grid
        as={'ul'}
        padding={'0 0.5rem '}
        gridTemplateColumns={
          gridDisplayIsActive
            ? gridView.gridTemplateColumns
            : cardView.gridTemplateColumns
        }
        justifyItems={{
          base: 'center',
          md: `${gridDisplayIsActive ? 'stretch' : 'center'}`,
          lg: `${gridDisplayIsActive ? 'stretch' : 'center'}`,
        }}
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
                key={game.id}
                width={{
                  base: 'min(100%, 35rem)',
                  md: 'auto',
                  lg: 'auto',
                }}
                height={{
                  base: '36rem ',
                  md: `min(${cardHeight}, 51rem)`,
                  lg: `min(${cardHeight}, 45rem)`,
                }}
                maxH={{
                  base: '36rem',
                  md: '51rem',
                  lg: '45rem',
                }}
                overflow={'visible'}
                _hover={{
                  transform: 'scale(1.005)',
                  transition: 'transform 200ms ease-in-out',
                }}
              >
                <GameCard
                  game={game}
                  mediaHeight={
                    gridDisplayIsActive
                      ? gridView.mediaHeight
                      : cardView.mediaHeight
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
