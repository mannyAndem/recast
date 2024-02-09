export const parseMillisecondsToMinuteString = (milliseconds: number) => {
  let seconds = milliseconds / 1000;
  return `${Math.floor(seconds / 60)}:${Math.floor(seconds % 60)}`;
};
