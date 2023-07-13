import { List, ListItem, Flex } from '@chakra-ui/react';
import { Genre } from '../hooks/useGenres';
import GenreList from './GenreList';

export interface SideBarProps {
  genres: Genre[];
  selectedGenre: Genre | null;
  getSelectedGenre: (genre: Genre) => void;
}

const SideBar = (Props: SideBarProps) => {
  const { genres, selectedGenre, getSelectedGenre } = Props;

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
                <GenreList
                  genre={genre}
                  isSelectedGenre={genre.id === selectedGenre?.id}
                  updateGenre={getSelectedGenre}
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
