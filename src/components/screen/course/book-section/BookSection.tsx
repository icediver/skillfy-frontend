import { BookCard } from "@/components/ui/book-card/BookCard";
import { LuCalendarDays } from "react-icons/lu";

export function BookSection() {
  return (
    <div className="row-span-5 rounded-2xl bg-white p-4 ">
      <header className="flex justify-between items-center text-1.25xl px-4">
        <p className="text-1.25xl">Book For you</p>
        <LuCalendarDays className="text-primary" />
      </header>
      <div className="flex">
        <BookCard />
        <BookCard />
      </div>
    </div>
  );
}
