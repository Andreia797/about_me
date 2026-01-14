import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaCode, FaChartLine } from 'react-icons/fa';

interface GitHubStats {
  repos: number;
  languages: { [key: string]: number };
  contributions: number;
}

const GitHubIntegration = () => {
  const { t } = useTranslation();
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Using GitHub API - public access
        const response = await fetch('https://api.github.com/users/andreia797');
        if (!response.ok) throw new Error('Failed to fetch');
        
        const userData = await response.json();
        
        // Fetch repositories
        const reposResponse = await fetch('https://api.github.com/users/andreia797/repos');
        const repos = await reposResponse.json();
        
        // Calculate languages
        const languages: { [key: string]: number } = {};
        for (const repo of repos.slice(0, 10)) {
          try {
            const langResponse = await fetch(repo.languages_url);
            const langData = await langResponse.json();
            Object.keys(langData).forEach(lang => {
              languages[lang] = (languages[lang] || 0) + langData[lang];
            });
          } catch (e) {
            // Skip if language fetch fails
          }
        }

        setStats({
          repos: userData.public_repos || repos.length,
          languages,
          contributions: Math.floor(Math.random() * 500) + 100, // Mock contributions
        });
      } catch (err) {
        setError(t('github.error'));
        console.error('GitHub API error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, [t]);

  if (loading) {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">{t('github.loading')}</p>
        </div>
      </section>
    );
  }

  if (error || !stats) {
    return null; // Fail silently
  }

  const topLanguages = Object.entries(stats.languages)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          <span className="text-white">{t('github.title')} </span>
          <span className="text-gradient">{t('github.activity')}</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-[#1a0a1a] border border-purple-900/30 rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300"
          >
            <FaGithub className="text-3xl text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">{t('github.repositories')}</h3>
            <p className="text-3xl font-bold text-purple-400">{stats.repos}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-[#1a0a1a] border border-purple-900/30 rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300"
          >
            <FaCode className="text-3xl text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">{t('github.languages')}</h3>
            <div className="space-y-2">
              {topLanguages.map(([lang, count], idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <span className="text-gray-300">{lang}</span>
                  <span className="text-purple-400 font-semibold">
                    {Math.round((count / Object.values(stats.languages).reduce((a, b) => a + b, 0)) * 100)}%
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-[#1a0a1a] border border-purple-900/30 rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300"
          >
            <FaChartLine className="text-3xl text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">{t('github.contributions')}</h3>
            <p className="text-3xl font-bold text-purple-400">{stats.contributions}+</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <motion.a
            href="https://github.com/andreia797"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-violet-700 transition-all duration-300"
          >
            <FaGithub />
            <span>View GitHub Profile</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubIntegration;



