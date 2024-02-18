import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "third" | "fourth" | "fifth" | "sixth";
}
export default function CourseButton({
  children,
  className,
  variant = "primary",
  ...props
}: IButton) {
  return (
    <button
      {...props}
      className={clsx(
        "flex items-center gap-2 rounded px-5 py-1 h-12 active:translate-y-1",
        {
          ["bg-[rgba(94,208,188,0.24)] text-[#43C8B1]"]: variant === "primary",
          ["bg-[#FEF9E5] text-[#F68C20]"]: variant === "secondary",
          ["bg-[#FEEFEE] text-[#F56962]"]: variant === "third",
          ["bg-[rgba(108,99,255,0.1)] text-[#6C63FF]"]: variant === "fourth",
          ["border border-[#CAC6D4] !text-hero-text "]: variant === "fifth",
        },
        className,
      )}
    >
      {children}
    </button>
  );
}
