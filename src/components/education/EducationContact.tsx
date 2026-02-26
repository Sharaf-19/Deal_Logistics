import { motion } from 'framer-motion';
import { Mail, Phone, Users } from 'lucide-react';

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
              href='mailto:info.deallogistics@gmail.com'
              className='group flex flex-col items-center gap-3 bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300'>
              <div className='w-12 h-12 rounded-full bg-[#bf1940] flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                <Mail className='w-5 h-5 text-white' />
              </div>

              <span className='text-sm font-semibold text-foreground'>Email Us</span>

              <span className='text-xs text-muted-foreground text-center'>
                info.deallogistics@gmail.com
              </span>
            </a>
            <a
              href='tel:+8617551704131'
              className='group flex flex-col items-center gap-3 bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300'>
              <div className='w-12 h-12 rounded-full bg-[#7274e1] flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                <Phone className='w-5 h-5 text-white' />
              </div>

              <span className='text-sm font-semibold text-foreground'>Call Us</span>

              <span className='text-xs text-muted-foreground'>+86 175 5170 4131</span>
            </a>
            <a
              href='https://whatsapp.com/channel/0029Vb7Wp6x1NCrTPeE1Bs1i'
              target='_blank'
              rel='noopener noreferrer'
              className='group flex flex-col items-center gap-3 bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300'>
              <div className='w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                <Users className='w-5 h-5 text-white' />
              </div>

              <span className='text-sm font-semibold text-foreground'>WhatsApp Channel</span>

              <span className='text-xs text-muted-foreground text-center'>
                For more details & updates join our official WhatsApp channel
              </span>
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
