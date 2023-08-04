import { useRef } from 'react';
import { Box, Stack, Image, Button } from '@chakra-ui/react';
import { Genre } from '../entities/Genre';
import useGameQueryStore from '../store';

interface Props {
  genre: Genre;
  isSelectedGenre: boolean;
}

const GenreList = ({ genre, isSelectedGenre }: Props) => {
  const setSelectedGenreId = useGameQueryStore((s) => s.setSelectedGenreId);
  const { image_background, name, slug, id } = genre;

  const fontSize = `${isSelectedGenre ? '1.8' : '1.7'}rem`;
  const color = `${isSelectedGenre ? '#671DDF' : 'white'}`;

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
            setSelectedGenreId(id);
          }}
          overflow={'hidden'}
          variant={'link'}
          fontWeight={'500'}
          value={slug}
          ref={buttonRef}
          fontSize={fontSize}
          colorScheme={color}
          whiteSpace={'normal'}
          textAlign={'left'}
          lineHeight={'1.2'}
        >
          {name}
        </Button>
      </Stack>
    </Box>
  );
};

export default GenreList;
