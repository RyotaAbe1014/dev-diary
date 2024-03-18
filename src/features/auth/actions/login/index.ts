'use server';

import { loginSchema } from "../../schemas/login_schemas";


export async function login(email: string, password: string): Promise<string[] | void> {
  // TODO: ログイン機能を実装する
  // 1. zodでemailとpasswordのバリデーションを行う
  const result = loginSchema.safeParse({ email, password });

  let errors: string[] = [];
  if (!result.success) {
    errors = result.error.errors.map((error) => error.message);
    return errors;
  }

  // 2. ログインのAPIを叩く
  // 3. ログインに成功したら、トークンをcookieに保存する
  // 4. ログインに失敗したら、エラーメッセージを表示する
  // 5. ホーム画面に遷移する
  return;
}