import Navbar from '../components/Navbar'

function Contact() {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <Navbar />

      <div className='pt-32 px-10 text-center'>
        <h1 className='text-5xl font-bold'>Contact Us</h1>

        <div className='mt-10 max-w-xl mx-auto'>
          <input
            type='text'
            placeholder='Your Name'
            className='w-full p-4 border rounded-lg mb-4'
          />

          <input
            type='email'
            placeholder='Your Email'
            className='w-full p-4 border rounded-lg mb-4'
          />

          <textarea
            placeholder='Message'
            className='w-full p-4 border rounded-lg mb-4'
            rows='5'
          ></textarea>

          <button className='bg-black text-white px-8 py-3 rounded-lg'>
            Send Message
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact