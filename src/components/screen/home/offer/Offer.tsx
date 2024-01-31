import { OfferCard } from "./offer-card/OfferCard";

export function Offer() {
  return (
    <div className="bg-lessons h-[430px] w-full">
      <section className="py-20 grid grid-cols-2 gap-8">
        <OfferCard
          avatar={"https://i.pravatar.cc/90?img=5"}
          title={"Become a Teacher"}
          description={
            "Teach what you love. Coursector gives you the tools to create a course."
          }
          buttonText={"Apply as teacher"}
        />
        <OfferCard
          avatar={"https://i.pravatar.cc/90?img=6"}
          title={"Coursector for Business"}
          description={
            "Get unlimited access to 3,000+ of Coursector’s top courses for your team"
          }
          buttonText={"Get skillfy for business "}
        />
      </section>
    </div>
  );
}
