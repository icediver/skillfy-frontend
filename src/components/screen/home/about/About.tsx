import Button from "@/components/ui/button/Button";
import Image from "next/image";
import { FaRegSquareCheck } from "react-icons/fa6";

export function About() {
  return (
    <section className="grid grid-cols-2 h-[842px]">
      <div className="text-hero-text text-1.5xl">
        <p className="text-4xl text-black font-medium mt-40 mb-2 ">
          Know about learning learning platform
        </p>
        <p className="py-7 ">
          With our growing catalog of over 30 Nanodegree
          <br /> programs from beginner to advanced, you’re
          <br /> sure to find one that fits your career goals
        </p>
        <ul>
          <li className="flex items-center gap-8 font-medium my-2">
            <FaRegSquareCheck className="text-green-600" />
            <p>Free E-book, Video & Consolation</p>
          </li>
          <li className="flex items-center gap-8 font-medium my-2">
            <FaRegSquareCheck className="text-green-600" />
            <p>Top instructors from around world</p>
          </li>
          <li className="flex items-center gap-8 font-medium my-2">
            <FaRegSquareCheck className="text-green-600" />
            <p>Top courses for your team.</p>
          </li>
        </ul>
        <Button className="mt-7">Start learning now</Button>
      </div>
      <div className="relative flex justify-center items-center">
        <div className="absolute top-16 left-20 border-[5px] border-primary w-[500px] h-[630px] rounded-tr-[150px] z-0" />
        <div className="relative z-10 w-[500px] h-[630px] rounded-tr-[150px] overflow-hidden">
          <Image
            src={"/uploads/images/catalog.png"}
            alt="catalog"
            width={500}
            height={650}
            className="absolute -top-10"
          />
        </div>
      </div>
    </section>
  );
}
