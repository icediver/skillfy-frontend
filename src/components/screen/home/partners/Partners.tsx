import PrevNextButton from "@/components/ui/prev-next-button/PrevNextButton";
import Image from "next/image";

export function Partners() {
  return (
    <section className="h-[359px]">
      <header className="flex justify-between items-center pt-20 pb-10">
        <p className="text-4xl font-medium text-black">
          Trusted by our awesome partners
        </p>
        <div className="flex gap-5">
          <PrevNextButton variant={"prev"} color="secondary" />
          <PrevNextButton variant="next" color="secondary" />
        </div>
      </header>
      <div className="grid grid-cols-6 gap-9 ">
        <div className="w-[164px] h-[66px] overflow-hidden flex justify-center">
          <Image
            src={"/uploads/images/hp-logo.png"}
            alt="logo"
            width={110}
            height={66}
          />
        </div>
        <div className="w-[164px] h-[66px] flex items-center">
          <Image
            src={"/uploads/images/forbes.jpg"}
            alt="logo"
            width={164}
            height={66}
          />
        </div>
        <div className="w-[164px] h-[66px]  overflow-hidden ">
          <Image
            src={"/uploads/images/chevrolet.jpg"}
            alt="logo"
            width={144}
            height={66}
          />
        </div>
        <div className="w-[164px] h-[66px]  overflow-hidden ">
          <Image
            src={"/uploads/images/smart.png"}
            alt="logo"
            width={144}
            height={66}
          />
        </div>
        <div className="w-[164px] h-[66px] flex justify-center  overflow-hidden ">
          <Image
            src={"/uploads/images/sega.jpg"}
            alt="logo"
            width={124}
            height={66}
          />
        </div>
        <div className="w-[164px] h-[66px] flex justify-center  overflow-hidden ">
          <Image
            src={"/uploads/images/asus.jpg"}
            alt="logo"
            width={184}
            height={66}
          />
        </div>
      </div>
    </section>
  );
}
