import { en } from "./en";
import { it } from "./it";

export type Locale = "en" | "it";
export type Dictionary = typeof en;

export const dictionaries: Record<Locale, Dictionary> = { en, it };
