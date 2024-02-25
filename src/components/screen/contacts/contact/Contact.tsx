import clsx from 'clsx';
import Image from 'next/image';

export interface IContact {
	variant?: 'left' | 'right';
	color?: string;
	title: string;
	text: string;
	address: string;
	imagePath: string;
}

export function Contact({
	variant = 'left',
	color = '#FEF0EF',
	title,
	text,
	address,
	imagePath,
}: IContact) {
	return (
		<div
			className={clsx('mb-20 flex h-[600px] w-full items-center', {
				['flex-row-reverse']: variant === 'right',
			})}
		>
			<div
				className={clsx(
					'flex h-full w-[770px] flex-col  px-[70px]  py-28 text-hero-text shadow-xl',
					variant === 'right' ? 'items-end text-right' : 'text-left'
				)}
				style={{ backgroundColor: color }}
			>
				<p className="mb-4">CONTACT</p>
				<h1 className="text-black">{title}</h1>
				<p className="my-10 w-[450px] ">{text}</p>
				<p>{address}</p>
			</div>
			<div
				className={clsx(
					'relative  h-[478px] w-[570px] bg-gray-400',
					variant === 'left' ? '-ml-[170px]' : '-mr-[170px]'
				)}
			>
				<Image
					src={imagePath}
					alt="contacts"
					// width={570}
					// height={478}
					layout="fill"
					objectFit="cover"
					className=" shadow-xl"
				/>
			</div>
		</div>
	);
}
