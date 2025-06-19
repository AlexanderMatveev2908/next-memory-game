import { pickRandom } from "@/core/lib/etc";
import {
  Anchor,
  Bug,
  Car,
  Football,
  HandSpock,
  LiraSign,
  Moon,
  Snowflake,
  Sun,
} from "@/shared/SVGs";

export enum GameIconsType {
  ANCHOR = "ANCHOR",
  BUG = "BUG",
  CAR = "CAR",
  FLASK = "FLASK",
  FOOTBALL = "FOOTBALL",
  HAND_SPOCK = "HAND_SPOCK",
  LIRA_SIGN = "LIRA_SIGN",
  MOON = "MOON",
  SNOWFLAKE = "SNOWFLAKE",
  SUN = "SUN",
}

export const objSVGs = {
  [GameIconsType.ANCHOR]: Anchor,
  [GameIconsType.BUG]: Bug,
  [GameIconsType.CAR]: Car,
  [GameIconsType.FOOTBALL]: Football,
  [GameIconsType.HAND_SPOCK]: HandSpock,
  [GameIconsType.LIRA_SIGN]: LiraSign,
  [GameIconsType.MOON]: Moon,
  [GameIconsType.SNOWFLAKE]: Snowflake,
  [GameIconsType.SUN]: Sun,
};

export const GameIconsType4x4 = Object.values(GameIconsType).slice(0, 8);

const arrIcons6x6 = Object.values(GameIconsType);
export const GameIconsType6x6 = arrIcons6x6
  .slice(0)
  .concat(Array.from({ length: 8 }, () => pickRandom(arrIcons6x6)));

export const GameNumberType4x4 = Array.from(
  { length: 8 },
  (_, i) => i + 1 + ""
);

export const GameNumberType6x6 = Array.from(
  { length: 18 },
  (_, i) => i + 1 + ""
);

type GameCellStatusType = "hidden" | "visible" | "matched";

export type CellGameValType =
  // | keyof typeof GameIconsType
  | keyof (typeof GameIconsType4x4)[number]
  | keyof (typeof GameIconsType6x6)[number]
  | keyof (typeof GameNumberType4x4)[number]
  | keyof (typeof GameNumberType6x6)[number];

export type GameCellType = {
  id: string;
  val: CellGameValType;
  type: GameCellStatusType;
};
