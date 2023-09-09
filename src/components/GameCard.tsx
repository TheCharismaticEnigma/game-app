import {
  Box,
  Card,
  CardBody,
  Flex,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Game } from '../hooks/useGames';
import PlatformIcon from '../utils/PlatformIcons';
import RatingIcon from '../utils/RatingIcons';
import getCroppedImageUrl from '../utils/getCroppedImageUrl';
import CriticScore from './CriticScore';
import { useState } from 'react';

interface CardProps {
  game: Game;
  mediaHeight: string;
}

const GameCard = (Props: CardProps) => {
  const { game, mediaHeight } = Props;

  const {
    background_image,
    name,
    metacritic,
    parent_platforms,
    rating_top,
    slug,
    game_series_count,
    playtime,
    developers,
    released,
  } = game;

  // console.log(game);

  // Store HOVERED STATE IN A STATE VARIABLE. Display only if hovered.
  const [isHovered, setIsHovered] = useState(false);

  const shadowColor = isHovered ? 'black' : 'rgb(50,50,50) inset';

  return (
    <>
      <Link to={`/games/${slug}`}>
        <Card
          boxShadow={`0.2px 0.2px 3px 0 ${shadowColor}`}
          cursor={'pointer'}
          borderRadius={'3xl'}
          overflow={'hidden'}
          width={'100%'}
          minH={'100%'}
          height={'auto'}
          zIndex={isHovered ? 1 : -1}
          background={isHovered ? 'gray.800' : 'gray.900'}
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          <Box h={mediaHeight}>
            <Image
              src={getCroppedImageUrl(background_image)}
              h={'100%'}
              width={'100%'}
              objectFit={'cover'}
              alt={`${name} game image`}
              borderRadius="lg"
            />
          </Box>

          <CardBody>
            <Stack mt="4" spacing="5">
              <HStack pointerEvents={'none'} justifyContent={'space-between'}>
                <Flex alignItems={'center'} gap={'10px'}>
                  {parent_platforms?.map(({ platform: { slug, id } }) => {
                    return <PlatformIcon key={id} slug={slug} id={id} />;
                  })}
                </Flex>
                {metacritic > 40 && <CriticScore metacritic={metacritic} />}
              </HStack>
              <Flex
                gap={'2rem '}
                alignItems={'center '}
                justifyContent={'space-between'}
                width={'fit-content'}
              >
                <Heading
                  size={{ base: '2xl', md: 'xl', lg: '2xl' }}
                  lineHeight={'1.2'}
                  fontWeight={'600'}
                >
                  {name}
                </Heading>
                <RatingIcon rating={rating_top} />
              </Flex>
            </Stack>

            {isHovered && (
              <Stack mt={4} spacing={5}>
                <Text>Gracias a todos</Text>
                <Text>Gracias a todos</Text>
                <Text>Gracias a todos</Text>
                <Text>Gracias a todos</Text>
                <Text>Gracias a todos</Text>
                <Text>Gracias a todos</Text>
                <Text>Gracias a todos</Text>
                <Text>Gracias a todos</Text>
                <Text>Gracias a todos</Text>
                <Text>Gracias a todos</Text>
                <Text>Gracias a todos</Text>
                <Text>Gracias a todos</Text>
              </Stack>
            )}
          </CardBody>
        </Card>
      </Link>
    </>
  );
};

export default GameCard;
