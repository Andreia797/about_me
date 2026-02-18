import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { experiences } from '../data/experience';

type FilterType = 'all' | 'development' | 'testing' | 'cybersecurity';

const InteractiveTimeline = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredExperiences = filter === 'all'
    ? experiences
    : experiences.filter(exp => exp.category === filter);

  const filters: FilterType[] = ['all', 'development', 'testing', 'cybersecurity'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0a0a] to-[#1a0a1a]">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center"
        >
          <span className="text-white">{t('experience.professional')} </span>
          <span className="text-gradient">{t('experience.title')}</span>
        </motion.h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filterType) => (
            <motion.button
              key={filterType}
              onClick={() => setFilter(filterType)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${filter === filterType
                  ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-lg shadow-purple-500/50'
                  : 'bg-[#1a0a1a] border border-purple-900/30 text-gray-300 hover:border-purple-500/50'
                }`}
            >
              {t(`experience.filter.${filterType}`)}
            </motion.button>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-violet-500 to-purple-500 transform md:-translate-x-1/2"></div>

          <AnimatePresence mode="wait">
            {filteredExperiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, x: -30 }}
                className="relative mb-8 md:flex md:items-center"
              >
                {/* Timeline dot */}
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  className="absolute left-4 md:left-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-[#0a0a0a] transform md:-translate-x-1/2 z-10 shadow-lg shadow-purple-500/50"
                ></motion.div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:ml-auto md:pl-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-[#1a0a1a] border border-purple-900/30 rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300 shadow-lg"
                  >
                    <h3 className="text-xl font-semibold text-purple-400 mb-2">
                      {t(exp.title)}
                    </h3>
                    {exp.company && (
                      <p className="text-gray-300 mb-2">{t(exp.company)}</p>
                    )}
                    <p className="text-gray-400 text-sm mb-2">{t(exp.location)}</p>
                    <p className="text-purple-300 text-sm font-medium mb-3">
                      {t(exp.period)}
                    </p>
                    {exp.description && (
                      <p className="text-gray-400 text-sm">{t(exp.description)}</p>
                    )}
                    <span className="inline-block mt-3 px-3 py-1 bg-purple-900/30 text-purple-400 text-xs rounded-full border border-purple-800/30">
                      {t(`experience.filter.${exp.category}`)}
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveTimeline;



