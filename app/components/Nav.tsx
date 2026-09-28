"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

const sectionKeys = ["perfil", "proyectos", "experiencia", "contacto"] as const;

export default function Nav() {
  const t = useTranslations("Nav");
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-8">
        <a
          href="#top"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-line-strong font-mono text-xs font-medium text-ink"
        >
          GA
        </a>
        <ul className="hidden items-center gap-8 font-sans text-sm text-ink-muted sm:flex">
          {sectionKeys.map((key) => (
            <li key={key}>
              <a href={`#${key}`} className="transition-colors hover:text-ink">
                {t(key)}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 font-mono text-xs">
            <Link
              href={pathname}
              locale="es"
              className={locale === "es" ? "text-ink" : "text-ink-faint transition-colors hover:text-ink"}
            >
              ES
            </Link>
            <span className="text-ink-faint">/</span>
            <Link
              href={pathname}
              locale="en"
              className={locale === "en" ? "text-ink" : "text-ink-faint transition-colors hover:text-ink"}
            >
              EN
            </Link>
          </div>
          <a
            href="#contacto"
            className="rounded-full border border-line-strong px-4 py-1.5 font-sans text-sm text-ink transition-colors hover:border-ink hover:bg-ink hover:text-bg"
          >
            {t("cta")}
          </a>
        </div>
      </nav>
    </header>
  );
}
