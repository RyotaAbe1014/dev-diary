'use client';
import { useState, useTransition } from "react";
import { AuthForm } from "../../AuthForm/AuthForm";
import { login } from "@/features/auth/actions/login";

export function LoginView() {
  const [isPending, startTransition] = useTransition();
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    setErrors([]);
    startTransition(async () => {
      const result = await login(email, password);
      if (result && result.length > 0) {
        setErrors(result);
      }
    });
  };
  return (
    <AuthForm isLoginPage={true} onSubmit={handleSubmit} errors={errors} isPending={isPending} />
  )
}
