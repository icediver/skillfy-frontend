import Image from 'next/image';
import login from '../../assets/image/login.png';
import shape from '../../assets/image/shape.png';
import { Logo } from '@/components/ui/logo/Logo';
import { AuthProfile } from '@/components/screen/auth/auth-profile/AuthProfile';

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="grid animate-opacity grid-cols-2">
			<div className="relative h-screen w-full bg-login-background">
				<div className="flex h-full w-full justify-end">
					<div className="mb-28 flex w-[669px] flex-col justify-between py-11">
						<Logo />
						<div className="z-10 text-5xl font-medium text-white">
							<div>Turn your ambition</div>
							<div>into a success story</div>
							<div className="mt-5 text-center text-1.5xl">
								Choose from over 100,000 online video.
							</div>
						</div>
					</div>
				</div>

				<Image
					src={shape}
					alt="shape"
					width={350}
					height={251}
					className="absolute right-6 top-9"
				/>
				<Image
					src={login}
					alt="login"
					width={452}
					height={443}
					className="absolute left-80 top-40"
				/>
				<Image
					src={shape}
					alt="shape"
					width={350}
					height={251}
					className="left-o absolute bottom-0"
				/>
			</div>
			<div>
				<AuthProfile />
				{children}
			</div>
		</section>
	);
}
