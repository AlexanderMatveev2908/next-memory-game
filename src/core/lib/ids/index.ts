import { v4 } from "uuid";

type ParamsIDs<T> = T & {
  vals?: ParamsIDs<T>[];
};

export const addNestedIDs = <T>(arg: ParamsIDs<T>[]): ParamsIDs<T>[] =>
  arg.map((el) => ({
    ...el,
    id: v4(),
    ...(Array.isArray(el?.vals) ? { vals: addNestedIDs(el.vals) } : {}),
  }));

//
