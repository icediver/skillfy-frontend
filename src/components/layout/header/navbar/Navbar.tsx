import Link from "next/link";
import { FaChevronDown } from "react-icons/fa6";
const menu: { title: string; value: string }[] = [
  { title: "Home", value: "/home" },
  { title: "Pages", value: "/pages" },
  { title: "Cources", value: "/cources" },
  { title: "Features", value: "/features" },
  { title: "Blog", value: "/blog" },
  { title: "Shop", value: "/shop" },
];
export function Navbar() {
  return (
    <nav>
      <ul className="flex gap-12">
        {menu.map((item) => (
          <li key={item.title}>
            <Link
              href={item.value}
              className="flex items-center gap-3 text-navbar hover:text-blue-800"
            >
              {item.title}
              <FaChevronDown size={12} />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
