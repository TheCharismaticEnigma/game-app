import { Box } from '@chakra-ui/react';

import NavBar from './components/NavBar';
import AppContent from './components/AppContent';

function App() {
  return (
    <>
      <Box>
        <NavBar />
        <AppContent />
      </Box>
    </>
  );
}

export default App;
