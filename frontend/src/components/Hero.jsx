import { Link } from 'react-router-dom'
import Banner from '../assets/Banner.jpg'

const Hero = () => {
  return (
    <section className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Discover Your Style With Our Collection
            </h2>

            <p className="text-gray-600 text-lg max-w-xl">
              Explore our curated selection of premium products designed to
              elevate your lifestyle. Quality meets style in every piece.
            </p>

            <Link
              to="/shop"
              className="inline-block bg-green-500 hover:bg-green-600 transition text-white px-8 py-3 rounded-lg font-medium"
            >
              Shop Now
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src={Banner}
              alt="Fashion banner"
              className="w-full h-[420px] object-cover rounded-2xl shadow-lg"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
