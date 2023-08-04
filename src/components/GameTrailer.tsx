import useTrailers from '../hooks/useTrailers';

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (error) throw error;

  if (isLoading) return null; // React Router Catches and shows ErrorPage.

  const first = data?.results[0];
  if (!first) return null;

  return (
    <video autoPlay controls src={first.data[480]} poster={first.preview} />
  );
};

export default GameTrailer;
