import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { getActiveAnnouncements } from '../../data/announcements';

const categoryColors: Record<string, string> = {
  Bachelor: 'bg-emerald-500',
  Master: 'bg-blue-600',
  PhD: 'bg-indigo-600',
  Language: 'bg-amber-500',
  Scholarship: 'bg-rose-500',
};

const AnnouncementsCarousel = () => {
  const items = getActiveAnnouncements();
  const [current, setCurrent] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const next = useCallback(() => setCurrent(prev => (prev + 1) % items.length), [items.length]);

  const prev = () => setCurrent(p => (p - 1 + items.length) % items.length);

  useEffect(() => {
    const timer = setInterval(next, 10000);
    return () => clearInterval(timer);
  }, [next]);

  if (items.length === 0) return null;

  return (
    <section className='py-24 bg-gradient-to-b from-white to-gray-50' id='Announcements'>
      <div className='container mx-auto px-6 md:px-20 lg:px-32'>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'>
          <h2 className='text-4xl sm:text-5xl font-bold text-gray-900 mb-4'>
            Announcements & Openings
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Discover the latest degree programs, scholarships, and language courses in China.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className='relative max-w-4xl mx-auto'>
          <div className='overflow-hidden rounded-3xl shadow-2xl bg-white'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={items[current].id}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.6 }}
                className='relative cursor-pointer'
                onClick={() => setIsOpen(true)}>
                <img
                  src={items[current].image}
                  alt={items[current].title}
                  className='w-full h-[500px] sm:h-[600px] object-contain bg-black'
                />

                {/* Improved Overlay */}
                <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-8'>
                  <span
                    className={`inline-block px-4 py-1 rounded-full text-xs font-semibold text-white mb-3 ${
                      categoryColors[items[current].category] || 'bg-blue-600'
                    }`}>
                    {items[current].category}
                  </span>

                  <h3 className='text-2xl sm:text-3xl font-bold text-white'>
                    {items[current].title}
                  </h3>

                  <p className='text-white/80 text-sm mt-2'>
                    Deadline: {items[current].deadline_date}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nav Buttons */}
          <button
            onClick={prev}
            className='absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md p-3 rounded-full shadow-lg hover:scale-110 transition'>
            <ChevronLeft className='w-6 h-6 text-gray-800' />
          </button>

          <button
            onClick={next}
            className='absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md p-3 rounded-full shadow-lg hover:scale-110 transition'>
            <ChevronRight className='w-6 h-6 text-gray-800' />
          </button>

          {/* Dots */}
          <div className='flex justify-center gap-3 mt-8'>
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  i === current
                    ? 'w-10 bg-gradient-to-r from-[#72d6e1] to-[#1964bf]'
                    : 'w-3 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 🔥 Image Modal Preview */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6'>
            <button
              onClick={() => setIsOpen(false)}
              className='absolute top-6 right-6 text-white hover:scale-110 transition'>
              <X size={32} />
            </button>

            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.4 }}
              src={items[current].image}
              alt={items[current].title}
              className='max-h-[90vh] max-w-full object-contain rounded-xl shadow-2xl'
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AnnouncementsCarousel;
