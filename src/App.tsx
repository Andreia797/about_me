import { lazy, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AboutWithMode from './components/AboutWithMode';
import SkillsIntelligence from './components/SkillsIntelligence';
import Projects from './components/Projects';
import InteractiveTimeline from './components/InteractiveTimeline';
import Certifications from './components/Certifications';
import GitHubIntegration from './components/GitHubIntegration';
import SecurityTrust from './components/SecurityTrust';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RecruiterModeProvider from './components/RecruiterMode';
import { RecruiterModeToggle } from './components/RecruiterMode';
import PWAInstallPrompt from './components/PWAInstallPrompt';
import ErrorFallback from './components/ErrorBoundary';
import { useLanguage } from './hooks/useLanguage';

// Lazy load heavy components
const LazyGitHubIntegration = lazy(() => Promise.resolve({ default: GitHubIntegration }));

function AppContent() {
  useLanguage();
  
  return (
    <div className="min-h-screen">
      <Navigation />
      <RecruiterModeToggle />
      <PWAInstallPrompt />
      <Hero />
      <AboutWithMode />
      <SkillsIntelligence />
      <Projects />
      <InteractiveTimeline />
      <Certifications />
      <Suspense fallback={<div className="py-20 text-center text-gray-400">Loading GitHub data...</div>}>
        <LazyGitHubIntegration />
      </Suspense>
      <SecurityTrust />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <RecruiterModeProvider>
        <AppContent />
      </RecruiterModeProvider>
    </ErrorBoundary>
  );
}

export default App;
