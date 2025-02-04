import React, { useEffect, useState } from "react";
import {
  parseISO,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from "date-fns";
import FitText from "./FitText";

const Countdown: React.FC<{ endDate: string }> = ({ endDate }) => {
  const [timeLeft, setTimeLeft] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const end = parseISO(endDate);

      if (end < now) {
        setTimeLeft("Event has ended.");
        clearInterval(interval);
        return;
      }

      const days = differenceInDays(end, now);
      const hours = differenceInHours(end, now) % 24;
      const minutes = differenceInMinutes(end, now) % 60;
      const seconds = differenceInSeconds(end, now) % 60;

      setTimeLeft(`${days} days, ${hours} h, ${minutes} m, ${seconds} s`);
    }, 1000);

    return () => clearInterval(interval);
  }, [endDate]);

  return <FitText text={timeLeft} />;
};

export default Countdown;
