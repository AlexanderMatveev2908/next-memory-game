export const isStr = (val: string | undefined | null) =>
  typeof val === "string" && val?.trim()?.length;
