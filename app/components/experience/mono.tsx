// import Button from "../button";
import Card from "../card";
import Divider from "../divider";
import Tag from "../tag";
import Typography from "../typography";

export default function Mono() {
  return (
    <Card variant="high-contrast">
      <div className="flex flex-col gap-2">
        <Typography variant="h2">Mono! Diseño gráfico</Typography>
        <Typography variant="h3">Maquetadora Web - Freelance</Typography>
        <Divider />
        <Typography variant="h3">
          Fui responsable de la maquetación de sitios web
        </Typography>
        <div className="flex gap-2 flex-wrap">
          <Tag className=" bg-green-bg text-green-text">HTML</Tag>
          <Tag className=" bg-blue-bg text-blue-text">CSS</Tag>
          <Tag className=" bg-yellow-bg text-yellow-text">JavaScript</Tag>
        </div>
      </div>
      {/* <div className="flex mt-auto">
        <Button type="outlined" className="w-full">
          Ver más
        </Button>
      </div> */}
    </Card>
  );
}
