"use client";
import Link from "next/link";
import Button from "../button";
import Card from "../card";
import Divider from "../divider";
import Tag from "../tag";
import Typography from "../typography";

export default function DynamicUs() {
  return (
    <Card variant="high-contrast">
      <div className="flex flex-col gap-2 h-full">
        <Typography variant="h2">DynamicUs</Typography>
        <Typography variant="h3">Frontend Developer - Freelance</Typography>
        <Divider />
        <Typography variant="h3">
          Fui responsable del desarrollo completo y mantenimiento del frontend
        </Typography>
        <div className="flex gap-2 flex-wrap">
          <Tag className=" bg-green-bg text-green-text">Refine</Tag>
          <Tag className=" bg-blue-bg text-blue-text">React</Tag>
          <Tag className=" bg-yellow-bg text-yellow-text">TypeScript</Tag>
          <Tag className=" bg-red-bg text-red-text">Axios</Tag>
          <Tag className=" bg-purple-bg text-purple-text">Vite</Tag>
          <Tag className=" bg-orange-bg text-orange-text">Ant Design</Tag>
          <Tag className=" bg-green-bg text-green-text">Styled Components</Tag>
        </div>
        <Link href="/dynamicus" className="flex mt-auto pt-4">
          <Button type="primary" className="w-full">
            Ver más
          </Button>
        </Link>
      </div>
    </Card>
  );
}
