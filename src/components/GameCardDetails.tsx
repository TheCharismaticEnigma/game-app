import { Stack, Flex, Text } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';

interface Props {
  game: Game;
}

const GameCardDetails = (Props: Props) => {
  const { released, playtime, ratings_count, reviews_count, genres } =
    Props.game;

  const detailContainerStyling = {
    padding: '5px 3px 5px 2px ',
    borderBottom: '0.5px solid gray',
    justifyContent: 'space-between',
    fontSize: '1.3rem',
  };

  return (
    <Stack cursor={'default'} pointerEvents={'none'} mt={7} mb={5} spacing={6}>
      <Flex {...detailContainerStyling}>
        <Text color={'gray.500'}>Release Date:</Text>
        <Text>{released}</Text>
      </Flex>

      <Flex {...detailContainerStyling}>
        <Text color={'gray.500'}>Playtime:</Text>
        <Text>{playtime} hours</Text>
      </Flex>

      <Flex {...detailContainerStyling}>
        <Text color={'gray.500'}>Ratings Count:</Text>
        <Text>{ratings_count}</Text>
      </Flex>

      <Flex {...detailContainerStyling}>
        <Text color={'gray.500'}>Reviews Count:</Text>
        <Text>{reviews_count} </Text>
      </Flex>

      <Flex {...detailContainerStyling}>
        <Text color={'gray.500'}>Genres:</Text>
        <Flex gap={3}>
          {genres?.map((genre, index, array) => (
            <Text key={genre.id}>
              {genre.name}
              {index < array.length - 1 ? ', ' : ''}
            </Text>
          ))}
        </Flex>
      </Flex>
    </Stack>
  );
};

export default GameCardDetails;
