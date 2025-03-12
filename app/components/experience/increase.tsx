// import Button from "../button";
import Card from "../card";
import Divider from "../divider";
import Tag from "../tag";
import Typography from "../typography";

export default function Increase() {
  return (
    <Card>
      <div className="flex flex-col gap-2">
        <Typography variant="h2">Increase</Typography>
        <Typography variant="h3">Frontend Developer - JR</Typography>
        <Divider />
        <Typography variant="h3">
          Fui responsable del desarrollo y mantenimiento de la plataforma
          principal de usuarios de Increase
        </Typography>
        <div className="flex gap-2 flex-wrap">
          <Tag className="border border-[#E8F5E9] text-[#1B5E20]">React</Tag>
          <Tag className="border border-[#E3F2FD] text-[#0D47A1]">GraphQL</Tag>
          <Tag className="border border-[#FFF9C4] text-[#F57F17]">
            TypeScript
          </Tag>
          <Tag className="border border-[#FFEBEE] text-[#C62828]">
            Styled Components
          </Tag>
          <Tag className="border border-[#F3E5F5] text-[#6A1B9A]">Axios</Tag>
          <Tag className="border border-[#FFE0B2] text-[#E65100]">CSS</Tag>
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
