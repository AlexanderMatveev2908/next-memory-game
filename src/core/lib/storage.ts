import { StorageKey } from "@/shared/types/storage";

export const saveStorage = <T>(key: StorageKey, val: string | T): void =>
  sessionStorage.setItem(
    key,
    typeof val === "string" ? val : JSON.stringify(val)
  );

export const getStorage = <T>(key: StorageKey): T | null => {
  const data = sessionStorage.getItem(key);

  if (typeof data === "object") return null;

  try {
    return JSON.parse(data);
  } catch {
    return data as T;
  }
};

export const delStorage = (key: StorageKey): void =>
  sessionStorage.removeItem(key);
