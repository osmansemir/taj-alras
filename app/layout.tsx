import type { Metadata } from "next";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { fraunces, poppins } from "@/app/fonts";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Taj Alras Goods Wholesalers | Crowning Your Business with Quality",
  description:
    "Taj Alras is a trusted wholesale supplier providing reliable, high-quality goods sourced from global partners since 2003.",
  keywords: [
    "Taj Alras",
    "Wholesale Supplier",
    "General Trading",
    "Global Goods",
    "Import Export",
    "Reliable Supply",
    "Trading Company",
  ],
  authors: [{ name: "Taj Alras Goods Wholesalers L.L.C" }],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${fraunces.variable} antialiased font-serif`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
