import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import Faq from './components/Faq';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Features from './components/Features';
import AboutUsPage from './pages/AboutUsPage';
import FeaturesPage from './pages/FeaturesPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import ContactUsPage from './pages/ContactUsPage';
import CareerPage from './pages/CareerPage';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      <Stats />
      <Faq />
    </>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white font-sans antialiased text-gray-900">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/careers" element={<CareerPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
