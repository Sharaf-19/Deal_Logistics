import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle } from 'lucide-react';

const EducationContact = () => {
  return (
    <section className='py-20' id='EducationContact'>
      <div className='container mx-auto px-6 md:px-20 lg:px-32'>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='max-w-3xl mx-auto text-center'>
          <h2 className='text-4xl sm:text-5xl font-bold text-foreground mb-4'>
            Start Your Journey
          </h2>
          <p className='text-lg text-muted-foreground mb-10'>
            Get in touch with our education consultants for free guidance on admissions,
            scholarships, and visa processing.
          </p>

          <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10'>
            <a
              href='mailto:education@deal.com'
              className='flex flex-col items-center gap-3 bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition'>
              <div className='w-12 h-12 rounded-full gradient-brand flex items-center justify-center'>
                <Mail className='w-5 h-5 text-primary-foreground' />
              </div>
              <span className='text-sm font-medium text-foreground'>Email Us</span>
              <span className='text-xs text-muted-foreground'>info.deallogistics@gmail.com</span>
            </a>
            <a
              href='tel:+8617551704131'
              className='flex flex-col items-center gap-3 bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition'>
              <div className='w-12 h-12 rounded-full gradient-brand flex items-center justify-center'>
                <Phone className='w-5 h-5 text-primary-foreground' />
              </div>
              <span className='text-sm font-medium text-foreground'>Call Us</span>
              <span className='text-xs text-muted-foreground'>+86 175 5170 4131</span>
            </a>
            <a
              href='https://wa.me/8617551704131'
              target='_blank'
              rel='noopener noreferrer'
              className='flex flex-col items-center gap-3 bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition'>
              <div className='w-12 h-12 rounded-full gradient-brand flex items-center justify-center'>
                <MessageCircle className='w-5 h-5 text-primary-foreground' />
              </div>
              <span className='text-sm font-medium text-foreground'>WhatsApp</span>
              <span className='text-xs text-muted-foreground'>Chat with us</span>
            </a>
          </div>

          {/* <a
            href='#EducationHero'
            className='gradient-brand text-primary-foreground px-10 py-3 rounded-full text-lg font-medium shadow-lg hover:opacity-90 transition inline-block'>
            Apply Now
          </a> */}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationContact;
