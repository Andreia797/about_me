import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaShieldAlt, FaLock, FaUserShield, FaEyeSlash } from 'react-icons/fa';

const SecurityTrust = () => {
  const { t } = useTranslation();

  const securityFeatures = [
    {
      icon: FaShieldAlt,
      title: t('security.owasp'),
      description: 'Aware of OWASP Top 10 vulnerabilities and best practices for secure application development.',
    },
    {
      icon: FaLock,
      title: t('security.secureCoding'),
      description: 'Follows secure coding principles, input validation, and defense-in-depth strategies.',
    },
    {
      icon: FaUserShield,
      title: t('security.dataProtection'),
      description: 'Committed to data protection, privacy by design, and GDPR compliance awareness.',
    },
    {
      icon: FaEyeSlash,
      title: t('security.privacyFirst'),
      description: 'Contact form uses no tracking, respects user privacy, and handles data securely.',
    },
  ];

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
    <section id="security" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0a0a] to-[#1a0a1a]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          <span className="text-white">{t('security.title')} </span>
          <span className="text-gradient">{t('security.trust')}</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-[#1a0a1a] border border-purple-900/30 rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300 shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl text-purple-400 flex-shrink-0">
                    <Icon />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SecurityTrust;



