import { Ubuntu } from "next/font/google";
import localFont from "next/font/local";

export const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const alteHaasGrotesk = localFont({
  src: [
    {
      path: "../assets/fonts/AlteHaasGrotesk/AlteHaasGroteskRegular.ttf",
      weight: "100 500",
      style: "normal",
    },
    {
      path: "../assets/fonts/AlteHaasGrotesk/AlteHaasGroteskBold.ttf",
      weight: "500 900",
      style: "normal",
    },
  ],
  variable: "--font-alteHaas-base",
  display: "swap",
});

export const onest = localFont({
  src: "../assets/fonts/Onest/Onest-VariableFont_wght.ttf",
  variable: "--font-onest-base",
  display: "swap"
});
