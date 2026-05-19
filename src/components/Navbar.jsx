import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'

function Navbar() {
  const [menu, setMenu] = useState(false)

  return (
    <nav className='fixed top-0 left-0 w-full bg-black/50 backdrop-blur-md z-50 text-white'>
      <div className='flex justify-between items-center px-8 py-4'>
        <h1 className='text-2xl font-bold text-cyan-400'>Products Log</h1>

        <div className='hidden md:flex gap-6 items-center'>
          <Link to='/'>Home</Link>
          <Link to='/products'>Products</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>

          <Link to='/login'>
            <button className='bg-white text-black px-4 py-2 rounded-lg'>
              Login
            </button>
          </Link>

          <Link to='/signup'>
            <button className='bg-cyan-400 text-black px-4 py-2 rounded-lg'>
              Signup
            </button>
          </Link>
        </div>

        <button
          className='md:hidden text-2xl'
          onClick={() => setMenu(!menu)}
        >
          <FaBars />
        </button>
      </div>

      {menu && (
        <div className='md:hidden flex flex-col bg-black px-8 py-4 gap-4'>
          <Link to='/'>Home</Link>
          <Link to='/products'>Products</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Signup</Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar