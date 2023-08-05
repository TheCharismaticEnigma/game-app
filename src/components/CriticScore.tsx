import { Box } from '@chakra-ui/react';
import EntitiyColor from '../utils/entitiyColor';

interface Props {
  metacritic: number;
}

const CriticScore = ({ metacritic }: Props) => {
  const { color: metaColor } = EntitiyColor();

  return (
    <Box
      maxWidth={'3rem'}
      color={metaColor}
      border={`1.5px solid ${metaColor}`}
      borderRadius={'5px'}
      padding={'0.1rem 0.5rem'}
      textAlign={'center'}
      fontWeight={'500'}
      fontSize={'small'}
    >
      {metacritic}
    </Box>
  );
};

export default CriticScore;
