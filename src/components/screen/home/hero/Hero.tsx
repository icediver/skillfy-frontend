import pattern from "@/assets/image/Pattern.png";
import video from "@/assets/image/video.png";
import hero from "@/assets/image/hero.jpg";
import { MainSearch } from "@/components/ui/search/MainSearch";

import Image from "next/image";
import PlayButton from "@/components/ui/play-button/PlayButton";
export function Hero() {
  return (
    <article className="relative h-[900px] -mt-[88px] pt-28  z-0 bg-main-background">
      <Image
        src={pattern}
        alt={"pattern"}
        className="absolute bottom-1 left-1"
      />{" "}
      <Image
        src={pattern}
        alt={"pattern"}
        className="absolute right-1  top-1/4"
      />
      <section className="flex pt-12 gap-10">
        <div className="pt-20">
          <p className="text-5xl font-bold">
            Turn your
            <br />
            ambition into a<br />
            success story
          </p>
          <p className="py-10 text-hero-text text-1.5xl">
            Choose from over 100,000 online video
            <br />
            courses with new additions published every mont
          </p>
          <MainSearch />
        </div>
        <div className="relative w-[482px] h-[600px]">
          <div className="absolute top-10 z-0 left-10 border-2 border-primary w-full h-full rounded-3xl w-"></div>
          <div className="relative z-10">
            <Image
              src={hero}
              alt="video"
              className="rounded-3xl border border-gray-200"
            />
          </div>
          <PlayButton className="absolute top-1/2 -translate-y-1/2 left-1/2 z-20  -translate-x-1/2" />
        </div>
      </section>
    </article>
  );
}
