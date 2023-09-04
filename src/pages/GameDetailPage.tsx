import { Flex, GridItem, Heading, SimpleGrid, Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import ExpandableText from '../components/ExpandableText';
import GameAttributes from '../components/GameAttributes';
import GameScreenshots from '../components/GameScreenshots';
import GameTrailer from '../components/GameTrailer';
import useGame from '../hooks/useGame';
import EntitiyColor from '../utils/entitiyColor';

const GameDetailPage = () => {
  const { slug = '' } = useParams();
  const { data: game, isLoading, error } = useGame(slug);
  const { color } = EntitiyColor();

  if (error) throw error;
  {
    /* ErrorPage will catch it and we'll log it in permanent place somewhere. */
  }

  return (
    <>
      {isLoading && <Spinner size={'xl'} margin={'50%'} />}

      <Flex padding={5} fontSize={'2rem'} direction={'column'} gap={'3rem'}>
        {game?.name && (
          <Heading
            color={color}
            textAlign={{ base: 'left', md: 'left' }}
            fontSize={{ base: '4rem', md: '7rem' }}
            fontFamily={'system'}
          >
            {game?.name}
          </Heading>
        )}

        <SimpleGrid gap={'2rem'} columns={{ base: 1, md: 2 }}>
          <GridItem>
            {game?.description_raw && (
              <ExpandableText text={game?.description_raw} />
            )}

            {game && <GameAttributes game={game} />}
          </GridItem>

          <GridItem>
            {game && <GameTrailer gameId={game.id} />}

            {game && <GameScreenshots gameId={game.id} />}
          </GridItem>
        </SimpleGrid>
      </Flex>
    </>
  );
};

export default GameDetailPage;

// Heading la color kuthla deu? Green ka yellow? Ikde bagh laptop
