import Card from "./card";

export default function Logo() {
  return (
    <Card className="flex items-center h-full justify-center">
      <h1 className="text-4xl font-bold bg-clip-text text-transparent animate-rainbow-gradient">
        GA
      </h1>
    </Card>
  );
}
