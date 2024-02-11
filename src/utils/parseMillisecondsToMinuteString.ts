export const parseMillisecondsToMinuteString = (milliseconds: number) => {
  let seconds = milliseconds / 1000;
  let minuteString = String(Math.floor(seconds / 60));
  let secondString = String(Math.floor(seconds % 60));

  secondString = secondString.padStart(2, "0");
  minuteString = minuteString.padStart(2, "0");

  return `${minuteString}:${secondString}`;
};
