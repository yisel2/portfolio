import { getTranslations } from "next-intl/server";
import Reveal from "./Reveal";

const roles = [
  { key: "avenida", company: "Avenida+" },
  { key: "dynamicus", company: "DynamicUs Tech" },
  { key: "henry", company: "Henry" },
  { key: "increase", company: "Increase" },
];

export default async function Experience() {
  const t = await getTranslations("Experience");

  return (
    <section
      id="experiencia"
      className="mx-auto max-w-5xl scroll-mt-20 border-b border-line px-6 py-20 sm:px-8"
    >
      <Reveal>
        <span className="font-mono text-xs uppercase tracking-wide text-ink-faint">
          {t("label")}
        </span>
        <h2 className="mt-4 font-sans text-2xl font-medium leading-tight sm:text-3xl">
          {t("heading")}
        </h2>
      </Reveal>

      <ol className="relative mt-10 space-y-10 border-l border-line pl-8">
        {roles.map((item, i) => (
          <Reveal key={item.key} delay={0.05 * i}>
            <li className="relative">
              <span className="absolute -left-[2.05rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-ink-faint bg-bg" />
              <p className="font-mono text-xs text-ink-faint">
                {t(`roles.${item.key}.period`)}
              </p>
              <h3 className="mt-1.5 font-sans text-lg font-medium">
                {t(`roles.${item.key}.role`)}{" "}
                <span className="text-ink-muted">· {item.company}</span>
              </h3>
              <p className="mt-2 max-w-2xl font-sans text-sm leading-relaxed text-ink-muted">
                {t(`roles.${item.key}.description`)}
              </p>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
