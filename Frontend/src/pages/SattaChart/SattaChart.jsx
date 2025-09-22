// src/components/SattaChart.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SattaChartBanner from './SattaChartBanner';

const SattaChart = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedGame, setSelectedGame] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  // Sample data - in a real app, this would come from an API
  const sampleResults = [
    { id: 1, date: '2023-10-15', game: 'Milan Day', number: 247, time: '01:15 PM' },
    { id: 2, date: '2023-10-15', game: 'Milan Night', number: 568, time: '11:45 PM' },
    { id: 3, date: '2023-10-14', game: 'Rajdhani Day', number: 389, time: '01:30 PM' },
    { id: 4, date: '2023-10-14', game: 'Rajdhani Night', number: 672, time: '11:50 PM' },
    { id: 5, date: '2023-10-13', game: 'Milan Day', number: 135, time: '01:10 PM' },
    { id: 6, date: '2023-10-13', game: 'Milan Night', number: 789, time: '11:40 PM' },
    { id: 7, date: '2023-10-12', game: 'Rajdhani Day', number: 456, time: '01:25 PM' },
    { id: 8, date: '2023-10-12', game: 'Rajdhani Night', number: 234, time: '11:55 PM' },
    { id: 9, date: '2023-10-11', game: 'Milan Day', number: 901, time: '01:05 PM' },
    { id: 10, date: '2023-10-11', game: 'Milan Night', number: 567, time: '11:35 PM' },
  ];

  useEffect(() => {
    // Simulate API loading
    const timer = setTimeout(() => {
      setResults(sampleResults);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Filter results
  const filteredResults = results.filter(result => {
    const matchesDate = selectedDate ? result.date === selectedDate : true;
    const matchesGame = selectedGame !== 'all' ? result.game === selectedGame : true;
    const matchesSearch = searchQuery
      ? result.number.toString().includes(searchQuery) ||
        result.game.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchesDate && matchesGame && matchesSearch;
  });


  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-50 to-gray-100">

     


      {/* Results Table */}
      <div className="w-full bg-white rounded-xl shadow-md overflow-x-auto mb-8">
        {loading ? (
          <div className="p-8 text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-600"></div>
            <p className="mt-2 text-gray-600">Loading results...</p>
          </div>
        ) : filteredResults.length > 0 ? (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Game</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Result</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredResults.map((result) => (
                <tr key={result.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{result.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{result.game}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full bg-amber-100 text-amber-800">{result.number}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{result.time}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-purple-600 hover:text-purple-900 mr-3">View Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="p-8 text-center text-gray-600">No results found</div>
        )}
      </div>

     

      {/* Banner Component */}
      <SattaChartBanner />
    </div>
  );
};

export default SattaChart;

