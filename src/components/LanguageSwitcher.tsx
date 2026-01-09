import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
    
    // Update HTML lang attribute
    document.documentElement.lang = newLang;
  };

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <motion.button
      onClick={toggleLanguage}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-purple-900/20 border border-purple-800/30 hover:border-purple-500/50 transition-all duration-300 text-sm font-medium"
      aria-label="Switch language"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={i18n.language}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="flex items-center gap-1"
        >
          {i18n.language === 'pt' ? '🇵🇹 PT' : '🇬🇧 EN'}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
};

export default LanguageSwitcher;

