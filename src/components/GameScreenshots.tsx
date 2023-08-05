import { SimpleGrid, Image } from '@chakra-ui/react';
import useScreenshots from '../hooks/useScreenshots';

interface GameScreenshotsProps {
  gameId: number;
}

const GameScreenshots = ({ gameId }: GameScreenshotsProps) => {
  const { data: screenshots, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return null;

  if (error) throw error; // rethrow so that react router catches it

  return (
    <SimpleGrid mt={4} gap={3} columns={{ base: 1, md: 2 }}>
      {screenshots?.results.map(({ id, image }) => (
        <Image borderRadius={'5px'} key={id} src={image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
