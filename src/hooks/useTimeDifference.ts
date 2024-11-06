import {useState, useEffect} from 'react';

export const addLeadingZero = (value: number): string =>
  value.toString().padStart(2, '0');

export const useTimeDifference = (timestamp: number) => {
  const timeValue = 60;
  const targetDate: number = timestamp;
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

  const timeDifference: number = targetDate - utc_timestamp;
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

  daysLeft = daysLeft < 0 ? 0 : daysLeft;
  hoursLeft = hoursLeft < 0 ? 0 : hoursLeft;
  minutesLeft = minutesLeft < 0 ? 0 : minutesLeft;

  const [time, setTime] = useState({
    day: addLeadingZero(daysLeft),
    hour: addLeadingZero(hoursLeft),
    minute: addLeadingZero(minutesLeft),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (+time.minute > 0) {
        setTime(prev => ({
          ...prev,
          minute: addLeadingZero(+prev.minute - 1),
        }));
      } else if (+time.hour > 0) {
        setTime(prev => ({
          ...prev,
          hour: addLeadingZero(+prev.hour - 1),
          minute: '59',
        }));
      } else if (+time.day > 0) {
        setTime(prev => ({
          ...prev,
          day: addLeadingZero(+prev.day - 1),
          hour: '24',
        }));
      }
    }, 60000);

    return () => clearInterval(interval);
  }, [time]);

  return time;
};
