import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  const whatsappNumber = '8617551704131';

  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}`}
      target='_blank'
      rel='noopener noreferrer'
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.4 }}
      className='fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition duration-300'>
      <MessageCircle size={28} />
    </motion.a>
  );
};

export default WhatsAppButton;
