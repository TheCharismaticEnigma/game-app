import {
  Box,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  HStack,
} from '@chakra-ui/react';

import { Card, CardBody, CardFooter } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';

interface CardProps {
  game: Game;
}

const GameCard = (Props: CardProps) => {
  const {
    game: { background_image, name, slug },
  } = Props;

  return (
    <>
      <Card
        border={'0.5px solid black'}
        cursor={'pointer'}
        _hover={{ transform: 'scale(1.02)', transition: '300ms ease-in-out' }}
        borderRadius={'3xl'}
        overflow={'hidden'}
        width={'100%'}
      >
        <Image
          src={background_image}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <CardBody>
          <Stack mt="3" spacing="5">
            <HStack justifyContent={'space-between'} border={'2px solid teal'}>
              <Box>"stores[]"</Box>
              <Box>"metacritic"</Box>
            </HStack>
            <Heading size="2xl" lineHeight={'1.2'}>
              {name}
            </Heading>
            <Text>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces and for people who love a chic design
              with a sprinkle of vintage design.
            </Text>
            <Text color="blue.600" fontSize="2xl">
              $450
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Buy now
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
};

export default GameCard;
