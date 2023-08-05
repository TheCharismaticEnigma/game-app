import { Link, SimpleGrid, Text } from '@chakra-ui/react';
import CriticScore from './CriticScore';
import DefinitionItem from './DefinitionItem';
import { Game } from '../entities/Game';

interface Props {
  game: Game;
}

/* 
website: string;
  updated: string; // updated date.
  released: string;
  playtime: number;
  game_series_count: number;
  developers: Developer[] 
 */

const GameAttributes = ({ game }: Props) => {
  return (
    <>
      <SimpleGrid mt={4} padding={'1'} columns={{ base: 2, md: 2 }} as="dl">
        <DefinitionItem term="Game Series Count">
          <Text>{game.game_series_count} Chapters </Text>
        </DefinitionItem>

        <DefinitionItem term="Metascore">
          <CriticScore metacritic={game?.metacritic || 0} />
        </DefinitionItem>

        <DefinitionItem term={'Platforms'}>
          {game?.parent_platforms.map(({ platform }) => (
            <Text key={platform.id}>{platform.name}</Text>
          ))}
        </DefinitionItem>

        <DefinitionItem term="Developers">
          {game?.developers.map(({ id, name }) => (
            <Text key={id}>{name}</Text>
          ))}
        </DefinitionItem>

        <DefinitionItem term="Genres">
          {game?.genres.map(({ id, name }) => (
            <Text key={id}>{name}</Text>
          ))}
        </DefinitionItem>

        <DefinitionItem term="Publishers">
          {game?.publishers.map(({ id, name }) => (
            <Text key={id}>{name}</Text>
          ))}
        </DefinitionItem>

        <DefinitionItem term={'Website'}>
          <Link
            whiteSpace={'nowrap'}
            href={game?.website}
            target="_blank"
            color={'grey.600'}
          >
            {game?.website}
          </Link>
        </DefinitionItem>
      </SimpleGrid>
    </>
  );
};

export default GameAttributes;
