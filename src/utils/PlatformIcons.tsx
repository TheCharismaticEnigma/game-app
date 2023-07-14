import { HiOutlineComputerDesktop } from 'react-icons/hi2';
import { SiXbox } from 'react-icons/si';
import { IoLogoPlaystation } from 'react-icons/io';
import { RiMacbookLine } from 'react-icons/ri';
import { FcLinux } from 'react-icons/fc';
import { IconType } from 'react-icons';
import { Icon } from '@chakra-ui/react';

type IconMap = {
  [key: string]: IconType;
};

const iconsMap: IconMap = {
  pc: HiOutlineComputerDesktop,
  xbox: SiXbox,
  playstation: IoLogoPlaystation,
  mac: RiMacbookLine,
  linux: FcLinux,
};

interface Props {
  slug: string;
  id: number;
}

export default function PlatformIcon({ slug, id }: Props) {
  if (!iconsMap[slug]) return null;

  return <Icon key={id} boxSize={'1.7rem'} as={iconsMap[slug]} />;
}
