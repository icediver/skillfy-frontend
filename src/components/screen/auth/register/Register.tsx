"use client";

import Button from "@/components/ui/button/Button";
import Field from "@/components/ui/form/field/Field";
import google from "@/assets/image/google.png";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
interface IRegister {
  name: string;
  email: string;
  password: string;
}

export function Register() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    resetField,
    watch,
  } = useForm<IRegister>({
    mode: "onChange",
  });
  function onSubmit({ email, password }: IRegister) {
    console.log(email, password);
  }

  return (
    <form
      className="animate-opacity w-[505px] flex flex-col mx-auto mt-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-4xl font-medium">Create your free account</h1>
      <p className="text-1.5xl text-navbar">
        See how the world&apos;s best user experiences <br /> are created
      </p>
      <Field
        {...register("name")}
        placeholder="Your name"
        error={errors.email?.message?.toString()}
        label="Full name"
      />

      <Field
        {...register("email")}
        placeholder="Example@email.com"
        error={errors.email?.message?.toString()}
        label="Email Address"
      />
      <Field
        {...register("password", {
          minLength: {
            value: 6,
            message: "Min length should more than 6 symbols!",
          },
        })}
        placeholder="Enter password"
        error={errors["password"]?.message?.toString()}
        label="password"
        type="password"
      />
      <Button className="mt-8 py-5">Create your account</Button>
      <div className="flex items-center text-1.5xl">
        <div className="h-px w-56 bg-border" />
        <div className="px-4 py-8">OR</div>
        <div className="h-px w-56 bg-border" />
      </div>
      <div className="border rounded-md py-4 flex justify-center items-center gap-5">
        <Image src={google} width={36} height={36} alt="google" />
        <span className="text-navbar">Sign with Google</span>
      </div>
      <div className="text-navbar mt-9">
        By signing up, you agree to our communicatins and usage
        <br />
        terms Already have an account?
        <span className="text-primary"> Sign in</span>
      </div>
    </form>
  );
}
