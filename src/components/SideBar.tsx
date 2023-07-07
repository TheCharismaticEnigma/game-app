import { useColorMode } from '@chakra-ui/react';
import { Heading, Flex, Stack, Image, Button } from '@chakra-ui/react';
import { List } from '@chakra-ui/react';
import SideBarListItem from './SideBarListItem';
import { BaseSyntheticEvent } from 'react';

export interface SideBarProps {
  genres: {
    id: number;
    name: string;
    slug: string;
    image_background: string;
  }[];
}

const SideBar = (Props: SideBarProps) => {
  const { genres } = Props;
  const { colorMode } = useColorMode();

  const handleButtonClick = (event: BaseSyntheticEvent) =>
    console.log(event.target?.value);

  return (
    <>
      <Flex direction={'column'} alignItems={'center'} gap={'1rem '}>
        <Heading
          color={colorMode === 'dark' ? 'purple.300' : 'purple.700'}
          width={'85%'}
          fontFamily={'sans-serif'}
          fontStyle={'italic'}
          textTransform={'capitalize'}
          letterSpacing={'0.5px'}
          m={'1.5rem auto 1.5rem auto '}
          as={'h2'}
          fontSize={'3.5rem'}
        >
          Genres
        </Heading>

        <List width={'85%'}>
          {genres.map((genre) => {
            const { id, name, slug, image_background } = genre;
            return (
              <>
                <SideBarListItem
                  key={id}
                  slug={slug}
                  name={name}
                  image_background={image_background}
                  handleClick={handleButtonClick}
                />
              </>
            );
          })}
        </List>
      </Flex>
    </>
  );
};

export default SideBar;
