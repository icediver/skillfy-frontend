import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "prev" | "next";
  color?: "primary" | "secondary";
}
export default function PrevNextButton({
  className,
  color = "primary",
  variant,
  ...props
}: IButton) {
  return (
    <button
      {...props}
      className={clsx(
        "flex justify-center items-center rounded active:translate-y-1 text-gray-500 w-14 h-14 text-1.5xl hover:text-primary font-bold",
        {
          ["bg-white"]: color === "primary",
          ["bg-second-section-background"]: color === "secondary",
        },

        className,
      )}
    >
      {variant === "next" ? <LuArrowRight /> : <LuArrowLeft />}
    </button>
  );
}
