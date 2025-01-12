import type { Metadata } from "next";
import { Teachers } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const teachers = Teachers({
  variable: "--font-teachers",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BookNest Organize Your Reading",
  description: "Know which book to read by prioritizing them",
  authors: {
    name: "shantanuuchak",
    url: "https://shantanuuchak.tech",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${teachers.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}