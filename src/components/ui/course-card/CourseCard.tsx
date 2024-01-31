import Image from "next/image";
import { FaRegStar } from "react-icons/fa6";
import { FiPlayCircle } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";

interface ICourseCard {
  picture: string;
  rating: string;
  views: string;
  lessons: number;
  title: string;
  teacher: string;
  price: number;
  sale: number;
  avatar: string;
}

export function CourseCard({
  picture,
  title,
  sale,
  rating,
  views,
  lessons,
  teacher,
  price,
  avatar,
}: ICourseCard) {
  return (
    <div className="w-[370px] h-[515px] bg-white rounded p-4 ">
      <div className="w-[337px] h-[263px] rounded overflow-hidden  mx-auto">
        <Image src={picture} alt="title" width={337} height={263} />
      </div>
      <div className="my-4 flex justify-between">
        <div className="flex items-center gap-2.5">
          <FaRegStar className="text-yellow-500 text-1.25xl" />
          <span>{rating}</span>
        </div>
        <div className="flex items-center gap-2.5">
          <IoEyeOutline className="text-primary text-1.25xl" />
          <span> {views}</span>
        </div>
        <div className="flex items-center gap-2.5">
          <FiPlayCircle className="text-green-600" />
          {lessons}
          <span>Lesion</span>
        </div>
      </div>
      <div className="text-1.5xl">{title}</div>
      <footer className="flex justify-between items-center mt-6">
        <div className="flex items-center gap-4">
          <Image
            src={avatar}
            alt="teacher"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <span className="text-gray-500">{teacher}</span>
        </div>
        <div className="flex gap-4">
          <span className="line-through">${price}</span>
          <span className="font-bold text-primary">${sale}</span>
        </div>
      </footer>
    </div>
  );
}
