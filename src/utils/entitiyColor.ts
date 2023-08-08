import { useColorMode } from '@chakra-ui/react';

// Dark Mode Green => #6dc849
// Light Mode Purple => rgb(103, 29, 223)

const EntitiyColor = () => {
  const { colorMode } = useColorMode();
  const color = `${colorMode === 'dark' ? '#6dc849' : 'rgb(103, 29, 223)'}`;
  const hoverColor = `${
    colorMode === 'dark' ? '#1DB954' : 'rgb(103, 29, 223, 0.8)'
  }`;
  return { color, hoverColor };
};

export default EntitiyColor;
