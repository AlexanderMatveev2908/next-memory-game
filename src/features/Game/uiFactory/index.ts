import { chainCmlCase, formatTime } from "@/core/lib/formatters";
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

export const gamePopBtns = [
  {
    label: "Restart",
  },
  {
    label: "Setup New Game",
  },
].map((el, i) => ({
  ...el,
  id: v4(),
  handler: chainCmlCase(el.label),
  $bg: i ? "var(--green__0)" : "var(--green__app)",
  $clrTxt: i ? "var(--green__3)" : "var(--white__1)",
}));

export const mobileBtns = [
  {
    label: "Restart",
  },
  {
    label: "New Game",
  },
  {
    label: "Resume Game",
  },
].map((el, i) => ({
  ...el,
  id: v4(),
  handler: chainCmlCase(el.label),
  $bg: i ? "var(--green__0)" : "var(--green__app)",
  $clrTxt: i ? "var(--green__3)" : "var(--white__1)",
}));
