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

export const GameNumberType4x4 = Array.from(
  { length: 8 },
  (_, i) => i + 1 + ""
);

export const GameNumberType6x6 = Array.from(
  { length: 12 },
  (_, i) => i + 1 + ""
);
