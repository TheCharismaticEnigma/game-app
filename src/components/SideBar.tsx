import { Flex } from '@chakra-ui/react';

import SidebarList from './SidebarList';

const SideBar = () => {
  const listContent = [
    { listHeading: 'Genres', listText: ['Action', 'Strategy', 'RPG'] },

    {
      listHeading: 'New Releases',
      listText: ['Last 30 days', 'This Week', 'Next Week'],
    },
    {
      listHeading: 'Top',
      listText: ['Best of the year', 'Popular in 2022', 'All time top 250'],
    },
  ];

  return (
    <>
      <Flex direction={'column'} alignItems={'center'}>
        <SidebarList listContent={listContent} />
      </Flex>
    </>
  );
};

export default SideBar;
