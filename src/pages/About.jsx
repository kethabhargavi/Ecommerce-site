import Navbar from '../components/Navbar'

function About() {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <Navbar />

      <div className='pt-32 px-10 text-center'>
        <h1 className='text-5xl font-bold'>About Us</h1>

        <p className='mt-6 text-lg text-gray-600'>
          Products Log is a modern ecommerce platform with premium UI,
          animations, and seamless shopping experience. We offer a curated collection of high-quality products across various categories. Our mission is to provide customers with an enjoyable and convenient online shopping experience. We are committed to delivering exceptional customer service and continuously improving our platform to meet the evolving needs of our users.
        </p>
      </div>
    </div>
  )
}
export default About