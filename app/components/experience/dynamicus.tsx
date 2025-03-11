"use client";
import Link from "next/link";
import Button from "../button";
import Card from "../card";
import Divider from "../divider";
import Tag from "../tag";
import Typography from "../typography";

export default function DynamicUs() {
  return (
    <Card>
      <div className="flex flex-col gap-2  h-full">
        <Typography variant="h2">DynamicUs</Typography>
        <Typography variant="h3">
          Frontend Developer - SSR - Freelance
        </Typography>
        <Divider />
        <Typography variant="h3">
          Fui responsable del desarrollo completo y mantenimiento del frontend
        </Typography>
        <div className="flex gap-2 flex-wrap">
          <Tag className="border border-[#E8F5E9] text-[#1B5E20]">Refine</Tag>
          <Tag className="border border-[#E3F2FD] text-[#0D47A1]">React</Tag>
          <Tag className="border border-[#FFF9C4] text-[#F57F17]">
            TypeScript
          </Tag>
          <Tag className="border border-[#FFEBEE] text-[#C62828]">Axios</Tag>
          <Tag className="border border-[#F3E5F5] text-[#6A1B9A]">Vite</Tag>
          <Tag className="border border-[#FFE0B2] text-[#E65100]">
            Ant Design
          </Tag>
          <Tag className="border border-[#E8F5E9] text-[#1B5E20]">
            Styled Components
          </Tag>
        </div>
        <Link href="/dynamicus" className="flex mt-auto">
          <Button type="outlined" className="w-full">
            Ver más
          </Button>
        </Link>
      </div>
    </Card>
  );
}
