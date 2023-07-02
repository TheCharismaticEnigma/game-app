// Main App component. The Entire app code will be in here.
// This component is rendered inside a strict mode component.

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <div>Gracias a todos. Viva Mexico Cabrones. </div>
    </ChakraProvider>
  );
}

export default App;
