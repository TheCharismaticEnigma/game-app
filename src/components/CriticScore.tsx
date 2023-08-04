import { Box } from '@chakra-ui/react';

interface Props {
  metacritic: number;
}

const CriticScore = ({ metacritic }: Props) => {
  const metaColor = `${metacritic > 75 ? '#6dc849' : 'yellow'}`;

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
