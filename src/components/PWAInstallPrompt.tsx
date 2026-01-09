import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDownload, FaTimes, FaMobileAlt } from 'react-icons/fa';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const PWAInstallPrompt = () => {
  const { t } = useTranslation();
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [showManualPrompt, setShowManualPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
      return;
    }

    // Detect device type
    const userAgent = navigator.userAgent.toLowerCase();
    setIsIOS(/iphone|ipad|ipod/.test(userAgent));
    setIsAndroid(/android/.test(userAgent));

    // Check if dismissed
    if (localStorage.getItem('pwa-install-dismissed') === 'true') {
      return;
    }

    const handler = (e: Event) => {
      e.preventDefault();
      const event = e as BeforeInstallPromptEvent;
      setDeferredPrompt(event);
      // Show prompt after a delay
      setTimeout(() => setShowPrompt(true), 3000);
    };

    window.addEventListener('beforeinstallprompt', handler);

    // Show manual prompt on mobile if no beforeinstallprompt
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
      setTimeout(() => {
        if (!deferredPrompt) {
          setShowManualPrompt(true);
        }
      }, 5000);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setIsInstalled(true);
    }
    
    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    setShowManualPrompt(false);
    localStorage.setItem('pwa-install-dismissed', 'true');
  };

  if (isInstalled) return null;

  return (
    <AnimatePresence>
      {/* Automatic prompt when beforeinstallprompt is supported */}
      {showPrompt && deferredPrompt && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 right-4 z-50 max-w-sm"
        >
          <div className="bg-[#1a0a1a] border border-purple-500/50 rounded-lg p-4 shadow-xl">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <FaDownload className="text-purple-400" />
                <h3 className="text-white font-semibold">{t('pwa.install')}</h3>
              </div>
              <button
                onClick={handleDismiss}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={t('common.close')}
              >
                <FaTimes />
              </button>
            </div>
            <p className="text-gray-300 text-sm mb-4">{t('pwa.installPrompt')}</p>
            <div className="flex gap-2">
              <motion.button
                onClick={handleInstall}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-lg text-sm font-semibold"
              >
                {t('pwa.install')}
              </motion.button>
              <motion.button
                onClick={handleDismiss}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg text-sm font-semibold hover:border-gray-500"
              >
                {t('common.close')}
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Manual prompt for mobile users (fallback) */}
      {showManualPrompt && !deferredPrompt && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 right-4 z-50 max-w-sm"
        >
          <div className="bg-[#1a0a1a] border border-purple-500/50 rounded-lg p-4 shadow-xl">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <FaMobileAlt className="text-purple-400" />
                <h3 className="text-white font-semibold">Adicionar à Tela de Início</h3>
              </div>
              <button
                onClick={handleDismiss}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={t('common.close')}
              >
                <FaTimes />
              </button>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              {isIOS 
                ? 'Toque em "Partilhar" e depois em "Adicionar à Tela de Início"'
                : 'Toque em "⋮" e selecione "Instalar aplicação"'}
            </p>
            <div className="flex gap-2">
              <motion.button
                onClick={handleDismiss}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-lg text-sm font-semibold"
              >
                OK
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PWAInstallPrompt;

