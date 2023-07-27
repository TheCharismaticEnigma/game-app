import { Heading, useColorMode } from '@chakra-ui/react';
import usePlatforms from '../hooks/usePlatforms';
import { useGenres } from '../hooks/useGenres';
interface GameHeadingProps {
  selectedGenreId?: number;
  selectedPlatformId?: number;
}

const AppHeading = (Props: GameHeadingProps) => {
  const { selectedGenreId, selectedPlatformId } = Props;
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();

  const selectedPlatformHeading =
    platforms?.results.find(({ id }) => id === selectedPlatformId)?.name || '';

  const selectedGenreHeading =
    genres?.results.find(({ id }) => id === selectedGenreId)?.name ||
    'TOP PICKS';

  const platformName = `${selectedPlatformHeading
    .charAt(0)
    .toUpperCase()}${selectedPlatformHeading.slice(1)}`;

  const { colorMode } = useColorMode();
  const suffix = `${selectedGenreHeading === 'TOP PICKS' ? '' : 'Games'}`;

  return (
    <>
      <Heading
        border={'2px solid tomato '}
        textAlign={{ base: 'center', md: 'left' }}
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
