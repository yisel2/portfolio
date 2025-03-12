export default function Typography({
  variant = "p",
  children,
  className,
}: {
  variant: string;
  children: React.ReactNode;
  className?: string;
}) {
  if (variant === "h1") {
    return <h1 className={`lg:text-2xl font-bold ${className}`}>{children}</h1>;
  }
  if (variant === "h2") {
    return <h1 className="lg:text-xl font-bold ">{children}</h1>;
  }
  if (variant === "h3") {
    return <h1 className="lg:text-sm ">{children}</h1>;
  }
  return <p>{children}</p>;
}
