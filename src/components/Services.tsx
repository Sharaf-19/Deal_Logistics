import { servicesData } from '../assets/assets';
import { motion } from 'framer-motion';

function Services() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='container mx-auto py-20 px-6 md:px-20 lg:px-32 w-full overflow-hidden'
      id='Services'>
      {/* Section Heading */}
      <div className='text-center mb-14'>
        <h1 className='text-6xl sm:text-6xl font-bold mb-8'>Our Services</h1>
        <h4 className='text-xl sm:text-2xl font-semibold leading-snug'>
          From sourcing and shipping solutions to education services in China,
          <span className='font-bold text-blue-500'> we simplify every step for you.</span>
        </h4>
      </div>

      {/* Services Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {servicesData.map((service, index) => (
          <div
            key={index}
            className='bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden'>
            {/* Image */}
            <div className='relative'>
              <img
                src={service.image}
                alt={service.title}
                className='w-full h-56 object-cover rounded-t-xl'
              />

              {/* Icon */}
              <div className='absolute -bottom-6 left-6 bg-white p-4 rounded-full shadow-md'>
                <img src={service.icon} alt={service.title} className='w-6 h-6' />
              </div>
            </div>

            {/* Content */}
            <div className='p-6 pt-10'>
              <h3 className='text-lg font-semibold text-gray-800 mb-2'>{service.title}</h3>

              <p className='text-gray-600 text-sm mb-6'>{service.description}</p>

              <div className='flex flex-col sm:flex-row gap-3'>
                {/* Logistics Extra Button */}
                {index === 0 && (
                  <a
                    href='http://119.8.54.170/express/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='bg-blue-500 text-white text-sm px-4 py-2 rounded-md text-center hover:bg-blue-700 transition duration-300'>
                    Track Order
                  </a>
                )}

                {/* Education Extra Button */}
                {index === 2 && (
                  <a
                    href='/education'
                    className='bg-blue-500 text-white text-sm px-4 py-2 rounded-md text-center hover:bg-blue-700 transition duration-300'>
                    Explore Programs
                  </a>
                )}

                {/* Common Contact Button (All Cards) */}
                <a
                  href='#Contact'
                  className='border border-blue-600 text-blue-600 text-sm px-4 py-2 rounded-md text-center hover:bg-blue-50 transition duration-300'>
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Services;
