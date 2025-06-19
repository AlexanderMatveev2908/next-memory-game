import { formatTime } from "@/core/lib/formatters";
import { v4 } from "uuid";

export const rowsCountersPop = (...vals: number[]) =>
  [
    {
      label: "Time Elapsed",
      val: formatTime(vals[0]),
    },
    {
      label: "Moves Taken",
      val: `${vals[1]} Moves`,
    },
  ].map((el) => ({
    ...el,
    id: v4(),
  }));
