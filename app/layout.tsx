import type { Metadata } from "next";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { fraunces, poppins } from "@/app/fonts";

export const metadata: Metadata = {
  title: "Taj Alras Goods Wholesalers L.L.C",
  description: "A public catalog website for our products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${fraunces.variable} antialiased`}>
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
