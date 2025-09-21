// src/App.jsx
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Loading from './Components/Loading';
import ErrorBoundary from './Components/ErrorBoundary';
import FloatingButtons from './Components/FloatingButtons';
import FloatingButtonsTelegram from './Components/FloatingButtonsTelegram';
import SattaChart from './pages/SattaChart/SattaChart';
import TajSattaKing from './pages/TajSattaKing/TajSattaKing';

// Lazy load pages with retry mechanism
const lazyWithRetry = (componentImport) => {
  return lazy(async () => {
    const pageHasAlreadyBeenForceRefreshed = JSON.parse(
      window.localStorage.getItem('page-has-been-force-refreshed') || 'false'
    );
    
    try {
      const component = await componentImport();
      window.localStorage.setItem('page-has-been-force-refreshed', 'false');
      return component;
    } catch (error) {
      if (!pageHasAlreadyBeenForceRefreshed) {
        window.localStorage.setItem('page-has-been-force-refreshed', 'true');
        return window.location.reload();
      }
      
      throw error;
    }
  });
};

// Lazy load pages
const Home = lazyWithRetry(() => import('./pages/Home/Home'));
const History = lazyWithRetry(() => import('./pages/SattaChart/SattaChart'));
const Statistics = lazyWithRetry(() => import('./pages/TajSattaKing/TajSattaKing'));
const About = lazyWithRetry(() => import('./pages/About/About'));
const Updates = lazyWithRetry(() => import('./pages/Updates/Updates'));

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow container mx-auto p-4 pt-20">
          <ErrorBoundary>
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/SattaChart" element={<SattaChart />} />
                <Route path="/TajSattaKing" element={<TajSattaKing />} />
                <Route path="/about" element={<About />} />
                <Route path="/updates" element={<Updates />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </main>
        <FloatingButtonsTelegram/>
        <FloatingButtons/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;