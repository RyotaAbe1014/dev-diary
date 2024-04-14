'use server';
import { redirect } from "next/navigation";
import { revalidateTag } from "next/cache";

import { logout } from "@/features/auth/actions/logout";
import { createClient } from "@/lib/supabase/server";
import { userArticleSchema } from "../schemas/userArticleSchema";
import { UserArticle } from "../types/UserArticle";

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
  revalidateTag('userArticleList');
  redirect('/user/article');
};

export async function getArticleList() {
  const supabase = createClient();
  const userResponse = await supabase.auth.getUser();
  const user = userResponse.data.user;

  if (!user) {
    await logout();
    return;
  }

  const { data, error } = await supabase.from('articles').select('*').eq('user_id', user.id);

  if (error || data === null) {
    throw error;
  }

  return data as UserArticle[];
};

export async function deleteArticle(articleId: number) {
  const supabase = createClient();
  const { error } = await supabase.from('articles').delete().eq('id', articleId);

  if (error) {
    return [error.message];
  }
  revalidateTag('userArticleList');
};
