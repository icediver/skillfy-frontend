import Image from "next/image";

export function BookCard() {
  return (
    <button className="flex flex-col w-[155px] mt-4 gap-2 items-center mx-5">
      <div className="w-[155px] h-[163px] overflow-hidden rounded-xl">
        <Image
          src="/uploads/images/seo.jpg"
          alt="book"
          width={155}
          height={163}
          className="-mt-8"
        />
      </div>
      <p>Use SEO to Boost Your Business</p>
      <p className="text-primary">$ 59.00</p>
    </button>
  );
}
