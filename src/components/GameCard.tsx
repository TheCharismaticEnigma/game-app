import { Image, Stack, Heading, HStack, Flex, Box } from '@chakra-ui/react';
import { Card, CardBody, CardFooter } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import getCroppedImageUrl from '../utils/getCroppedImageUrl';
import RatingIcon from '../utils/RatingIcons';
import PlatformIcon from '../utils/PlatformIcons';
interface CardProps {
  game: Game;
}

const GameCard = (Props: CardProps) => {
  const { background_image, name, metacritic, parent_platforms, rating_top } =
    Props.game;
  const metaColor = `${metacritic > 75 ? '#6dc849' : 'yellow'}`;

  return (
    <>
      <Card
        boxShadow={'0.5px 0.5px 3px 0  black'}
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
                {parent_platforms.map(({ platform: { slug, id } }) => {
                  return <PlatformIcon key={id} slug={slug} id={id} />;
                })}
              </Flex>

              {metacritic > 40 && (
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
              )}
            </HStack>
            <Flex
              gap={'2rem '}
              alignItems={'center '}
              justifyContent={'space-between'}
              width={'fit-content'}
            >
              <Heading size="2xl" lineHeight={'1.2'} fontWeight={'600'}>
                {name}
              </Heading>
              <RatingIcon rating={rating_top} />
            </Flex>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
