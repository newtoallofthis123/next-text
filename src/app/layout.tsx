import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import "./globals.css";

const libre = Libre_Baskerville({weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NoobText",
  description: "Simple paste bin app to share code",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="favicon.png" type="image/png" />
      </head>
      <body className={libre.className}>{children}</body>
    </html>
  );
}
