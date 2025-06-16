import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Memory game",
  description: "Memory game app Becoder",
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
