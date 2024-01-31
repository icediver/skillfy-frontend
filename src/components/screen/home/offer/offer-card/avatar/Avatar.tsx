import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { HtmlHTMLAttributes } from "react";
interface IAvatar extends HtmlHTMLAttributes<HTMLElement> {
  avatar: string;
}
export function Avatar({ className, avatar }: IAvatar) {
  return (
    <Link
      href={"#"}
      className={clsx("w-[80px] h-[80px] rounded-full", className)}
    >
      <Image
        src={avatar}
        alt="teacher"
        className="rounded-full"
        width={60}
        height={60}
      />
    </Link>
  );
}
