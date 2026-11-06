export const getCalculation = ({
  lastChanged,
  distance,
  pace,
  time,
}) => {
  if (lastChanged === 'distance' && distance > 0) {
    if (time > 0 && pace === 0) return 'pace';
    if (pace > 0) return 'time';
  }

  if (lastChanged === 'pace' && pace > 0) {
    if (distance > 0) return 'time';
    if (time > 0) return 'distance';
  }

  if (lastChanged === 'time' && time > 0) {
    if (distance > 0) return 'pace';
    if (pace > 0) return 'distance';
  }

  return null;
};
