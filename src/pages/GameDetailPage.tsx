import { useParams } from 'react-router-dom';
import useGame from '../hooks/useGame';
import { Flex, Heading, Spinner, Text } from '@chakra-ui/react';

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

      <Flex fontSize={'3rem'} direction={'column'} gap={'2rem'}>
        {game?.name && <Heading fontSize={'5rem'}>{game?.name}</Heading>}
        {game?.description_raw && <Text>{game?.description_raw} </Text>}
      </Flex>
    </>
  );
};

export default GameDetailPage;
