import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../data/projects';

const Projects = () => {
  const { t } = useTranslation();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          <span className="text-white">{t('projects.title')} </span>
          <span className="text-gradient">{t('projects.projects')}</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-[#1a0a1a] border border-purple-900/30 rounded-lg overflow-hidden hover:border-purple-500/50 transition-all duration-300 shadow-lg"
            >
              <div className="h-48 bg-gradient-to-br from-purple-900/20 to-violet-900/20 flex items-center justify-center">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-6xl text-purple-500/30">
                    <FaExternalLinkAlt />
                  </div>
                )}
              </div>
              <div className="p-6">
                {project.type && (
                  <span className="inline-block px-3 py-1 bg-purple-900/30 text-purple-400 text-xs rounded-full mb-3">
                    {project.type === 'Final Degree Project' ? t('projects.finalDegreeProject') : project.type}
                  </span>
                )}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-purple-900/20 text-purple-300 text-xs rounded border border-purple-800/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <FaGithub />
                    <span>{t('projects.viewGitHub')}</span>
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

