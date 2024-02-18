"use client";

import Button from "@/components/ui/button/Button";
import Field from "@/components/ui/form/field/Field";
import google from "@/assets/image/google.png";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { IFormData } from "@/services/auth/auth.types";
import { authService } from "@/services/auth/auth.service";
import { saveTokenStorage } from "@/services/auth/auth.helper";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
export function Login() {
  const { push } = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IFormData>({
    mode: "onChange",
  });
  const { mutate: mutateLogin, isPending: isRegisterPending } = useMutation({
    mutationKey: ["login"],
    mutationFn: (data: IFormData) => authService.main("login", data),
    onSuccess({ data }) {
      saveTokenStorage(data.accessToken);
      reset();
      push("/");
    },
  });

  function onSubmit(data: IFormData) {
    mutateLogin(data);
  }
  return (
    <form
      className="animate-opacity w-[500px] flex flex-col mx-auto mt-16"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-4xl font-medium">Hello ! Welcome back.</h1>
      <p className="text-1.5xl text-navbar mb-12">
        Log in with your data that you entered <br /> during Your registration.
      </p>
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
      <Button className="mt-8 py-5">Start now !</Button>
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
        Dont&apos;t have an account?
        <span className="text-primary"> Sign up</span>
      </div>
    </form>
  );
}
