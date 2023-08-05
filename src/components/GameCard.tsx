import {
  Card,
  CardBody,
  Flex,
  HStack,
  Heading,
  Image,
  Stack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Game } from '../hooks/useGames';
import PlatformIcon from '../utils/PlatformIcons';
import RatingIcon from '../utils/RatingIcons';
import getCroppedImageUrl from '../utils/getCroppedImageUrl';
import CriticScore from './CriticScore';
interface CardProps {
  game: Game;
  mediaHeight: string;
}

const GameCard = (Props: CardProps) => {
  const {
    background_image,
    name,
    metacritic,
    parent_platforms,
    rating_top,
    slug,
  } = Props.game;

  return (
    <>
      <Link to={`/games/${slug}`}>
        <Card
          boxShadow={'0.5px 0.5px 3px 0  black'}
          cursor={'pointer'}
          borderRadius={'3xl'}
          overflow={'hidden'}
          width={'100%'}
          height={'100%'}
        >
          <Image
            src={getCroppedImageUrl(background_image)}
            h={Props.mediaHeight}
            objectFit={'cover'}
            alt={`${name} game image`}
            borderRadius="lg"
          />
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
          </CardBody>
        </Card>
      </Link>
    </>
  );
};

export default GameCard;
