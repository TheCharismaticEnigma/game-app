import { BiSolidGridAlt, BiSolidCard } from 'react-icons/bi';
import {
  Flex,
  Select,
  Text,
  Icon,
  useColorMode,
  Show,
  HStack,
} from '@chakra-ui/react';
import { Platform, usePlatforms } from '../hooks/usePlatforms';
interface DropdownProps {
  selectPlatform: (selectedPlatform: Platform) => void;
  selectOrdering: (selectedOrdering: string | null) => void;
  setDisplay: (gridDisplayStatus: boolean) => void;
}

const Dropdowns = (Props: DropdownProps) => {
  const { selectPlatform, selectOrdering, setDisplay } = Props;
  const { data } = usePlatforms();
  const platforms = data?.results;
  const { colorMode } = useColorMode();
  const selectIconColor = `${colorMode === 'dark' ? '#6dc849' : '#671DDF'}`;
  const iconHoverColor = `${colorMode === 'dark' ? 'teal.400' : 'purple.800'}`;

  return (
    <>
      <Flex
        as="div"
        padding={'0 0.5rem '}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Flex gap={'1.5rem'}>
          <Select
            cursor={'pointer'}
            fontSize={'2rem'}
            fontFamily={'cursive'}
            size={'lg'}
            borderColor={selectIconColor}
            placeholder={`Order by `}
            width={'15rem'}
            textAlign={'left'}
            onChange={(event) => {
              selectOrdering(event.target.value);
            }}
          >
            <option value="-added">Date added</option>
            <option value="-name">Name</option>
            <option value="-released">Release Date</option>
            <option value="-metacritic">Popularity</option>
            <option value="-rating">Avg Rating</option>
          </Select>

          <Select
            cursor={'pointer'}
            fontSize={'2rem'}
            fontFamily={'cursive'}
            size={'lg'}
            borderColor={selectIconColor}
            textAlign={'left'}
            width={'15rem'}
            placeholder="Platforms"
            onChange={(event) => {
              const target = platforms?.find(
                (platform) => platform.slug === event.target?.value
              );

              if (target) selectPlatform(target);
            }}
          >
            {platforms?.map((platform) => {
              const { id, name, slug } = platform;

              return (
                <option key={id} value={slug}>
                  {name}
                </option>
              );
            })}
          </Select>
        </Flex>

        <Show above="md">
          <Flex alignItems={'center'} gap={'2rem '}>
            <Text
              fontFamily={'cursive'}
              fontSize={'1.5rem'}
              fontStyle={'italic'}
            >
              Display Options:{' '}
            </Text>
            <HStack spacing={'1rem'}>
              <Icon
                onClick={() => setDisplay(false)}
                color={selectIconColor}
                _hover={{ color: `${iconHoverColor}` }}
                cursor={'pointer'}
                as={BiSolidCard}
                boxSize={'4rem'}
                focusable={'true'}
              ></Icon>

              <Icon
                onClick={() => setDisplay(true)}
                cursor={'pointer'}
                focusable={'true'}
                as={BiSolidGridAlt}
                color={selectIconColor}
                _hover={{ color: `${iconHoverColor}` }}
                boxSize={'4rem'}
              ></Icon>
            </HStack>
          </Flex>
        </Show>
      </Flex>
    </>
  );
};

export default Dropdowns;
