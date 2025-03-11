export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col bg-white p-6 rounded-lg shadow-md border border-deepseek-light-gray ${className}`}
    >
      {children}
    </div>
  );
}
