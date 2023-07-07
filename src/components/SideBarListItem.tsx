import { ListItem, Stack, Image, Button } from '@chakra-ui/react';
import { BaseSyntheticEvent } from 'react';

interface Props {
  image_background: string;
  name: string;
  slug: string;
  handleClick: (event: BaseSyntheticEvent) => void;
}

const SideBarListItem = (Props: Props) => {
  const { image_background, name, slug, handleClick } = Props;

  return (
    <ListItem minH={'50px'} mb={'0.5rem'}>
      <Stack spacing={'1.5rem'} direction="row" alignItems={'center'}>
        <Image
          boxSize="40px"
          borderRadius={'10px'}
          objectFit="cover"
          src={image_background}
          alt="Dan Abramov"
        />
        <Button
          onClick={(event) => handleClick(event)}
          fontSize={'1.8rem'}
          overflow={'hidden'}
          variant={'ghost'}
          value={slug}
          colorScheme="teal"
          size="lg"
        >
          {name.length > 15 ? name.split(' ')[0] : name}
        </Button>
      </Stack>
    </ListItem>
  );
};

export default SideBarListItem;
