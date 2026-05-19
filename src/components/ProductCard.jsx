function ProductCard({ product }) {
  return (
    <div className='bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300'>
      <img
        src={product.image}
        alt={product.name}
        className='h-60 w-full object-cover'
      />

      <div className='p-4'>
        <h2 className='text-xl font-bold'>{product.name}</h2>
        <p className='text-gray-500 mt-2'>{product.description}</p>

        <div className='flex justify-between items-center mt-4'>
          <span className='text-cyan-500 font-bold text-xl'>
            ₹{product.price}
          </span>

          <button className='bg-black text-white px-4 py-2 rounded-lg'>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard