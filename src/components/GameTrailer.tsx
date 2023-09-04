import { useEffect } from 'react';
import useTrailers from '../hooks/useTrailers';

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  useEffect(() => {
    const videoEl: HTMLVideoElement | null = document.getElementById(
      'gameTrailer'
    ) as HTMLVideoElement;

    if (videoEl) videoEl.volume = 0.3;
  }, []);

  const { data, error, isLoading } = useTrailers(gameId);

  if (error) throw error;

  if (isLoading) return null; // React Router Catches and shows ErrorPage.

  const first = data?.results[0];
  if (!first) return null;

  return (
    <video
      id="gameTrailer"
      autoPlay
      controls
      src={first.data['max']}
      poster={first.preview}
    />
  );
};

export default GameTrailer;
