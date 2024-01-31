import PrevNextButton from "@/components/ui/prev-next-button/PrevNextButton";
import { TestimonialsCard } from "./testimonials-card/TestimonialsCard";

export function Testimonials() {
  return (
    <div className="bg-second-section-background w-full h-[539px]">
      <section>
        <header className="flex justify-between items-center pt-20 pb-10">
          <p className="text-4xl font-medium text-black">
            What our students have to say
          </p>
          <div className="flex gap-5">
            <PrevNextButton variant={"prev"} />
            <PrevNextButton variant="next" />
          </div>
        </header>
        <div className="grid grid-cols-2 gap-8">
          <TestimonialsCard
            course={"Themadbrains"}
            role={"Student"}
            testimonials={
              "Skillfy is a life saver. I don’t have the time/money for a college education. My goal is to become a freelance web developer, and thanks to Skillfy."
            }
            rating={0}
            avatar={"https://i.pravatar.cc/90?img=25"}
          />
          <TestimonialsCard
            course={"UIUX Designer"}
            role={"Student"}
            testimonials={
              "Skillfy is a life saver. I don’t have the time/money for a college education. My goal is to become a freelance web developer, and thanks to Skillfy."
            }
            rating={0}
            avatar={"https://i.pravatar.cc/90?img=27"}
          />
        </div>
      </section>
    </div>
  );
}
