import { inter } from "@/lib/fonts";
import type { Metadata } from "next";
import "../styles/global.css";

export const metadata: Metadata = {
  title: "Home Page | Yangseed Planet",
  description: "Home Page of Yangseed Planet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
