import placholderImage from '../assets/no-image-placeholder.webp';

const getCroppedImageUrl = (url: string, width = '600', height = '400') => {
  if (!url) return placholderImage;
  const target = 'media/';
  const replacement = `${target}crop/${width}/${height}/`;
  return url.replace(target, replacement);
};

export default getCroppedImageUrl;
