import '@/styles/navbar.css'
import '@/styles/layout.css'
import '@/styles/Home.module.css'
import '@/styles/footer.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }) {
  return (
    <main className={poppins.className}>
      <Component {...pageProps} />
    </main>
  )
}