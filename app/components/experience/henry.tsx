import Link from "next/link";
import Button from "../button";
import Card from "../card";
import Divider from "../divider";
import Tag from "../tag";
import Typography from "../typography";

export default function Henry() {
  return (
    <Card>
      <div className="flex flex-col gap-2">
        <Typography variant="h2">Henry</Typography>
        <Typography variant="h3">Frontend Developer</Typography>
        <Divider />
        <Typography variant="h3">
          Fui responsable del desarrollo y mantenimiento de las funcionalidades
          de la aplicación de Henry
        </Typography>
        <div className="flex gap-2 flex-wrap">
          <Tag className="border border-[#E8F5E9] text-[#1B5E20]">React</Tag>
          <Tag className="border border-[#E3F2FD] text-[#0D47A1]">Next</Tag>
          <Tag className="border border-[#FFF9C4] text-[#F57F17]">
            TypeScript
          </Tag>
          <Tag className="border border-[#FFEBEE] text-[#C62828]">
            MDBootstrap
          </Tag>
          <Tag className="border border-[#F3E5F5] text-[#6A1B9A]">
            Ant Design
          </Tag>
          <Tag className="border border-[#FFE0B2] text-[#E65100]">Formik</Tag>
          <Tag className="border border-[#E8F5E9] text-[#1B5E20]">
            React Final Form
          </Tag>
          <Tag className="border border-[#E3F2FD] text-[#0D47A1]">Axios</Tag>
          <Tag className="border border-[#FFF9C4] text-[#F57F17]">SWR</Tag>
        </div>
      </div>
      <Link href="/henry" className="flex mt-4">
        <Button type="outlined" className="w-full">
          Ver más
        </Button>
      </Link>
    </Card>
  );
}
