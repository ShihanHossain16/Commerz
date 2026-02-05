import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'
import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'
import LatestProducts from '../components/LatestProducts'

const Home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <FeaturedProducts/>
      <LatestProducts/>
      <Footer/>
    </div>
  )
}

export default Home