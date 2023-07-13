import { Box, Stack, Image, Button } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { Genre } from '../hooks/useGenres';

interface Props {
  genre: Genre;
  updateGenre: (genre: Genre) => void;
}

const GenreList = ({ genre, updateGenre }: Props) => {
  const { image_background, name, slug } = genre;
  const [isActive, setActiveState] = useState(false);

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
            setActiveState(!isActive);
          }}
          fontSize={'1.7rem'}
          overflow={'hidden'}
          variant={'link'}
          fontWeight={'500'}
          colorScheme={`${isActive ? 'teal' : 'white'}`}
          size="lg"
          value={slug}
          ref={buttonRef}
        >
          {name.length > 15 ? name.split(' ')[0] : name}
        </Button>
      </Stack>
    </Box>
  );
};

export default GenreList;
