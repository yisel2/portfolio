export default function Button({
  children,
  className,
  type = "primary",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  type?: "primary" | "outlined" | "no-styles";
  onClick?: () => void;
}) {
  const classes = {
    primary: "py-2 px-6 rounded-4xl text-xl w-fit text-white bg-deepseek-blue",
    outlined:
      "py-2 px-6 rounded-4xl text-xl w-fit border border-deepseek-blue text-deepseek-blue hover:bg-deepseek-blue hover:text-white transition-colors",
    "no-styles": "",
  };
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer ${classes[type]} ${className}`}
    >
      {children}
    </button>
  );
}
