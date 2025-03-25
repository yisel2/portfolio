// import Button from "../button";
import Card from "../card";
import Divider from "../divider";
import Tag from "../tag";
import Typography from "../typography";

export default function Increase() {
  return (
    <Card variant="high-contrast">
      <div className="flex flex-col gap-2">
        <Typography variant="h2">Increase</Typography>
        <Typography variant="h3">Frontend Developer</Typography>
        <Divider />
        <Typography variant="h3">
          Fui responsable del desarrollo y mantenimiento de la plataforma
          principal de usuarios de Increase
        </Typography>
        <div className="flex gap-2 flex-wrap">
          <Tag className=" bg-green-bg text-green-text">React</Tag>
          <Tag className=" bg-blue-bg text-blue-text">GraphQL</Tag>
          <Tag className=" bg-yellow-bg text-yellow-text">TypeScript</Tag>
          <Tag className=" bg-red-bg text-red-text">Styled Components</Tag>
          <Tag className=" bg-purple-bg text-purple-text">Axios</Tag>
          <Tag className=" bg-orange-bg text-orange-text">CSS</Tag>
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
