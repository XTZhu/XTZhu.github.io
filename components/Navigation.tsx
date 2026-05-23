"use client";

import Link from "next/link";
import { useState } from "react";
import { useTranslations } from "next-intl";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";

const navKeys = [
  { key: "projects", href: "#projects" },
  { key: "about",    href: "#about" },
  { key: "contact",  href: "#contact" },
];

export default function Navigation() {
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="container-custom flex items-center justify-between py-4">
        <Link href="/" className="text-2xl font-bold text-gradient">
          XTZhu
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navKeys.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
            >
              {t(`nav.${key}`)}
            </a>
          ))}
          <div className="flex items-center gap-2 pl-2 border-l border-gray-200 dark:border-gray-700">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            aria-label={t("toggle_menu")}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800">
          <div className="container-custom py-4 flex flex-col gap-4">
            {navKeys.map(({ key, href }) => (
              <a
                key={key}
                href={href}
                onClick={() => setIsOpen(false)}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
              >
                {t(`nav.${key}`)}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

