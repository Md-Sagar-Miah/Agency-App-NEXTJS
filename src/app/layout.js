import './globals.css'
import { Poppins } from 'next/font/google'

export async function generateMetadata() {
  const res = await fetch(process.env.BASE_URL + "api/SiteMeta/home");
  const JSON = await res.json();
  return {
    title: JSON[0]['title'],
    description: JSON[0]['description'],
    keywords: JSON[0]['keywords'],
    openGraph: {
      images: JSON[0]['image'],
    },
  }
}

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin']
})
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className} >{children}</body>
    </html>
  )
}
