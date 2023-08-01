import { Heading, useColorMode } from '@chakra-ui/react';
import usePlatforms from '../hooks/usePlatforms';
import { useGenres } from '../hooks/useGenres';
import useGameQueryStore from '../store';

const AppHeading = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();

  const selectedPlatformHeading =
    platforms?.results.find(({ id }) => id === gameQuery.selectedPlatformId)
      ?.name || '';

  const selectedGenreHeading =
    genres?.results.find(({ id }) => id === gameQuery.selectedPlatformId)
      ?.name || 'TOP PICKS';

  const platformName = `${selectedPlatformHeading
    .charAt(0)
    .toUpperCase()}${selectedPlatformHeading.slice(1)}`;

  const { colorMode } = useColorMode();
  const suffix = `${selectedGenreHeading === 'TOP PICKS' ? '' : 'Games'}`;

  return (
    <>
      <Heading
        color={`${colorMode === 'dark' ? '#6dc849' : '#671ddf'}`}
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
