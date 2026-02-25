import { motion } from 'framer-motion';
import { Globe, DollarSign, Trophy, Users } from 'lucide-react';

const stats = [
  { icon: Globe, value: '500+', label: 'Partner Universities' },
  { icon: DollarSign, value: 'Affordable', label: 'Tuition & Living' },
  { icon: Trophy, value: 'Top Ranked', label: 'Global Recognition' },
  { icon: Users, value: '10,000+', label: 'International Students Helped' },
];

const WhyChina = () => {
  return (
    <section className='py-20 bg-muted'>
      <div className='container mx-auto px-6 md:px-20 lg:px-32'>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-14'>
          <h2 className='text-4xl sm:text-5xl font-bold text-foreground mb-4'>
            Why Study in <span className='gradient-brand-text text-red-600'>China</span>?
          </h2>
          <p className='text-lg text-muted-foreground max-w-xl mx-auto'>
            China offers world-class education at an affordable cost with rich cultural experiences.
          </p>
        </motion.div>

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className='bg-card rounded-2xl p-6 text-center shadow-sm border border-border'>
                <div className='w-12 h-12 rounded-full gradient-brand flex items-center justify-center mx-auto mb-4'>
                  <Icon className='w-6 h-6 text-primary-foreground' />
                </div>
                <p className='text-2xl sm:text-3xl font-bold gradient-brand-text'>{stat.value}</p>
                <p className='text-sm text-muted-foreground mt-1'>{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChina;
