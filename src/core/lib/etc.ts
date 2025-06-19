import { RefObject } from "react";

export const pickRandom = <T>(arg: T[]): T =>
  arg[Math.floor(Math.random() * arg.length)];

export const clearT = (timerID: RefObject<NodeJS.Timeout | null>) => {
  if (timerID.current) {
    clearInterval(timerID.current);
    timerID.current = null;
  }
};
