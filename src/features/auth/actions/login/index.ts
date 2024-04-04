'use server';

import { cookies } from "next/headers";
import { loginSchema } from "../../schemas/login_schemas";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function login(email: string, password: string): Promise<string[] | void> {
  const supabase = createClient();
  // TODO: ログイン機能を実装する
  // 1. zodでemailとpasswordのバリデーションを行う
  const result = loginSchema.safeParse({ email, password });

  let errors: string[] = [];
  if (!result.success) {
    errors = result.error.errors.map((error) => error.message);
    return errors;
  }

  // 2. ログインのAPIを叩く
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  // 4. ログインに失敗したら、エラーメッセージを表示する
  if (error) {
    errors.push(error.message);
    return errors;
  }
  // 5. ホーム画面に遷移する
  redirect('/user');
}