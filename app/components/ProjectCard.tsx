"use client";

import { useTranslations } from "next-intl";
import Reveal from "./Reveal";
import { motion } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

interface IProjectCardProps {
  project: {
    key: string;
    company: string;
    size: string;
    stack: string[];
  };
  index: number;
}

export default function ProjectCard({ project, index }: IProjectCardProps) {
  const t = useTranslations("Projects");

  return (
    <Reveal
      key={project.key}
      delay={0.05 * index}
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
  );
}
