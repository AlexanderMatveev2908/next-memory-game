export const validateValArg = <T>(arg: T[], val: T): boolean =>
  arg.some((el) => el === val);
