"use client";

import { motion, type Variants } from "motion/react";
import { useTranslations } from "next-intl";

const EASE = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      <div className="bg-grid pointer-events-none absolute inset-0 h-[420px]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-3xl px-6 pb-24 pt-24 text-center sm:px-8 sm:pt-32"
      >
        <motion.span
          variants={item}
          className="inline-flex items-center gap-2 rounded-full border border-line-strong px-3 py-1 font-mono text-xs text-ink-muted"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {t("badge")}
        </motion.span>

        <motion.h1
          variants={item}
          className="mt-8 text-balance font-sans text-4xl font-medium leading-[1.1] tracking-tight sm:text-6xl"
        >
          {t("title")}
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-xl text-balance font-sans text-lg leading-relaxed text-ink-muted"
        >
          {t("subtitle")}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#proyectos"
            className="rounded-full bg-ink px-6 py-2.5 font-sans text-sm font-medium text-bg transition-opacity hover:opacity-85"
          >
            {t("ctaPrimary")}
          </a>
          <a
            href="#contacto"
            className="rounded-full border border-line-strong px-6 py-2.5 font-sans text-sm font-medium text-ink transition-colors hover:border-ink"
          >
            {t("ctaSecondary")}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
