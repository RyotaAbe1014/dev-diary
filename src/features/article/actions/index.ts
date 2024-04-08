'use server';

import { logout } from "@/features/auth/actions/logout";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function createArticle({ title, description, text }: { title: string, description: string, text: string }) {

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

  console.log(error);

  if (error) {
    return error.message;
  }

  redirect('/user/article');
}