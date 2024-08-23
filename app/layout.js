import { SpeedInsights } from "@vercel/speed-insights/next"
import localFont from 'next/font/local'
import Nav from "../component/Nav/Nav"
import Footer from "../component/Footer/Footer"
import { VercelToolbar } from "@vercel/toolbar/next";
import GoogleAnalytics from "./utils/GoogleAnalytics";

const GTUltra = localFont({
  src: [
    { path: '../public/font/GT-Ultra-Median-Black-Trial.woff2', 
      weight: '900',
      style: 'normal'
    },
    { path: '../public/font/GT-Ultra-Median-Bold-Trial.woff2', 
      weight: '700',
      style: 'normal'
    },
    { path: '../public/font/GT-Ultra-Standard-Bold-Trial.woff2', 
      weight: '400',
      style: 'normal'
    },
    { path: '../public/font/GT-Ultra-Standard-Regular-Trial.woff2', 
      weight: '400',
      style: 'bold'
    },
    { path: '../public/font/GT-Ultra-Standard-Regular-Italic-Trial.woff2', 
      weight: '400',
      style: 'italic'
    },
  ],
})

export const metadata = {
  title: process.env.NEXT_PUBLIC_SITE_TITLE,
  description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
};

export default function RootLayout({ children }) {
  const shouldInjectToolbar = process.env.NODE_ENV === "development";
  return (
    <html lang="en" className={GTUltra.className}>
        <GoogleAnalytics />
      <body>
        <Nav />
        <div>{children}</div>
        <Footer />
        <SpeedInsights />
        {shouldInjectToolbar && <VercelToolbar />}
      </body>
    </html>
  );
}
