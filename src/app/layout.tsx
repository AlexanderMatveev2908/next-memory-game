import type { Metadata } from "next";
import "@/styles/globals.css";
import { chakraPetch } from "@/fonts/chakraPetch";

export const metadata: Metadata = {
  title: "Memory game",
  description: "Memory game app Becoder",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${chakraPetch.className} antialiased`}>{children}</body>
    </html>
  );
}
