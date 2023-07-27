// Returns the time period during which the data is considered new.
import ms from 'ms';

const staleTime = (time?: string) => {
  if (!time) return;

  return ms(time);
};

export default staleTime;
