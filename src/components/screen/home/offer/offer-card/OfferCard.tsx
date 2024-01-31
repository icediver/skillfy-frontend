import Button from "@/components/ui/button/Button";
import { Avatar } from "./avatar/Avatar";

interface IOfferCard {
  avatar: string;
  title: string;
  description: string;
  buttonText: string;
}
export function OfferCard({
  avatar,
  title,
  description,
  buttonText,
}: IOfferCard) {
  return (
    <div className="w-[570px] h-[270px] bg-white flex py-12 pl-5 pr-24 text-hero-text gap-8">
      <Avatar avatar={avatar} />
      <div>
        <p className="text-1.5xl">{title}</p>
        <p className="my-5">{description}</p>
        <Button>{buttonText}</Button>
      </div>
    </div>
  );
}
