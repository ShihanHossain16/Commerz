import ProductImage1 from '../assets/product1.png'
// import ProductImage2 from '../assets/product2.png'
// import ProductImage3 from '../assets/product3.png'

const FeaturedProducts = () => {
    const products = [
        {
            id: 1,
            name: "Dummy product 1",
            image:ProductImage1,
            price: 100,
            crossPrice: 110
        },
        {
            id: 2,
            name: "Dummy product 2",
            image:ProductImage1,
            price: 100,
            crossPrice: 110
        },
        {
            id: 3,
            name: "Dummy product 3",
            image:ProductImage1,
            price: 120,
            crossPrice: 190
        },
        {
            id: 4,
            name: "Dummy product 4",
            image:ProductImage1,
            price: 100,
            crossPrice: 110
        },
        {
            id: 5,
            name: "Dummy product 5",
            image:ProductImage1,
            price: 150,
            crossPrice: 160
        },
    ]
    return (
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-10">
            <h2 className='text-green-400 text-4xl font-medium pb-10'>
                Featured <span className="text-gray-700">Products</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                {
                    products && products.map(product => {
                        return (
                            <div key={product.id}>
                                <div className="bg-slate-100 overflow-hidden rounded-lg mb-3">
                                    <img
                                        src={product.image}
                                        alt="Product"
                                        className="h-96 object-cover ease-in-out transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                                <h3 className="text-lg text-gray-800 font-semibold">{product.name}</h3>
                                <p className="text-base text-gray-700 font-semiblod">${product.price} {" "}
                                    <span className="line-through text-gray-500">${product.crossPrice}</span>
                                </p>
                            </div>
                        )
                    })
                }


            </div>

        </div>
    )
}

export default FeaturedProducts