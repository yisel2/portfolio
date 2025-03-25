import Link from "next/link";
import Button from "../button";
import Card from "../card";
import Divider from "../divider";
import Tag from "../tag";
import Typography from "../typography";

export default function Henry() {
  return (
    <Card variant="high-contrast">
      <div className="flex flex-col gap-2 h-full">
        <Typography variant="h2">Henry</Typography>
        <Typography variant="h3">Frontend Developer</Typography>
        <Divider />
        <Typography variant="h3">
          Fui responsable del desarrollo y mantenimiento de las funcionalidades
          de la aplicación de Henry
        </Typography>
        <div className="flex gap-2 flex-wrap">
          <Tag className=" bg-green-bg text-green-text">React</Tag>
          <Tag className=" bg-blue-bg text-blue-text">Next</Tag>
          <Tag className=" bg-yellow-bg text-yellow-text">TypeScript</Tag>
          <Tag className=" bg-red-bg text-red-text">MDBootstrap</Tag>
          <Tag className=" bg-purple-bg text-purple-text">Ant Design</Tag>
          <Tag className=" bg-orange-bg text-orange-text">Formik</Tag>
          <Tag className=" bg-green-bg text-green-text">React Final Form</Tag>
          <Tag className="bg-blue-bg text-blue-text">Axios</Tag>
          <Tag className="bg-yellow-bg text-yellow-text">SWR</Tag>
        </div>
        <Link href="/henry" className="flex mt-auto pt-4">
          <Button type="primary" className="w-full">
            Ver más
          </Button>
        </Link>
      </div>
    </Card>
  );
}
