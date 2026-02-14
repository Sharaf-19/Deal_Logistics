import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

const Header = () => {
  // ✅ List of background images
  const images = ['/header_img.png', '/header_img2.jpg', '/header_img3.jpg', '/header_img4.jpg', '/header_img5.png', '/header_img6.jpg'];

  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Auto change background every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className='relative min-h-screen mb-4 flex items-center w-full overflow-hidden'
      id='Header'>
      {/* ✅ Sliding background images */}
      <div className='absolute inset-0'>
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        {/* overlay for dark effect (better text readability) */}
        <div className='absolute inset-0 bg-black/50'></div>
      </div>
      <Navbar />

      {/* ✅ Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='relative container text-center mx-auto py-4 px-6 md:px-30 lg:px-52 text-white'>
        <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>
          Explore logistics and education in China with{' '}
          <span className='bg-gradient-to-r from-[#72d6e1] to-[#1964bf] bg-clip-text text-transparent'>
            Deal
          </span>
          .
        </h2>

        <div className='mt-16 flex justify-center'>
          <a
            href='http://119.8.54.170/express/'
            target='_blank'
            rel='noopener noreferrer'
            className='bg-gradient-to-r from-[#72d6e1] to-[#1964bf] text-white px-8 sm:px-10 py-3 rounded-full text-lg sm:text-xl font-medium shadow-lg hover:opacity-90 transition'>
            Track Your Order
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
