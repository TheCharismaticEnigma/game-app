import { Heading, useColorMode } from '@chakra-ui/react';

interface GameHeadingProps {
  selectedGenreHeading?: string;
  selectedPlatformHeading?: string;
}

const AppHeading = (Props: GameHeadingProps) => {
  const { selectedGenreHeading = 'TOP PICKS', selectedPlatformHeading = '' } =
    Props;

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
