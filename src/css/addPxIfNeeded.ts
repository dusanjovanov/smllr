import { UNITLESS_CSS_PROP_MAP } from "../constants";

export const addPxIfNeeded = (key: string, value: string | number) => {
  if (shouldAddPx(key, value)) {
    return `${value}px`;
  }
  return String(value);
};

export const shouldAddPx = (key: string, value: any): value is number => {
  return typeof value === "number" && !UNITLESS_CSS_PROP_MAP[key];
};
