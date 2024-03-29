'use client';

import Button from '@/components/ui/button/Button';
import Field from '@/components/ui/form/field/Field';
import google from '@/assets/image/google.png';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { AuthService } from '@/services/auth/auth.service';
import { saveTokenStorage } from '@/services/auth/auth.helper';
import { IFormData } from '@/services/auth/auth.types';
interface IRegister {
	name: string;
	email: string;
	password: string;
}

export function Register() {
	const { push } = useRouter();
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm<IFormData>({
		mode: 'onChange',
	});
	const { mutate: mutateRegister, isPending: isRegisterPending } = useMutation({
		mutationKey: ['register'],
		mutationFn: (data: IFormData) => AuthService.main('register', data),
		onSuccess({ data }) {
			saveTokenStorage(data.accessToken);
			reset();
			push('/');
		},
	});

	function onSubmit(data: IFormData) {
		mutateRegister(data);
	}

	return (
		<form
			className="mx-auto mt-6 flex w-[505px] animate-opacity flex-col"
			onSubmit={handleSubmit(onSubmit)}
		>
			<h1 className="text-4xl font-medium">Create your free account</h1>
			<p className="text-1.5xl text-navbar">
				See how the world&apos;s best user experiences <br /> are created
			</p>
			<Field
				{...register('name')}
				placeholder="Your name"
				error={errors.email?.message?.toString()}
				label="Full name"
			/>

			<Field
				{...register('email')}
				placeholder="Example@email.com"
				error={errors.email?.message?.toString()}
				label="Email Address"
			/>
			<Field
				{...register('password', {
					minLength: {
						value: 6,
						message: 'Min length should more than 6 symbols!',
					},
				})}
				placeholder="Enter password"
				error={errors['password']?.message?.toString()}
				label="password"
				type="password"
			/>
			<Button className="mt-8 py-5">Create your account</Button>
			<div className="flex items-center text-1.5xl">
				<div className="h-px w-56 bg-border" />
				<div className="px-4 py-8">OR</div>
				<div className="h-px w-56 bg-border" />
			</div>
			<div className="flex items-center justify-center gap-5 rounded-md border py-4">
				<Image src={google} width={36} height={36} alt="google" />
				<span className="text-navbar">Sign with Google</span>
			</div>
			<div className="mt-9 text-navbar">
				By signing up, you agree to our communicatins and usage
				<br />
				terms Already have an account?
				<span className="text-primary"> Sign in</span>
			</div>
		</form>
	);
}
