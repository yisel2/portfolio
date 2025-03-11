import Card from "./card";
import Typography from "./typography";

export default function Whoami() {
  return (
    <Card className="flex-grow">
      <div className="flex flex-col gap-2">
        <Typography variant="h1">Hola, soy Gisella Alaniz</Typography>
        <p>
          Soy una{" "}
          <strong>
            Desarrolladora Frontend con 4 años de experiencia en React , CSS y
            Javascript
          </strong>{" "}
        </p>
      </div>
    </Card>
  );
}
