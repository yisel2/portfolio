import { getTranslations } from "next-intl/server";
import Reveal from "./Reveal";

const stack = [
  "React",
  "TypeScript",
  "Next.js",
  "Ant Design",
  "Material UI",
  "Styled Components",
  "React Hook Form",
  "React Query",
  "Axios",
  "Zod",
  "Storybook",
  "Figma",
  "Claude Code",
  "i18n",
];

export default async function About() {
  const t = await getTranslations("About");

  return (
    <section
      id="perfil"
      className="mx-auto max-w-5xl scroll-mt-20 border-b border-line px-6 py-20 sm:px-8"
    >
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-wide text-ink-faint">
            {t("label")}
          </span>
          <h2 className="mt-4 text-balance font-sans text-2xl font-medium leading-tight sm:text-3xl">
            {t("heading")}
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="space-y-5 font-sans text-base leading-relaxed text-ink-muted">
          <p>{t("paragraph1")}</p>
          <p>{t("paragraph2")}</p>

          <div className="flex flex-wrap gap-2 pt-2">
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-line px-3 py-1 font-mono text-xs text-ink-muted"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
