// import Button from "../button";
import Card from "../card";
import Divider from "../divider";
import Tag from "../tag";
import Typography from "../typography";

export default function Mono() {
  return (
    <Card>
      <div className="flex flex-col gap-2">
        <Typography variant="h2">Mono! Diseño gráfico</Typography>
        <Typography variant="h3">Maquetadora Web - JR - Freelance</Typography>
        <Divider />
        <Typography variant="h3">
          Fui responsable de la maquetación de sitios web
        </Typography>
        <div className="flex gap-2 flex-wrap">
          <Tag className="border border-[#E8F5E9] text-[#1B5E20]">HTML</Tag>
          <Tag className="border border-[#E3F2FD] text-[#0D47A1]">CSS</Tag>
          <Tag className="border border-[#FFF9C4] text-[#F57F17]">
            JavaScript
          </Tag>
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
