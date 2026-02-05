import ProductImage1 from '../assets/product1.png'

const FeaturedProducts = () => {
    return (
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-10">
            <h2 className='text-green-400 text-4xl font-medium pb-10'>
                Featured <span className="text-gray-700">Products</span>
            </h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5'>
                <div className="bg-slate-100 overflow-hidden rounded-lg">
                   <img src={ProductImage1} alt="" />
                    {/* <img className="h-40" src="../assets/product1.png" alt="Product" /> */}
                </div>
            </div>
        </div>
    )
}

export default FeaturedProducts