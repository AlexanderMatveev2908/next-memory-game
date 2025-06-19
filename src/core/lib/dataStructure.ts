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
