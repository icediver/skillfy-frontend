import Image from "next/image";
import login from "../../assets/image/login.png";
import shape from "../../assets/image/shape.png";
import { Logo } from "@/components/ui/logo/Logo";
import Link from "next/link";
import Button from "@/components/ui/button/Button";
import { headers } from "next/headers";
import { AuthProfile } from "@/components/screen/auth/auth-profile/AuthProfile";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="grid grid-cols-2 animate-opacity">
      <div className="relative bg-login-background w-full h-screen">
        <div className="w-full h-full flex justify-end">
          <div className="flex flex-col w-[669px] py-11 justify-between mb-28">
            <Logo />
            <div className="text-5xl font-medium text-white z-10">
              <div>Turn your ambition</div>
              <div>into a success story</div>
              <div className="text-1.5xl text-center mt-5">
                Choose from over 100,000 online video.
              </div>
            </div>
          </div>
        </div>

        <Image
          src={shape}
          alt="shape"
          width={350}
          height={251}
          className="absolute right-6 top-9"
        />
        <Image
          src={login}
          alt="login"
          width={452}
          height={443}
          className="absolute left-80 top-40"
        />
        <Image
          src={shape}
          alt="shape"
          width={350}
          height={251}
          className="absolute left-o bottom-0"
        />
      </div>
      <div>
        <AuthProfile />
        {children}
      </div>
    </section>
  );
}
