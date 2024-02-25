import clsx from 'clsx';
import styles from './Contacts.module.scss';
import Button from '@/components/ui/button/Button';
import hero from '@/assets/image/hero.jpg';
import Image from 'next/image';
import { Contact } from './contact/Contact';
import { contactsData } from './contacts.data';
export function Contacts() {
	return (
		<section className={clsx(styles.background, '')}>
			<div className="container py-8 text-black">
				<div className="flex gap-10">
					<div className="ml-10 h-[400px]">
						<div className="py-20">
							<p className="text-hero-text">CONTACT</p>
							<h1 className="my-6">Got a question about using Skillfy?</h1>
							<p className="text-hero-text">
								This is the place to start. Find the answers you need from the
								Skillfy Community or our award-winning support team.
							</p>
							<Button className="my-10">Help Center</Button>
						</div>
					</div>
					<div className="overflow-hidden rounded-lg shadow-2xl">
						<Image src={hero} alt="contacts" width={500} height={500} />
					</div>
				</div>
				<div className="my-10 flex items-center justify-between">
					<h1>Expanding learning opportunities</h1>
					<Button>Join Now</Button>
				</div>
				{contactsData.map((contact) => (
					<Contact key={contact.title} {...contact} />
				))}
				<div className="h-[600px] py-20">
					<div className="h-[400px] w-full rounded-bl-[200px] rounded-tr-[200px] bg-black py-20">
						<p className="text-center text-2.5xl text-white">
							it&apos;s time to start investing in yourself in learning
						</p>
						<p className="mx-28 mt-10 text-center text-1.5xl text-white">
							Match your goals to our programs, explore your options, and map
							out your path to success. I plan to use skillfy for a long time!.
						</p>
						<div className="mx-auto w-full text-center">
							<Button className="mt-10">Get Started</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
