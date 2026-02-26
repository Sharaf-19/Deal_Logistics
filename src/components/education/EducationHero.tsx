import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { assets } from '../../assets/assets';

const heroImages = ['/education/hero2.jpg', '/education/hero1.jpg', '/education/hero3.jpg', '/education/hero4.jpg', '/education/hero5.jpg', '/education/hero6.jpg'];

const EducationHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % heroImages.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className='relative min-h-screen flex items-center w-full overflow-hidden'
      id='EducationHero'>
      {/* Background slider */}
      <div className='absolute inset-0'>
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className='absolute inset-0 bg-black/30' />
      </div>
      <div className='absolute top-0 left-0 w-full z-10'>
        <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
          <a href='/' className='flex items-center gap-2'>
            <img src={assets.logo2} alt='Deal Service Logistics' className='h-24 w-auto' />
          </a>
        </div>{' '}
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className='relative container mx-auto py-4 px-6 md:px-20 lg:px-32 text-center'>
        <motion.h1
          className='text-4xl text-white sm:text-5xl md:text-7xl font-bold max-w-4xl mx-auto leading-tight pt-20'
          initial='hidden'
          animate='visible'
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.25,
              },
            },
          }}>
          {/* Line 1 */}
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
              visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8 } },
            }}
            className='block'>
            Your Gateway to
          </motion.span>

          {/* Line 2 */}
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
              visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8 } },
            }}
            className='block'>
            <span className=''>
              Education
            </span>{' '}
            in China with
          </motion.span>

          {/* DEAL Special Animation */}
          <motion.span
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              textShadow: [
                '0px 0px 0px rgba(114,214,225,0)',
                '0px 0px 25px rgba(114,214,225,0.7)',
                '0px 0px 0px rgba(114,214,225,0)',
              ],
            }}
            transition={{
              duration: 1.2,
              delay: 0.6,
              textShadow: {
                repeat: Infinity,
                duration: 3,
                ease: 'easeInOut',
              },
            }}
            className='block bg-gradient-to-r from-[#72d6e1] to-[#1964bf] bg-clip-text text-transparent'>
            DEAL
          </motion.span>
        </motion.h1>
        <p className='mt-6 text-white text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto'>
          Bachelor's, Master's, PhD programs, language courses, and scholarships — all in one place.
        </p>
        <div className='mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center'>
          {/* Primary Button */}
          <a
            href='#Announcements'
            className='group relative inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-white rounded-full 
    bg-gradient-to-r from-[#72d6e1] to-[#1d2b3d] 
    shadow-xl hover:shadow-2xl 
    transition-all duration-300 hover:-translate-y-1'>
            Explore Programs
          </a>

          {/* Secondary Button */}
          <a
            href='#EducationContact'
            className='group inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-white rounded-full 
    border border-white/40 backdrop-blur-md 
    bg-white/10 hover:bg-white/40 
    transition-all duration-300 hover:-translate-y-1'>
            Contact Education Team
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default EducationHero;
