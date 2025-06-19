import { chainCmlCase } from "@/core/lib/formatters";
import { v4 } from "uuid";

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
