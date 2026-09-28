"use client";

import { useLocale, useTranslations } from "next-intl";
import Reveal from "./Reveal";

export default function Contact() {
  const t = useTranslations("Contact");
  const locale = useLocale();
  const cvHref =
    locale === "en" ? "/cv/Gisella_Alaniz-CV-EN.pdf" : "/cv/Gisella_Alaniz-CV-ES.pdf";

  const links = [
    { label: t("email"), value: "gisella.alaniz.94@gmail.com", href: "mailto:gisella.alaniz.94@gmail.com" },
    { label: t("linkedin"), value: "/in/gisella-alaniz", href: "https://www.linkedin.com/in/gisella-alaniz/" },
  ];

  return (
    <section id="contacto" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-24 sm:px-8">
      <Reveal className="text-center">
        <span className="font-mono text-xs uppercase tracking-wide text-ink-faint">
          {t("label")}
        </span>
        <p className="mt-4 font-sans text-base text-ink-muted">
          {t("location")}
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          {links.map((link) => {
            const isExternal = !link.href.startsWith("mailto:");
            return (
              <a
                key={link.label}
                href={link.href}
                {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="rounded-full border border-line px-5 py-2.5 font-sans text-sm text-ink transition-colors hover:border-line-strong"
              >
                <span className="text-ink-faint">{link.label}</span>{" "}
                <span className="font-mono text-ink-muted">{link.value}</span>
              </a>
            );
          })}
          <a
            href={cvHref}
            download
            className="rounded-full bg-ink px-5 py-2.5 font-sans text-sm font-medium text-bg transition-opacity hover:opacity-85"
          >
            {t("downloadCv")}
          </a>
        </div>
      </Reveal>

      <p className="mt-20 text-center font-mono text-xs text-ink-faint">
        {t("footer")}
      </p>
    </section>
  );
}
