import { List, ListItem, Box } from '@chakra-ui/react';
import { Genre } from '../hooks/useGenres';
import GenreList from './GenreList';

export interface SideBarProps {
  genres: Genre[] | undefined;
  selectedGenreId?: number;
  getSelectedGenre: (genre: Genre) => void;
}

const SideBar = (Props: SideBarProps) => {
  const { genres, selectedGenreId, getSelectedGenre } = Props;

  return (
    <>
      <Box marginTop={'2rem'} position={'relative'}>
        <List width={'85%'} margin={'0 auto '}>
          {genres?.map((genre) => {
            return (
              <ListItem key={genre.id}>
                <GenreList
                  genre={genre}
                  isSelectedGenre={genre.id === selectedGenreId}
                  updateGenre={getSelectedGenre}
                />
              </ListItem>
            );
          })}
        </List>
      </Box>
    </>
  );
};

export default SideBar;
