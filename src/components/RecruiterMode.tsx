import { useState, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaBriefcase, FaTimes } from 'react-icons/fa';

interface RecruiterContextType {
  isRecruiterMode: boolean;
  toggleRecruiterMode: () => void;
}

const RecruiterContext = createContext<RecruiterContextType | undefined>(undefined);

export const useRecruiterMode = () => {
  const context = useContext(RecruiterContext);
  if (!context) {
    throw new Error('useRecruiterMode must be used within RecruiterModeProvider');
  }
  return context;
};

export const RecruiterModeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isRecruiterMode, setIsRecruiterMode] = useState(false);

  const toggleRecruiterMode = () => {
    setIsRecruiterMode(!isRecruiterMode);
  };

  return (
    <RecruiterContext.Provider value={{ isRecruiterMode, toggleRecruiterMode }}>
      {children}
    </RecruiterContext.Provider>
  );
};

export const RecruiterModeToggle = () => {
  const { t } = useTranslation();
  const { isRecruiterMode, toggleRecruiterMode } = useRecruiterMode();

  return (
    <>
      <motion.button
        onClick={toggleRecruiterMode}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`fixed top-20 right-4 z-40 flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
          isRecruiterMode
            ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-lg shadow-purple-500/50'
            : 'bg-[#1a0a1a] border border-purple-500/50 text-purple-400 hover:bg-purple-900/20'
        }`}
      >
        <FaBriefcase />
        <span className="hidden sm:inline">
          {isRecruiterMode ? t('recruiter.deactivate') : t('recruiter.activate')}
        </span>
      </motion.button>

      <AnimatePresence>
        {isRecruiterMode && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 right-4 z-40 bg-[#1a0a1a] border border-purple-500/50 rounded-lg p-6 shadow-xl max-w-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-purple-400">{t('recruiter.summary')}</h3>
              <button
                onClick={toggleRecruiterMode}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTimes />
              </button>
            </div>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-purple-400 font-medium">{t('recruiter.roleFocus')}</p>
                <p className="text-gray-300">Software Testing, Development, Cybersecurity</p>
              </div>
              <div>
                <p className="text-purple-400 font-medium">{t('recruiter.techStack')}</p>
                <p className="text-gray-300">Python, Java, JavaScript, React, Django, Selenium</p>
              </div>
              <div>
                <p className="text-purple-400 font-medium">{t('recruiter.location')}</p>
                <p className="text-gray-300">Santiago, Cabo Verde</p>
              </div>
              <div>
                <p className="text-purple-400 font-medium">{t('recruiter.remoteAvailable')}</p>
                <p className="text-gray-300">{t('recruiter.yes')}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default RecruiterModeProvider;

