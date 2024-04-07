'use server';

import { loginSchema } from "../../schemas/login_schemas";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function signUp(email: string, password: string): Promise<string[] | void> {
  const supabase = createClient();
  const result = loginSchema.safeParse({ email, password });
  let errors: string[] = [];
  if (!result.success) {
    errors = result.error.errors.map((error) => error.message);
    return errors;
  }
  const { error } = await supabase.auth.signUp({ email, password });
  if (error) {
    errors.push(error.message);
    return errors;
  }
  redirect('/auth/login');
}