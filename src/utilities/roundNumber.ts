export const roundNumber = (number: number, roundingPrecision = 3) => {
  const roundingMultiplier = 10 ** roundingPrecision;
  return Number(
    (Math.floor(number * roundingMultiplier) / roundingMultiplier).toFixed(
      roundingPrecision
    )
  );
};
