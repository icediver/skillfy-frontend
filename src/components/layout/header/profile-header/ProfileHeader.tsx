"use client";
import Button from "@/components/ui/button/Button";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

export function ProfileHeader() {
  return (
    <div className="flex items-center text-navbar gap-10">
      <button className="hover:text-blue-800">
        <FiSearch />
      </button>
      <button className="hover:text-blue-800">
        <PiShoppingCartSimpleBold />
      </button>
      <Link href={"/auth/register"}>
        <Button>Register</Button>
      </Link>
    </div>
  );
}
