import Button from "@/components/ui/button/Button";
import { TeacherAvatar } from "./teacher-avatar/TeacherAvatar";
import Pattern from "@/assets/image/Pattern.png";
import Image from "next/image";

export function OnlineLessons() {
  return (
    <div className="relative bg-lessons h-[600px]">
      <TeacherAvatar
        className="absolute left-[375px] top-[80px]"
        avatar="https://i.pravatar.cc/90?img=15"
      />
      <TeacherAvatar
        className="absolute left-[138px] top-[255px]"
        avatar="https://i.pravatar.cc/90?img=23"
      />
      <TeacherAvatar
        className="absolute left-[440px] bottom-[80px]"
        avatar="https://i.pravatar.cc/90?img=29"
      />
      <TeacherAvatar
        className="absolute right-[375px] top-[55px]"
        avatar="https://i.pravatar.cc/90?img=17"
      />
      <TeacherAvatar
        className="absolute right-[115px] top-[255px]"
        avatar="https://i.pravatar.cc/90?img=25"
      />
      <TeacherAvatar
        className="absolute right-[375px] bottom-[80px]"
        avatar="https://i.pravatar.cc/90?img=23"
      />
      <Image
        src={Pattern}
        alt="pattern"
        className="absolute left-2 bottom-2 opacity-25"
      />
      <Image
        src={Pattern}
        alt="pattern"
        className="absolute right-2 top-2 opacity-25"
      />

      <div className="border-[16px] border-primary absolute h-[82px] w-[82px] rounded-full left-[320px] top-[263px]" />
      <div className="border-[16px] border-primary absolute h-[82px] w-[82px] rounded-full right-[149px] top-[109px]" />

      <section>
        <div className="text-center">
          <p className="text-4xl font-medium pt-44">
            Online Coaching Lessons For Remote Learning.
          </p>
          <p className="text-1.5xl my-9 text-hero-text">
            Online Coaching Lessons For Remote Learning.
          </p>
          <Button>Join Today</Button>
        </div>
      </section>
    </div>
  );
}
