import Link from "next/link";
import Card from "../card";
import Typography from "../typography";

export default function AboutDynamicUs() {
  return (
    <Card>
      <div className="flex flex-col gap-2">
        <Typography variant="h1">Sobre DynamicUs</Typography>
        <p>
          DynamicUs Tech es un grupo de profesionales apasionados por la
          tecnología, especializados en consultoría IT y soluciones de software
          a medida. Nos dedicamos a impulsar la innovación y transformación
          digital de nuestros clientes, ofreciendo servicios de consultoría
          estratégica, desarrollo de software personalizado, implementación de
          soluciones e intervenciones críticas.
          <br />
          <br />
          <Link href="http://dynamicus.tech" target="_blank">
            <span className="text-deepseek-blue">dynamicus.tech</span>
          </Link>
        </p>
      </div>
    </Card>
  );
}
