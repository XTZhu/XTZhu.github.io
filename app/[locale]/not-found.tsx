"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { FadeInUp } from "@/components/Motion";

export default function NotFound() {
  const t = useTranslations();

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 flex items-center justify-center">
      <div className="text-center">
        <FadeInUp>
          <h1 className="text-9xl font-bold text-gray-200 dark:text-gray-800 mb-4">404</h1>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t("not_found.title")}
          </h2>
        </FadeInUp>
        <FadeInUp delay={0.2}>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md">
            {t("not_found.description")}
          </p>
        </FadeInUp>
        <FadeInUp delay={0.3}>
          <Link href="/" className="btn-primary">
            {t("not_found.back_home")}
          </Link>
        </FadeInUp>
      </div>
    </main>
  );
}
