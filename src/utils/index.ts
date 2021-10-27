export const sortByDate = (arr: any[]) => {
  return arr
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .reverse();
};

export const isEven = (n: number) => n % 2 === 0;

export * from './styles';
export * from './configs';
export * from './contentfulHandlers';
