import { getRequestConfig } from "next-intl/server";
import { readFileSync } from "fs";
import { join } from "path";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !routing.locales.includes(locale as (typeof routing.locales)[number])) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: JSON.parse(
      readFileSync(join(process.cwd(), "messages", `${locale}.json`), "utf-8")
    ),
  };
});
