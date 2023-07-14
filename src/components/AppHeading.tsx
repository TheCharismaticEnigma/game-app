import { Heading, useColorMode } from '@chakra-ui/react';

interface GameHeadingProps {
  selectedGenreHeading?: string;
}

const AppHeading = (Props: GameHeadingProps) => {
  const { selectedGenreHeading = 'TOP PICKS' } = Props;
  const { colorMode } = useColorMode();
  const suffix = `${selectedGenreHeading === 'TOP PICKS' ? '' : 'Games'}`;

  return (
    <>
      <Heading
        color={`${colorMode === 'dark' ? '#6dc849' : '#671ddf'}`}
        fontWeight={'500'}
        fontSize={'8xl'}
        as={'h1'}
      >
        {selectedGenreHeading} {suffix}
      </Heading>
    </>
  );
};

export default AppHeading;
