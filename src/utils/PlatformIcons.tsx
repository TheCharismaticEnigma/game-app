import { HiOutlineComputerDesktop } from 'react-icons/hi2';
import { SiXbox } from 'react-icons/si';
import { IoLogoPlaystation } from 'react-icons/io';
import { RiMacbookLine } from 'react-icons/ri';
import { FcLinux } from 'react-icons/fc';
import { Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';

const slugs: string[] = ['pc', 'xbox', 'playstation', 'mac', 'linux'];

const icons: IconType[] = [
  HiOutlineComputerDesktop,
  SiXbox,
  IoLogoPlaystation,
  RiMacbookLine,
  FcLinux,
];

export default function getPlatformIcon(platform: {
  id: number;
  slug: string;
}) {
  const index = slugs.indexOf(platform.slug);

  if (index === -1) return null;

  return <Icon key={platform.id} boxSize={'1.6rem'} as={icons[index]} />;
}
