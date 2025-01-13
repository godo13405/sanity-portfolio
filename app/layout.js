import { SpeedInsights } from "@vercel/speed-insights/next";
import localFont from "next/font/local";
import Nav from "./component/Nav/Nav";
import Footer from "./component/Footer/Footer";
import { VercelToolbar } from "@vercel/toolbar/next";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import colours from "../styles/_theme.module.scss";
import HotjarSnippet from "./utils/HotjarSnippet";

const GTUltra = localFont({
  src: [
    {
      path: "../public/font/GT-Ultra-Median-Black-Trial.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/font/GT-Ultra-Median-Bold-Trial.woff2",
      weight: "700",
      style: "normal",
    },
    // {
    //   path: "../public/font/GT-Ultra-Standard-Bold-Trial.woff2",
    //   weight: "400",
    //   style: "normal",
    // },
    {
      path: "../public/font/GT-Ultra-Standard-Regular-Trial.woff2",
      weight: "400",
      style: "bold",
    },
    {
      path: "../public/font/GT-Ultra-Standard-Regular-Italic-Trial.woff2",
      weight: "400",
      style: "italic",
    },
  ],
});

export const metadata = {
  metadataBase: new URL("https://goncalo.stratfordandrade.com"),
  title: process.env.NEXT_PUBLIC_SITE_TITLE,
  description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
  openGraph: {
    images: [`/img/me.png?bg=${colours["paletteThistle"].replace("#", "")}`],
  },
};

export default function RootLayout({ children }) {
  const shouldInjectToolbar = process.env.NODE_ENV === "development";
  return (
    <html lang="en" className={GTUltra.className}>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTAGS_MEASUREMENT_ID} />
      <body>
        <Nav />
        <div>{children}</div>
        <Footer />
        <SpeedInsights />
        {shouldInjectToolbar && <VercelToolbar />}
        <HotjarSnippet />
      </body>
    </html>
  );
}
