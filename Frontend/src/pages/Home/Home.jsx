import React from 'react';
import { Link } from 'react-router-dom';
import BannerOne from './BannerOne';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Welcome to  Raaja Bhai <span className="text-purple-800">Satta</span> 
              <span className="text-amber-500">King</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-10">
              Your premier platform for Satta Matka results, statistics, and historical data analysis.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <Link 
                to="/history" 
                className="px-8 py-4 bg-gradient-to-r from-purple-700 to-indigo-800 text-white font-semibold rounded-lg shadow-lg hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                Explore History
              </Link>
              <Link 
                to="/statistics" 
                className="px-8 py-4 bg-amber-500 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-amber-400 transition-all duration-300 transform hover:-translate-y-1"
              >
                View Statistics
              </Link>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Historical Data</h3>
              <p className="text-gray-600">Access comprehensive historical records of Satta results with detailed analysis and trends.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Statistics</h3>
              <p className="text-gray-600">Get detailed statistical analysis and probability calculations to make informed decisions.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Updates</h3>
              <p className="text-gray-600">Receive the latest results and updates as they happen with our notification system.</p>
            </div>
          </div>

          {/* Disclaimer Section */}
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-12">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-semibold text-red-800 mb-2">Important Disclaimer</h3>
                <p className="text-red-700">
                  This platform is for informational and simulation purposes only. Gambling is illegal in many jurisdictions 
                  and can be addictive. We do not promote or encourage real-money gambling. Users must be 18+ to access this 
                  service. Please gamble responsibly and within your limits. If you believe you have a gambling problem, 
                  seek help from professional organizations.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white p-5 rounded-lg shadow-md">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">1</div>
                <h3 className="font-semibold text-lg mb-2">Explore History</h3>
                <p className="text-gray-600">Browse through historical results and patterns</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-md">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">2</div>
                <h3 className="font-semibold text-lg mb-2">Analyze Statistics</h3>
                <p className="text-gray-600">Study statistical trends and probabilities</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-md">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">3</div>
                <h3 className="font-semibold text-lg mb-2">Simulate Strategies</h3>
                <p className="text-gray-600">Test different approaches in a risk-free environment</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-md">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">4</div>
                <h3 className="font-semibold text-lg mb-2">Stay Updated</h3>
                <p className="text-gray-600">Get the latest information and results</p>
              </div>
            </div>

            {/* Final CTA */}
            <Link 
              to="/updates" 
              className="inline-block px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900 font-semibold rounded-lg shadow-lg hover:from-amber-400 hover:to-amber-500 transition-all duration-300 transform hover:-translate-y-1"
            >
              Get Latest Updates
            </Link>
          </div>
        </div>
      </section>
      <BannerOne/>
    </div>
  );
};

export default Home;