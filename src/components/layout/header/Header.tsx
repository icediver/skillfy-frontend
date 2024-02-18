import { Logo } from "@/components/ui/logo/Logo";
import { Navbar } from "./navbar/Navbar";
import { ProfileHeader } from "./profile-header/ProfileHeader";
import clsx from "clsx";

interface IHeader {
  variant?: "primary" | "secondary";
}

export function Header({ variant = "primary" }: IHeader) {
  return (
    <div
      className={clsx("relative w-full z-50   py-9", {
        ["bg-main-background"]: variant === "primary",
        ["bg-white"]: variant === "secondary",
      })}
    >
      <section className="w-[1170px] mx-auto flex items-center justify-between">
        <Logo />
        <Navbar />
        <ProfileHeader />
      </section>
    </div>
  );
}
