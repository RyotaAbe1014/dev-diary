'use client';
import { useState } from "react";
import Link from "next/link"
import { Input } from "@/lib/components/ui/input"
import { Label } from "@/lib/components/ui/label"
import { Button } from "@/lib/components/ui/button"
import { LoginErrorCard } from "../LoginErrorCard/login-error-card";

export type AuthFormProps = {
  isLoginPage: boolean;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  errors: string[];
  isPending: boolean;
}

export function AuthForm({ isLoginPage, onSubmit, errors, isPending }: AuthFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="flex items-center min-h-screen p-4">
      <div className="w-full max-w-sm mx-auto space-y-4">
        <div className="space-y-2">
          {isLoginPage ? (
            <>
              <h1 className="text-3xl font-bold">Log in to your account</h1>
              <p className="text-sm font-medium leading-none text-gray-500">Enter your information below</p>
            </>
          ) : (
            <>
              <h1 className="text-3xl font-bold">Create an account</h1>
              <p className="text-sm font-medium leading-none text-gray-500">Enter your information below</p>
            </>
          )}
        </div>
        {errors.length > 0 && (
          <LoginErrorCard errors={errors} />
        )}
        <form onSubmit={onSubmit}>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" placeholder="m@example.com" required type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input id="password" name="password" placeholder="Enter your password" required type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <Button className="w-full" type="submit" disabled={isPending || !email || !password}>
              {isPending ? 'Loading...' : isLoginPage ? 'Log in' : 'Sign up'}
            </Button>
          </div>
        </form>
        <div className="flex items-center justify-center space-x-2">
          {isLoginPage ? (
            <>
              <p className="text-sm text-gray-500">アカウントをお持ちでないですか？</p>
              <Link className="font-medium underline" href="/auth/sign-up" prefetch={true}>
                Sign up
              </Link>
            </>
          ) : (
            <>
              <p className="text-sm text-gray-500">アカウントをお持ちですか？</p>
              <Link className="font-medium underline" href="/auth/login" prefetch={true}>
                Log in
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
