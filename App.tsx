
import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PlatformPage from './pages/PlatformPage';
import TechnologyPage from './pages/TechnologyPage';
import ImpactPage from './pages/ImpactPage';
import SolutionsPage from './pages/SolutionsPage';
import DevelopersPage from './pages/DevelopersPage';
import ContactPage from './pages/ContactPage';
import OceanographyPage from './pages/OceanographyPage';
import FisheriesPage from './pages/FisheriesPage';
import BiodiversityPage from './pages/BiodiversityPage';
import ChatbotPage from './pages/ChatbotPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="bg-ocean-deep text-slate-light font-sans leading-relaxed">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/chatbot" element={<ChatbotPage />} />
            <Route path="/platform" element={<PlatformPage />} />
            <Route path="/technology" element={<TechnologyPage />} />
            <Route path="/impact" element={<ImpactPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/developers" element={<DevelopersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/oceanography" element={<OceanographyPage />} />
            <Route path="/fisheries" element={<FisheriesPage />} />
            <Route path="/biodiversity" element={<BiodiversityPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
