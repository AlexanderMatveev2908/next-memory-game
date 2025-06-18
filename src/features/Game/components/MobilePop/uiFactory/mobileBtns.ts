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
  $bg: i ? "var(--green_0)" : "var(--green_app)",
  $clrTxt: i ? "var(--green_3)" : "var(--white_1)",
}));
