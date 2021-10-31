import { Dispatch, SetStateAction } from 'react';

export const sortByDate = (arr: any[]) => {
  return arr
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .reverse();
};

export const hideNav = (setIsNavOpen: Dispatch<SetStateAction<boolean>>) => {
  window.addEventListener('resize', (e: any) => {
    if (e.target.innerWidth > 710) {
      setIsNavOpen(false);
    }
  });
};

export const disableScroll = (isNavOpen: boolean) => {
  if (isNavOpen) {
    document.body.classList.add('disable__scroll');
  } else {
    document.body.classList.remove('disable__scroll');
  }
};

export const isEven = (n: number) => n % 2 === 0;

export * from './styles';
export * from './configs';
export * from './contentfulHandlers';
