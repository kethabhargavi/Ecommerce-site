import Navbar from '../components/Navbar'

function Signup() {
  return (
    <div className='bg-black min-h-screen text-white'>
      <Navbar />

      <div className='flex justify-center items-center h-screen'>
        <div className='bg-gray-900 p-10 rounded-2xl w-96'>
          <h1 className='text-4xl font-bold mb-6'>Signup</h1>

          <input
            type='text'
            placeholder='Name'
            className='w-full p-3 rounded-lg mb-4 text-black'
          />

          <input
            type='email'
            placeholder='Email'
            className='w-full p-3 rounded-lg mb-4 text-black'
          />

          <input
            type='password'
            placeholder='Password'
            className='w-full p-3 rounded-lg mb-4 text-black'
          />

          <button className='bg-cyan-400 text-black w-full py-3 rounded-lg font-bold'>
            Create Account
          </button>
        </div>
      </div>
    </div>
  )
}

export default Signup