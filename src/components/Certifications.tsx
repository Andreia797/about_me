import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaCertificate } from 'react-icons/fa';
import { certifications } from '../data/certifications';

const Certifications = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          <span className="text-white">{t('certifications.title')} </span>
          <span className="text-gradient">{t('certifications.achievements')}</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-[#1a0a1a] border border-purple-900/30 rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300 shadow-lg flex items-start gap-4"
            >
              <div className="text-3xl text-purple-400 flex-shrink-0">
                <FaCertificate />
              </div>
              <div className="flex-1">
                <h3 className={`text-lg font-semibold mb-2 ${cert.link ? 'text-white hover:text-purple-400 transition-colors cursor-pointer' : 'text-white'}`}>
                  {cert.link ? (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {cert.title}
                    </a>
                  ) : (
                    cert.title
                  )}
                </h3>
                {cert.issuer && (
                  <p className="text-purple-400 text-sm mb-1">{cert.issuer}</p>
                )}
                {cert.year && (
                  <p className="text-gray-400 text-sm mb-2">{cert.year}</p>
                )}
                {cert.description && (
                  <p className="text-gray-300 text-sm mt-3 border-t border-purple-900/30 pt-3 leading-relaxed">
                    {cert.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;

