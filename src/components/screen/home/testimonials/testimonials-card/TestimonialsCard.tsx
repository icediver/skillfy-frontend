import { FaRegStar } from "react-icons/fa6";
import { Avatar } from "./avatar/Avatar";

interface ITestimonialsCard {
  course: string;
  role: string;
  testimonials: string;
  rating: number;
  avatar: string;
}

export function TestimonialsCard({
  course,
  role,
  testimonials,
  rating,
  avatar,
}: ITestimonialsCard) {
  return (
    <div className="h-[237px] w-[570px] bg-white m-4 rounded-tr-3xl pt-8 pl-8">
      <div className="flex justify-between items-center">
        <div className="flex gap-5">
          <Avatar avatar={avatar} className="" />
          <div>
            <p className="text-hero-text text-1.5xl font-medium ">{course}</p>
            <p className="text-gray-500">{role}</p>
          </div>
        </div>
        <div className="flex gap-1 text-1.5xl pr-4 text-primary">
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
        </div>
      </div>
      <p className="text-hero-text pt-8">{testimonials}</p>
    </div>
  );
}
