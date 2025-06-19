export const isStr = (val: string | undefined | null) =>
  typeof val === "string" && val?.trim()?.length;

export const cpyObj = <T>(obj: T): T => {
  if (obj === null || typeof obj !== "object") return obj;

  if (Array.isArray(obj)) return obj.map(cpyObj) as T;

  const res = {} as T;

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key))
      res[key] = cpyObj(obj[key]);
  }

  return res;
};

export const isObjOK = <T>(obj?: T, cb?: (v: keyof T) => boolean): boolean =>
  typeof obj === "object" &&
  obj !== null &&
  !!Object.keys(obj).length &&
  Object.values(obj).every(
    typeof cb === "function"
      ? cb
      : (el) => el !== undefined && el !== "undefined"
  );

export const isArrOK = <T>(arg?: T[] | null): boolean =>
  Array.isArray(arg) && !!arg.length && arg.every((el) => isObjOK(el));
