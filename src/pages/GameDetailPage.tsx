import { useParams } from 'react-router-dom';
import useGame from '../hooks/useGame';
import { Flex, Heading, Spinner } from '@chakra-ui/react';
import ExpandableText from '../components/ExpandableText';

const GameDetailPage = () => {
  const { slug = '' } = useParams();
  const { data: game, isLoading, error } = useGame(slug);

  if (error) throw error;
  {
    /* ErrorPage will catch it and we'll log it in permanent place somewhere. */
  }

  return (
    <>
      {isLoading && <Spinner size={'xl'} margin={'50%'} />}

      <Flex padding={'5'} fontSize={'2rem'} direction={'column'} gap={'2rem'}>
        {game?.name && <Heading fontSize={'5rem'}>{game?.name}</Heading>}

        {game?.description_raw && (
          <ExpandableText text={game?.description_raw} />
        )}
      </Flex>
    </>
  );
};

export default GameDetailPage;
