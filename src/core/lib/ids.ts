import { v4 } from "uuid";

type ParamsIDs<T> = T & {
  fields?: ParamsIDs<T>[];
};

export const addNestedIDs = <T>(arg: ParamsIDs<T>[]): ParamsIDs<T>[] =>
  arg.map((el) => ({
    ...el,
    id: v4(),
    ...(Array.isArray(el?.fields) ? { fields: addNestedIDs(el.fields) } : {}),
  }));
