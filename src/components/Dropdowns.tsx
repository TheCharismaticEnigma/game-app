import { BiSolidGridAlt, BiSolidCard } from 'react-icons/bi';
import { Flex, Select, Text, Icon, useColorMode } from '@chakra-ui/react';
import { Platform, usePlatforms } from '../hooks/usePlatforms';
interface DropdownProps {
  selectedPlatform: (selectedPlatform: Platform) => void;
}

const Dropdowns = (Props: DropdownProps) => {
  const { selectedPlatform } = Props;
  const { data: platforms } = usePlatforms();
  const { colorMode } = useColorMode();
  const selectIconColor = `${colorMode === 'dark' ? 'teal.600' : '#671ddf'}`;
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
          >
            <option value="-relevance">Relevance</option>
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
              const target = platforms.find(
                (platform) => platform.slug === event.target?.value
              );

              if (target) selectedPlatform(target);
            }}
          >
            {platforms.map((platform) => {
              const { id, name, slug } = platform;

              return (
                <option key={id} value={slug}>
                  {name}
                </option>
              );
            })}
          </Select>
        </Flex>

        <Flex alignItems={'center'} gap={'1rem '}>
          <Text fontFamily={'cursive'} fontSize={'1.5rem'} fontStyle={'italic'}>
            Display Options:{' '}
          </Text>

          <Icon
            color={selectIconColor}
            _hover={{ color: `${iconHoverColor}` }}
            cursor={'pointer'}
            onClick={() => console.log('clicked')}
            as={BiSolidCard}
            boxSize={'4rem'}
            focusable={'true'}
          ></Icon>

          <Icon
            cursor={'pointer'}
            focusable={'true'}
            as={BiSolidGridAlt}
            color={selectIconColor}
            _hover={{ color: `${iconHoverColor}` }}
            boxSize={'4rem'}
          ></Icon>
        </Flex>
      </Flex>
    </>
  );
};

export default Dropdowns;
