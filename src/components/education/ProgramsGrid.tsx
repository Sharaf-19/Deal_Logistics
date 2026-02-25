import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { programs } from '../../data/programs';

const ProgramsGrid = () => {
  return (
    <section className='py-20' id='Programs'>
      <div className='container mx-auto px-6 md:px-20 lg:px-32'>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-14'>
          <h2 className='text-4xl sm:text-5xl font-bold text-foreground mb-4'>Our Programs</h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            From undergraduate degrees to language courses and scholarships,{' '}
            <span className='font-semibold text-primary'>we guide you every step of the way.</span>
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='group bg-card rounded-2xl shadow-md hover:shadow-xl border border-border p-8 transition-all duration-300 hover:-translate-y-1'>
                <div className='w-14 h-14 rounded-xl gradient-brand flex items-center justify-center mb-6'>
                  <Icon className='w-7 h-7 text-primary-foreground' />
                </div>
                <h3 className='text-xl font-bold text-card-foreground mb-3'>{program.title}</h3>
                <p className='text-muted-foreground text-sm leading-relaxed mb-5'>
                  {program.description}
                </p>
                <ul className='space-y-2'>
                  {program.features.map(f => (
                    <li key={f} className='flex items-center gap-2 text-sm text-muted-foreground'>
                      <Check className='w-4 h-4 text-brand-cyan flex-shrink-0' />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href='#EducationContact'
                  className='inline-block mt-6 text-sm font-semibold text-primary hover:underline'>
                  Learn More →
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgramsGrid;
