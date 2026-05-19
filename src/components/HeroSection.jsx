import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

function HeroSection() {
  const navigate = useNavigate()

  return (
    <div
      className='h-screen bg-cover bg-center flex items-center justify-center relative'
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1523275335684-37898b6baf30')",
      }}
    >
      <div className='absolute inset-0 bg-black/60'></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: -100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className='relative z-10 text-center'
      >
        <h1 className='text-6xl md:text-8xl font-extrabold text-white'>
          Products Log
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className='text-gray-300 mt-6 text-xl'
        >
          Explore Amazing Products with Modern Shopping Experience
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate('/products')}
          className='mt-8 bg-cyan-400 text-black px-8 py-3 rounded-full text-lg font-bold shadow-lg'
        >
          Shop Now
        </motion.button>
      </motion.div>
    </div>
  )
}

export default HeroSection