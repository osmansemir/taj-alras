import { Fraunces, Geist, Geist_Mono, Poppins } from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const poppins = Poppins({
  weight: "400",
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const fraunces = Fraunces({
  weight: "400",
  variable: "--font-fraunces",
  subsets: ["latin"],
});
