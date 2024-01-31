import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { HtmlHTMLAttributes } from "react";
interface ITeacerAvatar extends HtmlHTMLAttributes<HTMLElement> {
  avatar: string;
}
export function TeacherAvatar({ className, avatar }: ITeacerAvatar) {
  return (
    <Link
      href={"#"}
      className={clsx("w-[90px] h-[90px] rounded-full", className)}
    >
      <Image
        src={avatar}
        alt="teacher"
        className="rounded-full"
        width={90}
        height={90}
      />
    </Link>
  );
}
