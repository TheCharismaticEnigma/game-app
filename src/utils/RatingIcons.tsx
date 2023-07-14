import { Image, ImageProps } from '@chakra-ui/react';

import bullsEye from '../assets/bulls-eye.webp';
import meh from '../assets/meh.webp';
import thumbsUp from '../assets/thumbs-up.webp';

type IconMap = {
  [rating: string]: ImageProps;
};

const iconsMap: IconMap = {
  5: { src: bullsEye, alt: 'exceptional' },
  4: { src: thumbsUp, alt: 'recommended' },
  3: { src: meh, alt: 'terrible' },
};

interface Props {
  rating: number;
}

export default function RatingIcon({ rating }: Props) {
  if (rating < 3) return null;
  const boxSize = `${rating === 5 ? '35px' : '30px'}`;

  return (
    <>
      <Image objectFit={'cover'} boxSize={boxSize} {...iconsMap[rating]} />
    </>
  );
}
