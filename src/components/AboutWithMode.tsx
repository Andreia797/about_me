import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaRobot, FaUser } from 'react-icons/fa';

const AboutWithMode = () => {
  const { t } = useTranslation();
  const [isAIMode, setIsAIMode] = useState(false);

  const humanContent = {
    paragraph1: t('about.paragraph1'),
    paragraph2: t('about.paragraph2'),
    paragraph3: t('about.paragraph3'),
    paragraph4: t('about.paragraph4'),
  };

  const aiContent = {
    paragraph1: t('about.aiParagraph1'),
    paragraph2: t('about.aiParagraph2'),
    paragraph3: t('about.aiParagraph3'),
    paragraph4: t('about.aiParagraph4'),
  };

  const content = isAIMode ? aiContent : humanContent;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex items-center justify-between mb-8">
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-bold"
            >
              <span className="text-white">{t('about.title')} </span>
              <span className="text-gradient">{t('about.me')}</span>
            </motion.h2>

            {/* Mode Toggle */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 bg-[#1a0a1a] border border-purple-900/30 rounded-lg p-2"
            >
              <motion.button
                onClick={() => setIsAIMode(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  !isAIMode
                    ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <FaUser />
                <span className="text-sm font-medium">{t('about.humanMode')}</span>
              </motion.button>
              <motion.button
                onClick={() => setIsAIMode(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  isAIMode
                    ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <FaRobot />
                <span className="text-sm font-medium">{t('about.aiMode')}</span>
              </motion.button>
            </motion.div>
          </div>

          <motion.p
            variants={itemVariants}
            className="text-sm text-purple-400 mb-6 text-center"
          >
            {isAIMode ? t('about.aiModeDescription') : t('about.humanModeDescription')}
          </motion.p>

          <AnimatePresence mode="wait">
            <motion.div
              key={isAIMode ? 'ai' : 'human'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6 text-lg text-gray-300 leading-relaxed"
            >
              <p>{content.paragraph1}</p>
              <p>{content.paragraph2}</p>
              <p>{content.paragraph3}</p>
              <p className="pt-4 border-t border-gray-800">{content.paragraph4}</p>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutWithMode;

