"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useTransition } from "react";
import { defaultLocale } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLocale = () => {
    const next = locale === "en" ? "zh" : "en";
    const path = pathname.replace(`/${locale}`, `/${next}`).replace(/^\/\//, "/");
    startTransition(() => {
      router.push(path);
    });
  };

  return (
    <button
      onClick={switchLocale}
      disabled={isPending}
      className="px-2 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-800 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label={`Switch to ${locale === "en" ? "中文" : "English"}`}
    >
      {locale === defaultLocale ? "EN" : "中文"}
    </button>
  );
}
