import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";
import { Fragment } from "react/jsx-runtime";
import { getTranslations } from "next-intl/server";

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

export default async function Projects() {
  const t = await getTranslations("Projects");

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
          <Fragment key={`project-${i}-${project.key}`}>
            <ProjectCard project={project} index={i} />
          </Fragment>
        ))}
      </div>
    </section>
  );
}
