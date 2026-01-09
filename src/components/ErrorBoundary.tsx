import { motion } from 'framer-motion';
import { FaExclamationTriangle } from 'react-icons/fa';
import type { FallbackProps } from 'react-error-boundary';

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[#0a0a0a]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full text-center"
      >
        <FaExclamationTriangle className="text-6xl text-purple-400 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-white mb-4">Oops! Something went wrong</h1>
        <p className="text-gray-400 mb-6">
          {error?.message || 'An unexpected error occurred'}
        </p>
        <motion.button
          onClick={resetErrorBoundary}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-lg font-semibold"
        >
          Reload Page
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ErrorFallback;

