import {
  Image,
  Stack,
  Heading,
  HStack,
  Flex,
  Badge,
  Box,
} from '@chakra-ui/react';
import { Card, CardBody, CardFooter } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import getPlatformIcon from '../utils/PlatformIcons';
import getCroppedImageUrl from '../utils/getCroppedImageUrl';
interface CardProps {
  game: Game;
}

const GameCard = (Props: CardProps) => {
  const { background_image, name, metacritic, parent_platforms } = Props.game;
  const metaColor = `${metacritic > 75 ? '#6dc849' : 'yellow'}`;

  return (
    <>
      <Card
        border={'0.5px solid black'}
        cursor={'pointer'}
        _hover={{ transform: 'scale(1.02)', transition: '300ms ease-in-out' }}
        borderRadius={'3xl'}
        overflow={'hidden'}
        width={'100%'}
        height={'100%'}
      >
        <Image
          src={getCroppedImageUrl(background_image)}
          h={'55%'}
          objectFit={'cover'}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <CardBody>
          <Stack mt="4" spacing="5">
            <HStack pointerEvents={'none'} justifyContent={'space-between'}>
              <Flex alignItems={'center'} gap={'10px'}>
                {parent_platforms.map(({ platform }) => {
                  return getPlatformIcon(platform);
                })}
              </Flex>

              <Box
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
            </HStack>

            <Heading
              size="2xl"
              lineHeight={'1.2'}
              fontWeight={'600'}
              width={'90%'}
            >
              {name}
            </Heading>
          </Stack>
        </CardBody>

        <CardFooter></CardFooter>
      </Card>
    </>
  );
};

export default GameCard;
