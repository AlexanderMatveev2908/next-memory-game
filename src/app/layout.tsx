import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Game memory",
  description: "Game memory app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
