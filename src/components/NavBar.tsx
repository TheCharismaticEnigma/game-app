import { Box, Flex, Spacer, Image } from '@chakra-ui/react';
import { FormControl, FormLabel, Input, Switch } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useColorMode } from '@chakra-ui/react';

import logo from '../assets/logo.webp';

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Flex as="nav" gap={'1rem'} padding={'1rem '} alignItems={'center'}>
        <Box h={'5rem'} w={'6rem'}>
          <Image
            h={'100%'}
            w={'100%'}
            src={logo}
            alt="Website Logo"
            loading="lazy"
          />
        </Box>
        <Spacer />

        <FormControl>
          <SearchIcon
            _hover={{ color: 'black ' }}
            boxSize={8}
            position={'absolute'}
            transform={'translate(50%,50%)'}
          />
          <Input
            variant={'filled'}
            _placeholder={{
              color: `${
                colorMode === 'dark' ? 'rgba(255,255,255,0.7)' : 'black'
              }`,
            }}
            _hover={{ border: '0.5px solid white' }}
            fontSize={'2rem'}
            h={'4rem'}
            padding={'1px 5px 1px 5rem'}
            borderRadius={'2.5rem '}
            border={`0.5px solid ${
              colorMode === 'light' ? 'black' : 'rgba(255,255,255,0.5)'
            }`}
            type="text"
            placeholder={`Search from 851,081 games`}
            autoCorrect="off"
          ></Input>
        </FormControl>
        <Spacer />

        <Flex minW={'fit-content'} gap={'1rem'} alignItems={'center '}>
          <Switch
            onChange={toggleColorMode}
            isChecked={colorMode === 'dark'}
            size={'lg'}
            colorScheme="teal"
            id="toggle-mode"
          />

          <FormLabel
            fontFamily={'cursive'}
            fontStyle={'italic'}
            fontSize={'2rem'}
            htmlFor="toggle-mode"
            mb="0"
          >
            Dark Mode
          </FormLabel>
        </Flex>
      </Flex>
    </>
  );
};

export default NavBar;
