import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa6';
const menu: { title: string; value: string }[] = [
	{ title: 'Home', value: '/home' },
	{ title: 'Pages', value: '/pages' },
	{ title: 'Cources', value: '/cources' },
	{ title: 'Features', value: '/features' },
	{ title: 'Blog', value: '/blog' },
	{ title: 'Shop', value: '/shop' },
];
export function Navbar() {
	return (
		<nav className="hidden md:block">
			<ul className="flex md:gap-2 lg:gap-10">
				{menu.map((item) => (
					<li key={item.title}>
						<Link
							href={item.value}
							className="flex items-center gap-2 text-navbar hover:text-blue-800 md:text-sm lg:text-base"
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
