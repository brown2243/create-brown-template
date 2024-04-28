import { MAX_DECIMAL } from "src/utils/constant";

export const capitalize = (str: string) => str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();

export const addComma = (num: string | number) => {
  if (typeof num === "number" && num < 1) {
    return num;
  }
  if (Number.isNaN(Number(num))) {
    console.error("invalid input");
    return;
  }
  const arr = String(num).split(".");
  arr[0] = arr[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return arr.join(".");
};

export function cutOffDecimal(value: number, len: number): string {
  if (len === 0) {
    len -= 1;
  }
  const result = value.toFixed(MAX_DECIMAL).slice(0, (MAX_DECIMAL - len) * -1);
  return result;
}

export const cutAndAddComma = (num: number, len = 4) => addComma(cutOffDecimal(num, len));

export const getFromLocalStorage = <T>(key: string): T | null => {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error(`Error getting item from local storage with key "${key}":`, error);
    return null;
  }
};

export const setToLocalStorage = (key: string, value: unknown) => {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  } catch (error) {
    console.error(`Error setting item to local storage with key "${key}":`, error);
  }
};

export const deleteFromLocalStorage = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error deleting item from local storage with key "${key}":`, error);
  }
};
