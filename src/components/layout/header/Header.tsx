import { Logo } from "@/components/ui/logo/Logo";
import { Navbar } from "./navbar/Navbar";
import { ProfileHeader } from "./profile-header/ProfileHeader";

export function Header() {
  return (
    <div className="relative w-[1170px] z-50 mx-auto flex items-center justify-between pt-11">
      <Logo />
      <Navbar />
      <ProfileHeader />
    </div>
  );
}
