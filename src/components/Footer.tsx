import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { socialLinks } from '../data/social';

const Footer = () => {
  const { t } = useTranslation();
  const iconMap: { [key: string]: React.ComponentType<any> } = {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
  };

  return (
    <footer className="border-t border-purple-900/30 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Andreia Semedo. {t('footer.rights')}
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social) => {
              const Icon = iconMap[social.icon];
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  aria-label={social.name}
                >
                  {Icon && <Icon />}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

