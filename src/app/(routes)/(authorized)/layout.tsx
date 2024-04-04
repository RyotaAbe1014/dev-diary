import { cookies } from "next/headers";
import { Header } from "../../components/Header/header"
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/auth/login');
  }
  return (
    <div className="flex flex-col min-h-screen">
      <Header isLogin={!!data?.user} />
      <main className="flex-1 py-4 md:py-6">
        {children}
      </main>
    </div>
  )
}