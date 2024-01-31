import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { FaPlay } from "react-icons/fa6";

interface IPlayButton extends ButtonHTMLAttributes<HTMLButtonElement> {}
export default function PlayButton({
  children,
  className,
  ...props
}: IPlayButton) {
  return (
    <button
      {...props}
      className={clsx(
        "px-6 py-2.5  text-primary text-4xl w-28 h-28 bg-white flex justify-center items-center rounded-full",
        className,
      )}
    >
      <FaPlay className="ml-2 active:translate-y-1 " />
    </button>
  );
}
