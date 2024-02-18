import clsx from "clsx";
import { ICategory } from "../choise-course.data";
import DynamicIcon, {
  TypeMaterialIconName,
} from "@/components/ui/dynamic-icon/DynamicIcon";

export function CategoryCard({ icon, title, description, color }: ICategory) {
  return (
    <button
      className="w-full h-[308px] my-4 p-4 text-start rounded filter  hover:contrast-75"
      style={{ background: `${color[0]}` }}
    >
      <div
        className="h-[58px] w-[58px] rounded flex justify-center items-center text-2xl my-4"
        style={{ background: `${color[1]}` }}
      >
        <DynamicIcon
          name={icon as TypeMaterialIconName}
          style={{ stroke: `${color[2]}`, fill: `${color[2]}` }}
        />
      </div>
      <p
        className={clsx(
          "text-1.5xl py-2",
          title === "Development" ? "text-white" : "text-[#302D3A]",
        )}
      >
        {title}
      </p>
      <p
        className={clsx(
          "py-4",
          title === "Development" ? "text-white" : "text-hero-text",
        )}
      >
        {description}
      </p>
    </button>
  );
}
