import { Box, Heading, List, ListItem, ListIcon } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';

import { SearchIcon } from '@chakra-ui/icons';

interface ListContent {
  listHeading: string;
  listText: string[];
}

interface ListProps {
  listContent: ListContent[];
}

const SidebarList = (Props: ListProps) => {
  const { colorMode } = useColorMode();
  const iconColor = `${colorMode === 'dark' ? 'white' : 'black'}`;
  const headingColor = `${colorMode === 'dark' ? 'teal.500' : 'purple.700'}`;

  const { listContent } = Props;

  return (
    <>
      <Box
        width={'85%'}
        display={'flex'}
        flexDirection={'column'}
        alignItems={'left'}
      >
        {listContent.map((content) => {
          const { listHeading, listText } = content;

          return (
            <>
              <Heading
                color={headingColor}
                width={'90%'}
                fontFamily={'cursive'}
                fontStyle={'italic'}
                textTransform={'capitalize'}
                letterSpacing={'0.5px'}
                m={'1.5rem auto 1rem auto '}
                as={'h2'}
                size={'xl'}
              >
                {listHeading}
              </Heading>

              <List mb={'1rem'} spacing={3}>
                {listText.map((text) => {
                  return (
                    <>
                      <ListItem
                        width={'90.0%'}
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'left'}
                        margin={'1rem auto '}
                        fontSize={'3xl'}
                      >
                        <ListIcon
                          mr={'1rem'}
                          as={SearchIcon}
                          color={iconColor}
                        />
                        {text}
                      </ListItem>
                    </>
                  );
                })}
              </List>
            </>
          );
        })}
      </Box>
    </>
  );
};

export default SidebarList;
