import { Heading, useColorMode } from '@chakra-ui/react';

interface GameHeadingProps {
  selectedGenreHeading?: string;
  selectedPlatformHeading?: string;
}

const AppHeading = (Props: GameHeadingProps) => {
  const { selectedGenreHeading = 'TOP PICKS', selectedPlatformHeading = '' } =
    Props;
  console.log(selectedPlatformHeading);
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
        {selectedPlatformHeading} {selectedGenreHeading} {suffix}
      </Heading>
    </>
  );
};

export default AppHeading;
