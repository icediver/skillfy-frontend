import { IconType } from "react-icons";
import { AiOutlineSound } from "react-icons/ai";
import { FaChromecast, FaDisplay, FaRegHeart } from "react-icons/fa6";
import { FiMonitor } from "react-icons/fi";
import { LuRadio } from "react-icons/lu";
import {
  MdOutlineBusinessCenter,
  MdOutlineDesignServices,
  MdOutlinePhotoSizeSelectActual,
} from "react-icons/md";

export interface ICategory {
  icon: string;
  title: string;
  description: string;
  color: string[];
}
export const categoriesCourses: ICategory[] = [
  {
    icon: "MdOutlineDesignServices",
    title: "Design",
    description:
      "Learn Adobe Illustrator CC graphic design, logo design, and more with this in-depth, practical, easy-",
    color: ["#EFEFF6", "#E2DDFF", "#5444A5"],
  },
  {
    icon: "FaDisplay",
    title: "Development",
    description:
      "Learn Adobe Illustrator CC graphic design, logo design, and more with this in-depth, practical, easy-",
    color: ["#F68C20", "#FFF", "#F68C20"],
  },
  {
    icon: "LuRadio",
    title: "It & Software",
    description:
      "Learn Adobe Illustrator CC graphic design, logo design, and more with this in-depth, practical, easy-",
    color: ["rgba(187,240,255,0.5)", "#BBF0FF", "#18AFED"],
  },
  {
    icon: "MdOutlineBusinessCenter",
    title: "Business",
    description:
      "Learn Adobe Illustrator CC graphic design, logo design, and more with this in-depth, practical, easy-",
    color: ["rgba(206,246,214,0.5)", "#CEF6D6", "#5FD46D"],
  },
  {
    icon: "AiOutlineSound",
    title: "Marketing",
    description:
      "Learn Adobe Illustrator CC graphic design, logo design, and more with this in-depth, practical, easy-",
    color: ["#E6FAEA", "#CEF6D6", "#5FD46D"],
  },
  {
    icon: "MdOutlinePhotoSizeSelectActual",
    title: "Photography",
    description:
      "Learn Adobe Illustrator CC graphic design, logo design, and more with this in-depth, practical, easy-",
    color: ["rgba(187,240,255,0.5)", "#BBF0FF", "#18AFED"],
  },
  {
    icon: "FaRegHeart",
    title: "Healf & Care",
    description:
      "Learn Adobe Illustrator CC graphic design, logo design, and more with this in-depth, practical, easy-",
    color: ["rgba(246,140,32,0.1)", "#FAE0D0", "#EF8543"],
  },
  {
    icon: "FaChromecast",
    title: "Technology",
    description:
      "Learn Adobe Illustrator CC graphic design, logo design, and more with this in-depth, practical, easy-",
    color: ["#EFEFF6", "#E2DDFF", "#5444A5"],
  },
];
