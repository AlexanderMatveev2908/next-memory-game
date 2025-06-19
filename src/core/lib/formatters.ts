/* eslint-disable @typescript-eslint/no-explicit-any */
import { isStr } from "./dataStructure";
import { __cg } from "./log";

export const formatDate = (date: Date | string | number) => {
  const param =
    date instanceof Date
      ? date
      : /^\d{10,}n?$/.test(date + "")
      ? +date
      : new Date(date);

  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",

    hour12: true,
  }).format(param);
};

export const chainCmlCase = (str?: string): string => {
  try {
    return !isStr(str)
      ? ""
      : (str as string)
          .split(" ")
          .filter((el: string) => !!el)
          .map((word: string, i: number) =>
            !i
              ? word.toLowerCase()
              : word?.at(0)?.toUpperCase() + word?.slice(1)?.toLowerCase()
          )
          .join("");
  } catch (err: any) {
    __cg("chainCmlCase", err);

    return "";
  }
};

const pickPadStyle = (i: number, len: number) => {
  switch (len) {
    case 2:
      return !i ? 1 : 2;

    case 3:
      return !i ? 1 : 2;
    default:
      throw new Error("invalid length ☢️");
  }
};

export const formatTime = (sec: number): string => {
  const hrs = Math.floor(sec / 3600);
  const mins = Math.floor((sec % 3600) / 60);
  const secs = Math.floor(sec % 60);

  return [hrs, mins, secs]
    .filter((val, i) => (i ? true : !!val))
    .map((val, i, arg) => (val + "").padStart(pickPadStyle(i, arg.length), "0"))
    .join(":");
};
