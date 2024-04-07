'use client';
import { useState, useTransition } from "react";
import { login } from "@/features/auth/actions/login";
import { AuthForm } from "../../AuthForm/AuthForm";

export function LoginView() {
  const [isPending, startTransition] = useTransition();
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // FormData インスタンスを作成し、フォームのデータを取得
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
