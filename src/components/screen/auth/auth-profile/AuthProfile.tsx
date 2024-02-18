"use client";
import Button from "@/components/ui/button/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function AuthProfile() {
  const pathname = usePathname();
  const isLogin = pathname === "/auth/login";

  return (
    <div className="w-[778px] flex justify-end pt-10 items-center text-navbar gap-10">
      <span>
        {isLogin ? "Dont't have an account?" : "Already have an account?"}
      </span>
      <Link href={isLogin ? "/auth/register" : "/auth/login"}>
        <Button>{isLogin ? "Register" : "Login"}</Button>
      </Link>
    </div>
  );
}
