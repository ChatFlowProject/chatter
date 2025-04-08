import { motion } from 'framer-motion'

const SplashScreen = () => {
  return (
    <motion.div
      className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-blue-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 120 }}
        className="w-[160px] h-[160px] mb-4"
      >
        <img src="/assets/img/logo/splashImage.png" alt="Splash Logo" width={160} height={160} />
      </motion.div>

      <motion.h1
        className="text-3xl font-bold text-blue-800"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Welcome to ChatFlow!
      </motion.h1>
    </motion.div>
  )
}

export default SplashScreen