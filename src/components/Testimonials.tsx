import { motion } from "framer-motion";
import { assets, testimonialsData } from "../assets/assets";

const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className='container mx-auto py-10 lg:px-32 w-full overflow-hidden'
      id='Testimonials'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        Discover what our satisfied clients are {" "}
        <span className='font-bold text-blue-600'>
          saying about us
        </span>
      </h1>

      <div className='flex flex-wrap justify-center gap-8 mt-16'>
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className='max-w-[340px] border shadow-lg rounded px-8 py-12 text-center'>
            <img
              src={testimonial.image}
              alt={testimonial.alt}
              className='w-20 h-20 rounded-full mx-auto mb-4'
            />
            <div>
              <h2 className='text-xl text-gray-700 font-medium'>{testimonial.name}</h2>
              <p className='text-sm text-gray-500 mb-4'>{testimonial.title}</p>
              <div className='flex justify-center gap-1 text-red-500 mb-4'>
                {Array.from({ length: testimonial.rating }, (item, index) => (
                  <img
                    key={index}
                    src={assets.star_icon}
                    alt='star icon'
                    className='w-4 h-4 inline-block'
                  />
                ))}
              </div>
              <p className='text-gray-600'>{testimonial.text}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;
