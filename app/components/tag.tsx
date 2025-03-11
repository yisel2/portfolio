import Typography from "./typography";

export default function Tag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`p-1 rounded-lg  w-fit ${className}`}>
      <Typography variant="h3">{children}</Typography>
    </div>
  );
}
