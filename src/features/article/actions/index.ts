'use server';

import { logout } from "@/features/auth/actions/logout";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { userArticleSchema } from "../schemas/userArticleSchema";

export async function createArticle({ title, description, text }: { title: string, description: string, text: string }) {
  const result = userArticleSchema.safeParse({ title, description, text });

  let errors: string[] = [];
  if (!result.success) {
    errors = result.error.errors.map((error) => error.message);
    return errors;
  }

  const supabase = createClient();
  const userResponse = await supabase.auth.getUser();

  const user = userResponse.data.user;

  if (!user) {
    await logout();
    return;
  }

  const { error } = await supabase.from('articles').insert([
    {
      'user_id': user.id,
      'title': title,
      'body': text,
      'description': description
    },
  ]).select();

  if (error) {
    return [error.message];
  }

  redirect('/user/article');
}