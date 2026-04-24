interface ButtonProps {
  variant: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  variant,
  children,
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold font-rethink-sans transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer";

  const variants: Record<"primary" | "secondary", string> = {
    primary:
      "bg-white text-black hover:bg-neutral-100 focus-visible:ring-white",
    secondary:
      "bg-transparent border-2 border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-black focus-visible:ring-brand-yellow",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
