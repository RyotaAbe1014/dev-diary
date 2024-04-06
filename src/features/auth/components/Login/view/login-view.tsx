'use client';
import { useState, useTransition } from "react";
import { login } from "@/features/auth/actions/login";
import { AuthForm } from "../../AuthForm/AuthForm";

export function LoginView() {
  const [isPending, startTransition] = useTransition();
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;
    event.preventDefault();
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
