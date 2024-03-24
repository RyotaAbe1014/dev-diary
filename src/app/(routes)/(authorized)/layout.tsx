import { cookies } from "next/headers";
import { Header } from "../../components/Header/header"
export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const token = cookies().get('token')?.value
  return (
    <div className="flex flex-col min-h-screen">
      <Header isLogin={!!token} />
      <main className="flex-1 py-4 md:py-6">
        {children}
      </main>
    </div>
  )
}