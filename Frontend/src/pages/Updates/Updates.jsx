import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Updates = () => {
  const [activeTab, setActiveTab] = useState('latest');
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  // Sample data
  const sampleUpdates = {
    latest: [
      {
        id: 1,
        title: 'Milan Day Result Declared',
        content: 'Today\'s Milan Day result is 247. declared at 1:15 PM.',
        time: '2 minutes ago',
        category: 'result',
        important: true
      },
      {
        id: 2,
        title: 'System Maintenance Notice',
        content: 'Scheduled maintenance on October 20th from 2:00 AM to 4:00 AM. Service may be temporarily unavailable.',
        time: '1 hour ago',
        category: 'maintenance',
        important: false
      },
      {
        id: 3,
        title: 'New Statistical Features Added',
        content: 'We\'ve added new trend analysis tools to the Statistics page. Check them out!',
        time: '3 hours ago',
        category: 'feature',
        important: false
      }
    ],
    yesterday: [
      {
        id: 4,
        title: 'Rajdhani Night Result',
        content: 'Yesterday\'s Rajdhani Night result was 672, declared at 11:50 PM.',
        time: 'Yesterday, 11:50 PM',
        category: 'result',
        important: true
      },
      {
        id: 5,
        title: 'Server Performance Improved',
        content: 'We\'ve optimized our servers for faster loading times and better reliability.',
        time: 'Yesterday, 5:30 PM',
        category: 'improvement',
        important: false
      }
    ],
    week: [
      {
        id: 6,
        title: 'Weekly Result Summary',
        content: 'Weekly analysis shows numbers between 200-300 appeared most frequently (38% of results).',
        time: 'October 15',
        category: 'analysis',
        important: true
      },
      {
        id: 7,
        title: 'Mobile App Update',
        content: 'New mobile app version 2.1.0 released with bug fixes and performance improvements.',
        time: 'October 14',
        category: 'update',
        important: false
      },
      {
        id: 8,
        title: 'New Game Type Added',
        content: 'We\'ve added historical data for Kalyan Matka to our database.',
        time: 'October 13',
        category: 'feature',
        important: true
      }
    ]
  };

  // Sample live results
  const liveResults = [
    { game: 'Milan Day', time: '01:15 PM', status: 'declared', number: 247 },
    { game: 'Milan Night', time: '11:45 PM', status: 'pending', number: '-' },
    { game: 'Rajdhani Day', time: '01:30 PM', status: 'declared', number: 389 },
    { game: 'Rajdhani Night', time: '11:50 PM', status: 'pending', number: '-' },
    { game: 'Kalyan Matka', time: '04:00 PM', status: 'declared', number: 560 }
  ];

  useEffect(() => {
    // Simulate API loading
    const timer = setTimeout(() => {
      setNotifications(sampleUpdates.latest);
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setNotifications(sampleUpdates[tab]);
  };

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'result':
        return (
          <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        );
      case 'maintenance':
        return (
          <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
        );
      case 'feature':
        return (
          <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        );
      case 'analysis':
        return (
          <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        );
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600"></div>
          <p className="mt-4 text-gray-600">Loading updates...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Latest Updates</h1>
          <p className="text-gray-600">Stay informed with the latest results, announcements, and news</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Updates Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="bg-white rounded-xl shadow-md p-4 mb-6">
              <div className="flex space-x-4 border-b border-gray-200">
                {['latest', 'yesterday', 'week'].map((tab) => (
                  <button
                    key={tab}
                    className={`px-4 py-2 font-medium text-sm rounded-t-lg transition-colors ${
                      activeTab === tab
                        ? 'text-purple-600 border-b-2 border-purple-600'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => handleTabChange(tab)}
                  >
                    {tab === 'latest' && 'Latest Updates'}
                    {tab === 'yesterday' && 'Yesterday'}
                    {tab === 'week' && 'This Week'}
                  </button>
                ))}
              </div>
            </div>

            {/* Updates List */}
            <div className="space-y-4">
              {notifications.map((update) => (
                <div
                  key={update.id}
                  className={`bg-white rounded-xl shadow-md p-6 transition-transform duration-200 hover:transform hover:scale-[1.01] ${
                    update.important ? 'border-l-4 border-amber-500' : ''
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {getCategoryIcon(update.category)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {update.title}
                          {update.important && (
                            <span className="ml-2 px-2 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded-full">
                              Important
                            </span>
                          )}
                        </h3>
                        <span className="text-sm text-gray-500">{update.time}</span>
                      </div>
                      <p className="mt-2 text-gray-600">{update.content}</p>
                      {update.category === 'result' && (
                        <div className="mt-3 flex items-center space-x-4">
                          <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                            Result Declared
                          </span>
                          <Link to="/history" className="text-purple-600 hover:text-purple-800 text-sm font-medium">
                            View History →
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            <div className="mt-8 text-center">
              <button className="px-6 py-3 bg-white text-purple-600 font-medium rounded-lg shadow-md hover:bg-gray-50 transition-colors border border-gray-200">
                Load More Updates
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Live Results Card */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                Live Results
              </h3>
              <div className="space-y-3">
                {liveResults.map((result, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <span className="font-medium text-gray-900">{result.game}</span>
                      <span className="block text-sm text-gray-500">{result.time}</span>
                    </div>
                    <div className="text-right">
                      {result.status === 'declared' ? (
                        <>
                          <span className="px-2 py-1 bg-green-100 text-green-800 text-sm font-medium rounded">
                            {result.number}
                          </span>
                          <span className="block text-xs text-green-600 mt-1">Declared</span>
                        </>
                      ) : (
                        <>
                          <span className="px-2 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded">
                            -
                          </span>
                          <span className="block text-xs text-gray-600 mt-1">Pending</span>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <Link
                  to="/history"
                  className="text-purple-600 hover:text-purple-800 font-medium flex items-center justify-center"
                >
                  View Complete Results History
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Subscribe Card */}
            <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-xl shadow-md p-6 text-white">
              <h3 className="text-lg font-semibold mb-3">Get Instant Updates</h3>
              <p className="text-purple-100 mb-4">
                Never miss a result. Subscribe to our notification service.
              </p>
              <div className="space-y-3">
                <button className="w-full bg-white text-purple-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors">
                  Enable Browser Notifications
                </button>
                <button className="w-full bg-transparent border border-white text-white font-medium py-2 px-4 rounded-lg hover:bg-white hover:text-purple-600 transition-colors">
                  Subscribe via Email
                </button>
              </div>
            </div>

            {/* Quick Stats Card */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Today's Results</span>
                  <span className="font-medium text-gray-900">3/5 declared</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Last Update</span>
                  <span className="font-medium text-gray-900">2 minutes ago</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Updates</span>
                  <span className="font-medium text-gray-900">48 this week</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <Link
                  to="/statistics"
                  className="text-purple-600 hover:text-purple-800 font-medium flex items-center justify-center"
                >
                  View Detailed Statistics
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Disclaimer */}
        <div className="mt-12 bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-semibold text-red-800 mb-2">Gambling Help Resources</h3>
              <p className="text-red-700 mb-3">
                If you or someone you know has a gambling problem, help is available. Contact these confidential helplines:
              </p>
              <ul className="list-disc list-inside text-red-700 space-y-1">
                <li>National Problem Gambling Helpline: 1-800-522-4700</li>
                <li>Gamblers Anonymous: www.gamblersanonymous.org</li>
                <li>National Council on Problem Gambling: www.ncpgambling.org</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updates;