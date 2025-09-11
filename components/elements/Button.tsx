import Link from "next/link";
import { MouseEventHandler, ReactNode } from "react";

interface GradiantButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  className?: string;
  href?: string; 
}

export default function GradiantButton({
  onClick,
  children,
  className = "",
  href,
}: GradiantButtonProps) {
  const baseClass = `flex gap-2 justify-center items-center cursor-pointer px-[1.2rem] py-[0.75rem] lg:px-[2.5rem] lg:py-[1rem] rounded-[1.6875rem] text-[clamp(0.875rem,2vw,1rem)] font-bold transition-all duration-300 ease-in-out min-w-[3rem] min-h-[3rem] ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClass}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseClass}>
      {children}
    </button>
  );
}
