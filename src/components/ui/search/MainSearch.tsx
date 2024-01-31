import { FiSearch } from "react-icons/fi";

export function MainSearch() {
  return (
    <div className="relative rounded-3xl h-[70px]   w-[549px]">
      <input
        type="text"
        placeholder="Search your favorite course"
        className="rounded-lg h-full w-full pl-8 text-hero-text outline-none"
      />
      <button className="absolute right-0 top-0 w-24  h-[70px] bg-primary rounded-r-lg z-10 text-white text-4xl flex justify-center items-center ">
        <FiSearch className="active:translate-y-1" />
      </button>
      <div className="h-[70px] w-[549px] rounded-lg bg-primary-shadow z-0 -mt-10" />
    </div>
  );
}
