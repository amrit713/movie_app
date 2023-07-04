import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "@/utils/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Movie App",
  description: "Find your fav movies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />

          {children}
        </Providers>
      </body>
    </html>
  );
}
