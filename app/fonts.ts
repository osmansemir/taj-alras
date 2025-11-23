import { Fraunces, Poppins } from "next/font/google";

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
