export default function Card({
  children,
  className,
  variant = "default",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "high-contrast";
}) {
  const classes = {
    default:
      "h-full flex flex-col bg-deepseek-light-gray p-6 rounded-lg shadow-md border border-deepseek-light-gray",
    "high-contrast":
      "h-full flex flex-col bg-deepseek-lighter-gray p-6 rounded-lg shadow-md border border-deepseek-lighter-gray",
  };

  return <div className={`${classes[variant]} ${className}`}>{children}</div>;
}
