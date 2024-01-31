import { Hero } from "./hero/Hero";
import { SecondSection } from "./second-section/SecondSection";
import { ChoiseCourse } from "./choise-course/ChoiseCourse";
import { OnlineLessons } from "./online-lessons/OnlineLessons";
import { About } from "./about/About";
import { Testimonials } from "./testimonials/Testimonials";
import { Partners } from "./partners/Partners";
import { Offer } from "./offer/Offer";

interface IHome {}

export function Home({}: IHome) {
  return (
    <main className="[&_section]:container animate-opacity">
      <Hero />
      <SecondSection />
      <ChoiseCourse />
      <OnlineLessons />
      <About />
      <Testimonials />
      <Partners />
      <Offer />
    </main>
  );
}
