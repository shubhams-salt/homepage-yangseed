import { Baumans, Inter } from "next/font/google";

export const baumans = Baumans({
  weight: "400",
  subsets: ["latin"],
  variable: "--baumans-font",
});
export const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--inter-font",
});
