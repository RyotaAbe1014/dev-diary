import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { GlobalSpinner } from "@/utils/Loader/components/GlobalSpinner/GlobalSpinner";
import { Provider } from "jotai";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          {children}
          <GlobalSpinner />
        </Provider>
      </body>
    </html>
  );
}
