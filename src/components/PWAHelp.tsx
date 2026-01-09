import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuestionCircle, FaTimes, FaMobileAlt, FaChrome, FaApple } from 'react-icons/fa';

const PWAHelp = () => {
  const [showHelp, setShowHelp] = useState(false);

  const instructions = [
    {
      icon: <FaChrome className="w-8 h-8" />,
      title: 'Android Chrome',
      steps: ['Toque ⋮', 'Selecione "Instalar app"', 'Confirme a instalação']
    },
    {
      icon: <FaApple className="w-8 h-8" />,
      title: 'iPhone/iPad',
      steps: ['Toque em Partilhar ↗️', 'Selecione "Adicionar à Tela de Início"', 'Confirme']
    },
    {
      icon: <FaMobileAlt className="w-8 h-8" />,
      title: 'Desktop',
      steps: ['Clique no ícone de instalação', 'Ou use ⋮ > "Instalar"']
    }
  ];

  return (
    <>
      {/* Help Button */}
      <motion.button
        onClick={() => setShowHelp(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-4 left-4 z-40 p-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg transition-colors"
        title="Ajuda sobre PWA"
      >
        <FaQuestionCircle className="w-5 h-5" />
      </motion.button>

      {/* Help Modal */}
      <AnimatePresence>
        {showHelp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowHelp(false)}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#1a0a1a] border border-purple-500/50 rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Como instalar o PWA?</h2>
                <button
                  onClick={() => setShowHelp(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaTimes className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                {instructions.map((instruction, index) => (
                  <div key={index} className="border-l-4 border-purple-500 pl-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-purple-400">{instruction.icon}</div>
                      <h3 className="text-lg font-semibold text-white">{instruction.title}</h3>
                    </div>
                    <ol className="list-decimal list-inside space-y-2">
                      {instruction.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="text-gray-300 text-sm">
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-purple-500/20 border border-purple-500/50 rounded-lg">
                <p className="text-sm text-gray-300">
                  <strong>💡 Dica:</strong> O PWA permite usar o portfólio como um app nativo, com acesso rápido e experiência melhorada!
                </p>
              </div>

              <div className="mt-6 flex justify-end">
                <motion.button
                  onClick={() => setShowHelp(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-lg font-semibold"
                >
                  Fechado
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PWAHelp;
