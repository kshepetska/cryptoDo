export const addLeadingZero = (value: number): string =>
  value.toString().padStart(2, '0');

export const useTimeDifference = (targetTimestamp: number) => {
  const timeValue = 60;

  const now = new Date();
  const utc_timestamp = Date.UTC(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
    now.getUTCHours(),
    now.getUTCMinutes(),
    now.getUTCSeconds(),
    now.getUTCMilliseconds()
  );

  const timeDifference: number = targetTimestamp - utc_timestamp;
  let daysLeft: number = Math.floor(
    timeDifference / (1000 * timeValue * timeValue * 24)
  );
  let hoursLeft: number = Math.floor(
    (timeDifference % (1000 * timeValue * timeValue * 24)) /
      (1000 * timeValue * timeValue)
  );
  let minutesLeft: number = Math.floor(
    (timeDifference % (1000 * timeValue * timeValue)) / (1000 * timeValue)
  );
  let secondsLeft: number = Math.floor(
    (timeDifference % (1000 * timeValue)) / 1000
  );

  daysLeft = daysLeft < 0 ? 0 : daysLeft;
  hoursLeft = hoursLeft < 0 ? 0 : hoursLeft;
  minutesLeft = minutesLeft < 0 ? 0 : minutesLeft;
  secondsLeft = secondsLeft < 0 ? 0 : secondsLeft;

  const formattedData = {
    d: daysLeft,
    h: hoursLeft,
    m: addLeadingZero(minutesLeft),
    s: addLeadingZero(secondsLeft),
  };
  return formattedData;
};
