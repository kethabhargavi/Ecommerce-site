import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import products from '../data/products'

function Products() {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <Navbar />

      <div className='pt-28 px-8'>
        <h1 className='text-5xl font-bold text-center mb-12'>
          Products Collection
        </h1>

        <div className='grid md:grid-cols-3 gap-8'>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products