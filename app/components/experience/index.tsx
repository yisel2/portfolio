import Card from "../card";
import Typography from "../typography";
import DynamicUs from "./dynamicus";
import Henry from "./henry";
import Increase from "./increase";
import Mono from "./mono";

export default function Experience() {
  return (
    <Card className="flex-grow">
      <div className="flex flex-col gap-2">
        <Typography variant="h1">Experiencia Profesional</Typography>
        <p>Mis experiencias recientes fueron trabajando en DynamicUs y Henry</p>
        <div className="grid gap-4 mt-4 lg:grid-cols-2 2xl:grid-cols-4">
          <DynamicUs />
          <Henry />
          <Increase />
          <Mono />
        </div>
      </div>
    </Card>
  );
}
