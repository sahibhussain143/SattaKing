import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Statistics = () => {
  const [timeRange, setTimeRange] = useState('7days');
  const [selectedGame, setSelectedGame] = useState('all');
  const [statsData, setStatsData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sample statistics data
  const sampleStats = {
    overall: {
      totalGames: 1247,
      mostFrequentNumber: 247,
      leastFrequentNumber: 899,
      averageResult: 456.3,
      hotNumbers: [247, 135, 568, 389, 672],
      coldNumbers: [899, 911, 788, 655, 422],
      frequencyByDay: {
        Monday: 184,
        Tuesday: 176,
        Wednesday: 192,
        Thursday: 168,
        Friday: 205,
        Saturday: 156,
        Sunday: 166
      }
    },
    byGame: {
      'Milan Day': {
        total: 523,
        mostFrequent: 135,
        average: 432.1,
        last5: [247, 135, 789, 901, 567]
      },
      'Milan Night': {
        total: 512,
        mostFrequent: 568,
        average: 478.6,
        last5: [568, 789, 567, 247, 135]
      },
      'Rajdhani Day': {
        total: 108,
        mostFrequent: 389,
        average: 412.3,
        last5: [389, 456, 672, 234, 901]
      },
      'Rajdhani Night': {
        total: 104,
        mostFrequent: 672,
        average: 467.8,
        last5: [672, 234, 389, 456, 789]
      }
    },
    trends: {
      labels: ['Oct 9', 'Oct 10', 'Oct 11', 'Oct 12', 'Oct 13', 'Oct 14', 'Oct 15'],
      data: [456, 389, 567, 234, 789, 672, 247]
    }
  };

  useEffect(() => {
    // Simulate API loading
    const timer = setTimeout(() => {
      setStatsData(sampleStats);
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  // Get unique games for filter dropdown
  const games = ['all', ...Object.keys(sampleStats.byGame)];

  // Function to render a bar chart
  const renderBarChart = (data, color = 'purple') => {
    const maxValue = Math.max(...data);
    return (
      <div className="flex items-end h-40 gap-1 mt-4">
        {data.map((value, index) => (
          <div key={index} className="flex flex-col items-center flex-1">
            <div
              className={`w-full bg-${color}-500 rounded-t transition-all duration-500`}
              style={{ height: `${(value / maxValue) * 100}%` }}
            ></div>
            <div className="text-xs text-gray-500 mt-1 truncate w-full text-center">
              {sampleStats.trends.labels[index]}
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Function to render frequency chart
  const renderFrequencyChart = (numbers, title, color = 'purple') => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <h4 className="font-medium text-gray-700 mb-3">{title}</h4>
        <div className="flex flex-wrap gap-2">
          {numbers.map((number, index) => (
            <span
              key={index}
              className={`px-3 py-1.5 rounded-full text-sm font-medium bg-${color}-100 text-${color}-800`}
            >
              {number}
            </span>
          ))}
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600"></div>
          <p className="mt-4 text-gray-600">Loading statistics...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Advanced Statistics</h1>
          <p className="text-gray-600">Analyze patterns, trends, and probabilities</p>
        </div>

        {/* Filters Section */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Time Range</label>
              <select 
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
              >
                <option value="7days">Last 7 Days</option>
                <option value="30days">Last 30 Days</option>
                <option value="90days">Last 90 Days</option>
                <option value="all">All Time</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Game Type</label>
              <select 
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                value={selectedGame}
                onChange={(e) => setSelectedGame(e.target.value)}
              >
                {games.map(game => (
                  <option key={game} value={game}>
                    {game === 'all' ? 'All Games' : game}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="flex items-end">
              <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-md transition-colors">
                Export Data
              </button>
            </div>
          </div>
        </div>

        {/* Stats Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-purple-100 p-3 rounded-lg">
                <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">Total Games Analyzed</h3>
                <p className="text-2xl font-semibold text-gray-900">{statsData.overall.totalGames}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-amber-100 p-3 rounded-lg">
                <svg className="h-6 w-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">Most Frequent Number</h3>
                <p className="text-2xl font-semibold text-gray-900">{statsData.overall.mostFrequentNumber}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">Average Result</h3>
                <p className="text-2xl font-semibold text-gray-900">{statsData.overall.averageResult}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-red-100 p-3 rounded-lg">
                <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"></path>
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">Least Frequent Number</h3>
                <p className="text-2xl font-semibold text-gray-900">{statsData.overall.leastFrequentNumber}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Charts and Visualizations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Trends Chart */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Result Trends (Last 7 Days)</h3>
            {renderBarChart(statsData.trends.data, 'purple')}
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm text-gray-500">Lower numbers</span>
              <span className="text-sm text-gray-500">Higher numbers</span>
            </div>
          </div>

          {/* Frequency by Day */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Frequency by Day of Week</h3>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {Object.entries(statsData.overall.frequencyByDay).map(([day, count]) => (
                <div key={day} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-700">{day}</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                    {count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hot and Cold Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {renderFrequencyChart(statsData.overall.hotNumbers, '🔥 Hot Numbers (Most Frequent)', 'red')}
          {renderFrequencyChart(statsData.overall.coldNumbers, '❄️ Cold Numbers (Least Frequent)', 'blue')}
        </div>

        {/* Game-specific Statistics */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-6">Statistics by Game Type</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Game Type
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total Games
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Most Frequent
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Average
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last 5 Results
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {Object.entries(statsData.byGame).map(([game, data]) => (
                  <tr key={game}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {game}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {data.total}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-medium">
                        {data.mostFrequent}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {data.average}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex gap-1">
                        {data.last5.map((num, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                            {num}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Probability Analysis */}
        <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
          <h3 className="text-lg font-semibold text-purple-800 mb-2">Probability Analysis</h3>
          <p className="text-purple-700 mb-4">
            Based on historical data analysis, numbers ending with 7 have appeared 23% more frequently than average
            in the last 30 days. However, remember that past results do not guarantee future outcomes.
          </p>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium text-gray-700 mb-2">Top Number Patterns</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Numbers between 200-300: 18% frequency</li>
              <li>Even numbers: 52% occurrence rate</li>
              <li>Numbers ending with 5 or 0: 12% frequency</li>
              <li>Prime numbers: 28% occurrence rate</li>
            </ul>
          </div>
          <div className="mt-4 text-sm text-purple-600">
            <Link to="/history" className="flex items-center font-medium">
              View detailed historical data
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-semibold text-red-800 mb-2">Statistical Disclaimer</h3>
              <p className="text-red-700">
                All statistical analysis provided is based on historical data and mathematical probability.
                These analyses do not guarantee future results. Gambling involves significant risk and should
                be approached responsibly. Never gamble more than you can afford to lose.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;