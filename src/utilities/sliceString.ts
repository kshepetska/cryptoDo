export const sliceString = (word: string, maxStringLength: number) => {
  if (word.length > maxStringLength) {
    return word.slice(0, maxStringLength) + '...';
  }
  return word;
};
