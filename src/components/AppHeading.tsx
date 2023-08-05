import { Heading } from '@chakra-ui/react';
import usePlatforms from '../hooks/usePlatforms';
import { useGenres } from '../hooks/useGenres';
import useGameQueryStore from '../store';
import EntitiyColor from '../utils/entitiyColor';

const AppHeading = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();

  const selectedPlatformHeading =
    platforms?.results.find(({ id }) => id === gameQuery.selectedPlatformId)
      ?.name || '';

  const selectedGenreHeading =
    genres?.results.find(({ id }) => id === gameQuery.selectedGenreId)?.name ||
    'TOP PICKS';

  const platformName = `${selectedPlatformHeading
    .charAt(0)
    .toUpperCase()}${selectedPlatformHeading.slice(1)}`;

  const { color } = EntitiyColor();
  const suffix = `${selectedGenreHeading === 'TOP PICKS' ? '' : 'Games'}`;

  return (
    <>
      <Heading
        color={color}
        fontWeight={'500'}
        fontSize={'8xl'}
        fontFamily={'system'}
        as={'h1'}
      >
        {platformName} {selectedGenreHeading} {suffix}
      </Heading>
    </>
  );
};

export default AppHeading;
