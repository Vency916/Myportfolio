import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vency | Creative Developer Portfolio",
  description: "Modern portfolio with interactive experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
