import { CSSProperties } from 'react';
import { isEven } from '.';

const colors = {
  red: 'var(--red)',
  green: 'var(--green)',
  offGreen: 'var(--off-green)',
  offRed: 'var(--off-red)',
};

export const featuresCardStyle = (i: number): CSSProperties => {
  const { red, green, offGreen, offRed } = colors;

  const greenCard = {
    color: green,
    backgroundColor: offGreen,
  };

  const redCard = {
    color: red,
    backgroundColor: offRed,
    marginLeft: '10px',
    boxShadow: '0px 15px 50px 5px rgba(0, 0, 0, 0.03)',
  };

  return isEven(i) ? greenCard : redCard;
};

export const advatangesCardStyle = (i: number): CSSProperties => ({
  marginTop: '30px',
});
