import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Framer Motion Project 2",
  description: "Created By @nagdista || nagdista.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.className}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
