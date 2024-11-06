export const createArray = (length: number) => {
  const arr: number[] = [];

  for (let i = 0; i < length; i++) {
    arr[i] = i;
  }
  return arr;
};
