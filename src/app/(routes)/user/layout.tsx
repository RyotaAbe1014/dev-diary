import { Header } from "@/features/user/components/Header/header";

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-4 md:py-6">
        {children}
      </main>
    </div>
  )
}