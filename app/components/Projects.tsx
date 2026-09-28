"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import Reveal from "./Reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

const projects = [
  {
    key: "sellers",
    company: "Avenida+",
    size: "lg",
    stack: ["React", "Ant Design", "React Hook Form"],
  },
  {
    key: "componentLibrary",
    company: "Henry",
    size: "sm",
    stack: ["Storybook", "CSS Modules"],
  },
  {
    key: "colegioAbogados",
    company: "DynamicUs Tech",
    size: "sm",
    stack: ["Refine", "Ant Design", "Styled Components"],
  },
  {
    key: "platform",
    company: "Increase",
    size: "md",
    stack: ["React", "GraphQL", "Styled Components"],
  },
];

export default function Projects() {
  const t = useTranslations("Projects");

  return (
    <section
      id="proyectos"
      className="mx-auto max-w-5xl scroll-mt-20 border-b border-line px-6 py-20 sm:px-8"
    >
      <Reveal>
        <span className="font-mono text-xs uppercase tracking-wide text-ink-faint">
          {t("label")}
        </span>
        <h2 className="mt-4 max-w-xl text-balance font-sans text-2xl font-medium leading-tight sm:text-3xl">
          {t("heading")}
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal
            key={project.key}
            delay={0.05 * i}
            className={project.size === "lg" ? "sm:col-span-2" : ""}
          >
            <motion.article
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25, ease: EASE }}
              className="group flex h-full flex-col justify-between rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-line-strong"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-sans text-lg font-medium">
                      {t(`items.${project.key}.title`)}
                    </h3>
                    <p className="mt-0.5 font-mono text-xs text-ink-faint">
                      {project.company}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-line px-2.5 py-1 font-mono text-xs text-ink-muted">
                    {t(`items.${project.key}.tag`)}
                  </span>
                </div>
                <p className="mt-4 max-w-xl font-sans text-sm leading-relaxed text-ink-muted">
                  {t(`items.${project.key}.description`)}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-line px-2.5 py-1 font-mono text-xs text-ink-faint"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
