import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';

const Contact = () => {
  const [result, setResult] = useState('');

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.currentTarget);

    formData.append('access_key', import.meta.env.VITE_WEB3FORMS_KEY as string);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult(' Submitted Successfully');
      toast.success('Form submitted successfully!');
      event.currentTarget.reset();
    } else {
      console.log('Error', data);
      toast.error(data.message);
      setResult('');
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden'
      id='Contact'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        Contact{' '}
        <span className='underline underline-offset-4 decoration-1 under font-light'>With Us</span>
      </h1>
      <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>
        Contact us to request a quote today.{' '}
      </p>

      {/* ✅ New Contact Info Section */}
      <div className='mt-6 max-w-2xl mx-auto flex flex-col sm:flex-col justify-center gap-6 text-gray-700 items-center'>
        <div className='flex items-center gap-3'>
          <Phone className='text-blue-600 w-5 h-5' />
          <span className='text-sm sm:text-base'>+86 175 517 041 31</span>
        </div>
        <div className='flex items-center gap-3'>
          <Mail className='text-blue-600 w-5 h-5' />
          <span className='text-sm sm:text-base'>info.deallogistics@gmail.com</span>
        </div>
      </div>

      {/* ✅ Form section (unchanged) */}
      <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-20'>
        <div className='flex flex-col gap-4'>
          <div className='w-full text-left'>
            Your Name
            <input
              type='text'
              name='name'
              className='border border-gray-300 rounded px-4 py-3 w-full mt-2'
              placeholder='Enter your name'
              required
            />
          </div>
          <div className='w-full text-left'>
            Your Email
            <input
              type='email'
              name='email'
              className='border border-gray-300 rounded px-4 py-3 w-full mt-2'
              placeholder='Enter your Email'
              required
            />
          </div>
          <div className='w-full text-left'>
            Phone Number
            <input
              type='number'
              name='phone'
              className='border border-gray-300 rounded px-4 py-3 w-full mt-2'
              placeholder='Enter your phone'
            />
          </div>
        </div>
        <div className='text-left my-6'>
          Message
          <textarea
            name='message'
            className='w-full border border-gray-300 rounded px-4 py-3 mt-2 h-48 resize-none'
            rows={5}
            placeholder='Type your message here'
            required></textarea>
        </div>
        <button
          type='submit'
          className='bg-gradient-to-r from-[#72d6e1] to-[#1964bf] text-white px-8 py-2 rounded shadow hover:opacity-90 transition'>
          {result ? result : 'Get a Quote'}
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
