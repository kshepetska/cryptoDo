export const shortenAddress = (
  address: string,
  startChars = 5,
  endChars = 3
): string => {
  return `${address.substring(0, startChars)}...${address.substring(
    42 - endChars
  )}`;
};
