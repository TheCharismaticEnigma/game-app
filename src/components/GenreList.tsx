import { useRef } from 'react';
import { Box, Stack, Image, Button } from '@chakra-ui/react';
import { Genre } from '../hooks/useGenres';

interface Props {
  genre: Genre;
  isSelectedGenre: boolean;
  updateGenre: (genre: Genre) => void;
}

const GenreList = ({ genre, isSelectedGenre, updateGenre }: Props) => {
  const { image_background, name, slug } = genre;

  const fontSize = `${isSelectedGenre ? '1.75' : '1.6'}rem`;
  const color = `${isSelectedGenre ? 'purple' : 'white'}`;

  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <Box minH={'50px'} mb={'0.5rem'}>
      <Stack spacing={'1.5rem'} direction="row" alignItems={'center'}>
        <Image
          boxSize="40px"
          borderRadius={'10px'}
          objectFit="cover"
          src={image_background}
          alt={name}
        />
        <Button
          onClick={() => {
            updateGenre(genre);
          }}
          overflow={'hidden'}
          variant={'link'}
          fontWeight={'500'}
          size="lg"
          value={slug}
          ref={buttonRef}
          fontSize={fontSize}
          colorScheme={color}
        >
          {name.length > 15 ? name.split(' ')[0] : name}
        </Button>
      </Stack>
    </Box>
  );
};

export default GenreList;
