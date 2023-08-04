import { List, ListItem, Box } from '@chakra-ui/react';
import { Genre } from '../entities/Genre';
import GenreList from './GenreList';
import useGameQueryStore from '../store';

export interface SideBarProps {
  genres: Genre[] | undefined;
}

const SideBar = (Props: SideBarProps) => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  const { genres } = Props;

  return (
    <>
      <Box marginTop={'2rem'} position={'relative'}>
        <List width={'85%'} margin={'0 auto '}>
          {genres?.map((genre) => {
            return (
              <ListItem key={genre.id}>
                <GenreList
                  genre={genre}
                  isSelectedGenre={genre.id === gameQuery.selectedGenreId}
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
