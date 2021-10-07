import { isEven } from '.';

const colors = {
  red: 'var(--red)',
  green: 'var(--green)',
  offGreen: 'var(--off-green)',
  offRed: 'var(--off-red)',
};

export const featuresCardStyle = (i: number) => {
  const { red, green, offGreen, offRed } = colors;

  return {
    color: isEven(i) ? green : red,
    backgroundColor: isEven(i) ? offGreen : offRed,
  };
};
