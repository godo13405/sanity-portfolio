import { SpeedInsights } from "@vercel/speed-insights/next"
import localFont from 'next/font/local'
import Nav from "../component/Nav/Nav"
import Footer from "../component/Footer/Footer"

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
  title: 'Goncalo Stratford Andrade\'s Portfolio',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={GTUltra.className}>
      <body>
        <Nav />
        <div>
          {children}
        </div>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  )
}
