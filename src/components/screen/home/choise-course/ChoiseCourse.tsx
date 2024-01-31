import { CategoryCard } from "./category-card/CategoryCard";
import { categoriesCourses } from "./choise-course.data";
import Button from "@/components/ui/button/Button";

export function ChoiseCourse() {
  return (
    <div className="bg-white h-[916px]">
      <header className="flex justify-between items-center container pt-20 pb-11">
        <p className="text-4xl">Choice favourite course from top category</p>
        <Button>See all Catergories</Button>
      </header>
      <section className="grid grid-cols-4  gap-8">
        {categoriesCourses.map((category) => (
          <CategoryCard
            key={category.title}
            Icon={category.Icon}
            title={category.title}
            description={category.description}
            color={category.color}
          />
        ))}
      </section>
    </div>
  );
}
