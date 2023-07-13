const getCroppedImageUrl = (url: string, width = '600', height = '400') => {
  if (!url) return '';
  const target = 'media/';
  const replacement = `${target}crop/${width}/${height}/`;
  return url.replace(target, replacement);
};

export default getCroppedImageUrl;
