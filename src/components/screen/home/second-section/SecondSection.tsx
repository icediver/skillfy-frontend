"use client";
import PatternGray from "@/assets/image/pattern-gray.png";
import Button from "@/components/ui/button/Button";
import { CourseCard } from "@/components/ui/course-card/CourseCard";
import PrevNextButton from "@/components/ui/prev-next-button/PrevNextButton";
import Image from "next/image";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
export function SecondSection() {
  const [count, setCount] = useState(1);
  function prevNextHandler({ direction }: { direction: "prev" | "next" }) {
    if (direction === "next" && count < 10) setCount((state) => state + 1);
    if (direction === "prev" && count > 0) setCount((state) => state - 1);
  }
  return (
    <article className="relative h-[871px] w-full bg-second-section-background">
      <Image
        src={PatternGray}
        alt="pattern"
        className="absolute bottom-24 left-1/2 z-0 -ml-10"
      />
      <section className="pt-20">
        <div className="flex justify-between mb-10">
          <div className="text-4xl font-medium">Get choice of your course</div>
          <div className="flex gap-6">
            <div className="flex gap-4 items-center text-hero-text text-md">
              <p>Design</p>
              <FaChevronDown size={12} />
            </div>
            <Button>View all</Button>
          </div>
        </div>
        <div className="relative flex gap-7 z-10">
          <CourseCard
            picture="/uploads/images/business.jpg"
            rating={"4.5 (120)"}
            views={"28,500"}
            lessons={3}
            title={"Everything You Need to Know About Business"}
            teacher={"Nicole Brown"}
            price={99.99}
            sale={49.65}
            avatar={"https://i.pravatar.cc/40?img=19"}
          />
          <CourseCard
            picture="/uploads/images/choose.jpg"
            rating={"4.5 (120)"}
            views={"28,500"}
            lessons={3}
            title={"Statistics Data Science and Business Analysis"}
            teacher={"Nicole Brown"}
            price={99.99}
            sale={49.65}
            avatar={"https://i.pravatar.cc/40?img=19"}
          />
          <CourseCard
            picture="/uploads/images/course.jpg"
            rating={"4.5 (120)"}
            views={"28,500"}
            lessons={3}
            title={"AWS Certified Solutions Architect Associate"}
            teacher={"Nicole Brown"}
            price={99.99}
            sale={49.65}
            avatar={"https://i.pravatar.cc/40?img=19"}
          />
        </div>
        <div className="flex justify-between pt-9 items-center">
          <PrevNextButton
            variant={"prev"}
            onClick={() => prevNextHandler({ direction: "prev" })}
          />
          <div className="flex flex-start w-full px-2">
            <div
              className="h-1 bg-primary"
              style={{ width: `${count * 10}%` }}
            />
          </div>
          <PrevNextButton
            variant={"next"}
            onClick={() => prevNextHandler({ direction: "next" })}
          />
        </div>
      </section>
    </article>
  );
}
