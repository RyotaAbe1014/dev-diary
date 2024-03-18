'use client';

import { Label } from "@/lib/components/ui/label"
import { Input } from "@/lib/components/ui/input"
import Link from "next/link"
import { Button } from "@/lib/components/ui/button"
import { useEffect, useState, useTransition } from "react";
import { login } from "@/features/auth/actions/login";
import { LoginErrorCard } from "../../LoginErrorCard/login-error-card";

export function LoginView() {
  const [isPending, startTransition] = useTransition();


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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
    <div className="flex items-center min-h-screen p-4">
      <div className="w-full max-w-sm mx-auto space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Log in to your account</h1>
          <p className="text-sm font-medium leading-none text-gray-500">Enter your information below</p>
        </div>
        {errors.length > 0 && (
          <LoginErrorCard errors={errors} />
        )}
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="m@example.com" required type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input id="password" placeholder="Enter your password" required type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <Button className="w-full" type="submit" disabled={isPending || !email || !password}>
              Login
            </Button>
          </div>
        </form>
        <div className="flex items-center justify-center space-x-2">
          <p className="text-sm text-gray-500">アカウントをお持ちでないですか？</p>
          <Link className="font-medium underline" href="#">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}
