import { defineRouting } from "next-intl/routing";

export type Locale = "en" | "zh";
export const defaultLocale: Locale = "zh";

export const routing = defineRouting({
  locales: ["en", "zh"],
  defaultLocale: "zh",
  localePrefix: "as-needed",
  localeDetection: true,
});
