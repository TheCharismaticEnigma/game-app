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
  Flex,
} from '@chakra-ui/react';

import { Card, CardBody, CardFooter } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import getPlatformIcon from '../utils/PlatformIcons';

interface CardProps {
  game: Game;
}

const GameCard = (Props: CardProps) => {
  const { background_image, name, metacritic, parent_platforms } = Props.game;

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
          <Stack mt="4" spacing="5">
            <HStack pointerEvents={'none'} justifyContent={'space-between'}>
              <Flex alignItems={'center'} gap={'0.5rem'}>
                {parent_platforms.map(({ platform }) => {
                  return getPlatformIcon(platform);
                })}
              </Flex>

              <Box
                color="#6dc849"
                border-color="rgba(109,200,73,.4)"
                border={'1.5px solid '}
                borderRadius={'5px'}
                padding={'0.1rem 0.5rem'}
                textAlign={'center'}
                fontWeight={'500'}
                fontSize={'small'}
              >
                {metacritic}
              </Box>
            </HStack>

            <Heading size="2xl" lineHeight={'1.2'} fontWeight={'600'}>
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
