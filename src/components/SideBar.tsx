import { List, ListItem, Flex } from '@chakra-ui/react';
import { Genre } from '../hooks/useGenres';
import GenreList from './GenreList';

export interface SideBarProps {
  genres: Genre[];
  getSelectedGenre: (genre: Genre) => void;
}

const SideBar = (Props: SideBarProps) => {
  const { genres, getSelectedGenre } = Props;

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
            return (
              <ListItem key={genre.id}>
                <GenreList genre={genre} updateGenre={getSelectedGenre} />
              </ListItem>
            );
          })}
        </List>
      </Flex>
    </>
  );
};

export default SideBar;
