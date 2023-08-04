import { SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Show,
  Spacer,
  Switch,
  useColorMode,
} from '@chakra-ui/react';
import { useRef } from 'react';

import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.webp';
import useGameQueryStore from '../store';

const NavBar = () => {
  const setSearchQuery = useGameQueryStore((s) => s.setSearchQuery);

  const inputRef = useRef<HTMLInputElement>(null);

  const { colorMode, toggleColorMode } = useColorMode();

  const location = useLocation();

  return (
    <>
      <Flex
        as="nav"
        width={'100%'}
        gap={'1rem'}
        padding={'1rem '}
        alignItems={'center'}
      >
        <Box h={'5rem'} w={'6rem'}>
          <Link
            to={'/'}
            onClick={() => {
              if (location.pathname === '/') window.location.reload();
            }}
          >
            <Image
              h={'100%'}
              w={'100%'}
              src={logo}
              alt="Website Logo"
              loading="lazy"
              cursor={'pointer'}
            />
          </Link>
        </Box>
        <Spacer />

        <FormControl>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              const { current } = inputRef;

              if (current && current.value.length > 0) {
                setSearchQuery(current.value);
              }
            }}
          >
            <SearchIcon
              _hover={{ color: 'black ' }}
              boxSize={8}
              position={'absolute'}
              transform={'translate(50%,50%)'}
            />
            <Input
              ref={inputRef}
              variant={'outline'}
              _placeholder={{
                color: `${
                  colorMode === 'dark' ? 'rgba(255,255,255,0.7)' : 'black'
                }`,
              }}
              _hover={{
                border: `0.5px solid ${
                  colorMode === 'dark' ? 'white' : 'black'
                }`,
              }}
              fontSize={{ base: '1rem', sm: '2rem' }}
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
          </form>
        </FormControl>
        <Spacer />

        <Show above="md">
          <FormLabel
            fontFamily={'cursive'}
            fontStyle={'italic'}
            fontSize={'2rem'}
            htmlFor="toggle-mode"
            whiteSpace={'nowrap'}
            mb="0"
          >
            Dark Mode
          </FormLabel>

          <Flex minW={'fit-content'} gap={'1rem'} alignItems={'center '}>
            <Switch
              onChange={toggleColorMode}
              isChecked={colorMode === 'dark'}
              size={'lg'}
              colorScheme="green"
              id="toggle-mode"
            />
          </Flex>
        </Show>
      </Flex>
    </>
  );
};

export default NavBar;
