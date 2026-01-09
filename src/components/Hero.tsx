import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { socialLinks } from '../data/social';

const Hero = () => {
  const { t } = useTranslation();
  
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV_Andreia_Semedo.pdf';
    link.download = 'CV_Andreia_Semedo.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const iconMap: { [key: string]: React.ComponentType<any> } = {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
  };

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
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          <span className="text-white">{t('hero.name').split(' ')[0]} </span>
          <span className="text-gradient">{t('hero.name').split(' ')[1]}</span>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8"
        >
          <p className="mb-2">{t('hero.title1')}</p>
          <p className="mb-2">{t('hero.title2')}</p>
          <p className="mb-2">{t('hero.title3')}</p>
          <p className="text-purple-400">{t('hero.title4')}</p>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          "{t('hero.intro')}"
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('#projects')}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-violet-700 transition-all duration-300 shadow-lg shadow-purple-500/50"
          >
            {t('hero.viewProjects')}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownloadCV}
            className="px-8 py-3 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300"
          >
            {t('hero.downloadCV')}
          </motion.button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6"
        >
          {socialLinks.map((social) => {
            const Icon = iconMap[social.icon];
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-2xl sm:text-3xl text-gray-400 hover:text-purple-400 transition-colors duration-300"
                aria-label={social.name}
              >
                {Icon && <Icon />}
              </motion.a>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

