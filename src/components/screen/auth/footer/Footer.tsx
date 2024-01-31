import Link from "next/link";
import { dataFooter } from "./data-footer";
import {
  FaFacebookF,
  FaGoogle,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
export function Footer() {
  return (
    <footer className="bg-footer h-[530px] w-full pt-16">
      <div className="container flex justify-between  border-b border-footer-divider">
        {dataFooter.map((item) => (
          <section
            className="font-medium text-1.5xl text-white"
            key={item.section}
          >
            {item.section}
            <ul className="my-10">
              {item.chapters.map((chapter) => (
                <li
                  key={chapter.title}
                  className="text-footer-text text-md font-normal mb-4"
                >
                  <Link href={chapter.path}>{chapter.title}</Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <div className="container py-8 text-footer-text flex items-center justify-between">
        <div className="">
          © 2015-2020 Skillfy Education Private Limited. All rights reserved
        </div>
        <div className="flex gap-10 text-1.75xl">
          <Link href={"https://fb.com"}>
            <FaFacebookF />
          </Link>
          <Link href={"https://x.com"}>
            <FaTwitter />
          </Link>
          <Link href={"https://google.com"}>
            <FaGoogle />
          </Link>
          <Link href={"https://linkedin.com"}>
            <FaLinkedinIn />
          </Link>
        </div>
      </div>
    </footer>
  );
}
