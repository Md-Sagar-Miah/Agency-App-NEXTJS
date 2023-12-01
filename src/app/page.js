
import FeaturedProject from './components/FeaturedProject'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Subscibe from './components/Subscibe'
import Worklist from './components/Worklist'


export default function Home() {
  return (
    <>
      <Hero />
      <Worklist />
      <Stats />
      <FeaturedProject />
      <Subscibe />
      <Footer />
    </>
  )
}
