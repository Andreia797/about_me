import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { skills } from '../data/skills';
import { projects } from '../data/projects';

const SkillsIntelligence = () => {
  const { t } = useTranslation();
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  // Mock data for skill intelligence
  const getSkillIntelligence = (skillName: string) => {
    const relatedProjects = projects.filter(project => 
      project.tech.some(tech => tech.toLowerCase().includes(skillName.toLowerCase()) || 
      skillName.toLowerCase().includes(tech.toLowerCase()))
    );

    return {
      experience: Math.floor(Math.random() * 3) + 2, // 2-4 years
      relatedProjects: relatedProjects.length > 0 ? relatedProjects : projects.slice(0, 2),
      useCases: [
        `${skillName} for web development`,
        `${skillName} in testing frameworks`,
        `${skillName} for API integration`
      ]
    };
  };

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
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0a0a] to-[#1a0a1a]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          <span className="text-white">{t('skills.title')} </span>
          <span className="text-gradient">{t('skills.technologies')}</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((category, categoryIndex) => {
            const isHovered = hoveredCategory === categoryIndex;
            const intelligence = hoveredSkill ? getSkillIntelligence(hoveredSkill) : null;

            return (
              <motion.div
                key={categoryIndex}
                variants={cardVariants}
                onMouseEnter={() => setHoveredCategory(categoryIndex)}
                onMouseLeave={() => {
                  setHoveredCategory(null);
                  setHoveredSkill(null);
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-[#1a0a1a] border border-purple-900/30 rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300 shadow-lg relative"
              >
                <h3 className="text-xl font-semibold text-purple-400 mb-4">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => {
                    const isSkillHovered = hoveredSkill === skill;
                    return (
                      <motion.span
                        key={skillIndex}
                        onMouseEnter={() => setHoveredSkill(skill)}
                        whileHover={{ scale: 1.1 }}
                        className={`px-3 py-1 bg-purple-900/20 text-gray-300 rounded-full text-sm border transition-all duration-200 cursor-pointer ${
                          isSkillHovered
                            ? 'bg-purple-900/40 border-purple-500/50 text-purple-300'
                            : 'border-purple-800/30 hover:bg-purple-900/40 hover:border-purple-600/50'
                        }`}
                      >
                        {skill}
                      </motion.span>
                    );
                  })}
                </div>

                {/* Intelligence Panel */}
                <AnimatePresence>
                  {isHovered && intelligence && hoveredSkill && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 right-0 mt-2 bg-[#0a0a0a] border border-purple-500/50 rounded-lg p-4 shadow-xl z-20"
                    >
                      <h4 className="text-purple-400 font-semibold mb-3">{hoveredSkill}</h4>
                      <div className="space-y-2 text-sm">
                        <p className="text-gray-300">
                          <span className="text-purple-400">{t('skills.experience')}:</span> {intelligence.experience} {t('skills.experience')}
                        </p>
                        {intelligence.relatedProjects.length > 0 && (
                          <div>
                            <p className="text-purple-400 mb-1">{t('skills.relatedProjects')}:</p>
                            <ul className="list-disc list-inside text-gray-400 space-y-1">
                              {intelligence.relatedProjects.map((project, idx) => (
                                <li key={idx} className="text-xs">{t(project.title)}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        <div>
                          <p className="text-purple-400 mb-1">{t('skills.useCases')}:</p>
                          <ul className="list-disc list-inside text-gray-400 space-y-1">
                            {intelligence.useCases.slice(0, 2).map((useCase, idx) => (
                              <li key={idx} className="text-xs">{useCase}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsIntelligence;



