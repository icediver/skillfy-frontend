import { Footer } from '../screen/auth/footer/Footer';
import { TailwindContainer } from '../ui/tailwind-container/TailwindContainer';
import { Header } from './header/Header';

interface ILayout {
	variant?: 'primary' | 'secondary';
	children: React.ReactNode;
}
export function Layout({ children, variant = 'primary' }: ILayout) {
	return (
		<>
			<Header variant={variant} />
			{children}
			<Footer />
			<TailwindContainer />
		</>
	);
}
