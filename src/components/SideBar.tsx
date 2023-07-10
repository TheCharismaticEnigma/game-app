import { BaseSyntheticEvent } from 'react';
import { List, ListItem, Flex } from '@chakra-ui/react';
import SideBarListItem from './SideBarListItem';

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

  const handleButtonClick = (event: BaseSyntheticEvent) =>
    console.log(event.target?.value);

  return (
    <>
      <Flex
        marginTop={'2rem'}
        direction={'column'}
        alignItems={'center'}
        gap={'1rem '}
      >
        <List width={'85%'}>
          {genres.map((genre) => {
            const { id, name, slug, image_background } = genre;
            return (
              <ListItem key={id}>
                <SideBarListItem
                  key={id}
                  slug={slug}
                  name={name}
                  image_background={image_background}
                  handleClick={handleButtonClick}
                />
              </ListItem>
            );
          })}
        </List>
      </Flex>
    </>
  );
};

export default SideBar;
