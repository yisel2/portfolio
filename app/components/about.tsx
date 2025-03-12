import Card from "./card";
import Typography from "./typography";

export default function About() {
  return (
    <Card>
      <div className="flex flex-col gap-2">
        <Typography variant="h1">Sobre mí</Typography>
        <p>
          Me apasiona la tecnología y el desarrollo web. Me especializo en crear
          experiencias digitales dinámicas y optimizadas, con un enfoque en
          código limpio y escalable. <br /> Soy una persona organizada,
          autodidacta y orientada a la resolución de problemas. Disfruto
          trabajar en proyectos ambiciosos con equipos positivos, explorando
          tanto el frontend como el backend para ofrecer soluciones completas e
          innovadoras. <br />
          <br /> Siempre en búsqueda de nuevos desafíos y oportunidades de
          aprendizaje dentro del mundo del desarrollo.
        </p>
      </div>
    </Card>
  );
}
