
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { todayMatches, upcomingMatches, predictions } from '@/lib/data';
import MatchCard from '@/components/MatchCard';
import Header from '@/components/Header';
import MatchDetails from '@/components/MatchDetails';
import PredictionCard from '@/components/PredictionCard';
import { Match, Prediction } from '@/types';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<'today' | 'upcoming'>('today');
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);
  const [selectedPrediction, setSelectedPrediction] = useState<Prediction | null>(null);
  
  const handleMatchClick = (match: Match) => {
    setSelectedMatch(match);
  };
  
  const handlePredictionClick = (prediction: Prediction) => {
    setSelectedPrediction(prediction);
  };

  const handleClosePrediction = () => {
    setSelectedPrediction(null);
  };

  const handleCloseMatchDetails = () => {
    setSelectedMatch(null);
  };

  const displayMatches = activeTab === 'today' ? todayMatches : upcomingMatches;
  
  return (
    <div className="min-h-screen bg-background pb-16">
      <Header title="PLAY" />
      
      <div className="p-4">
        <div className="mb-6 flex rounded-full bg-secondary p-1">
          <button
            className={`flex-1 py-3 rounded-full font-semibold transition-colors ${
              activeTab === 'today' ? 'bg-primary text-white' : 'text-gray-400'
            }`}
            onClick={() => setActiveTab('today')}
          >
            Today
          </button>
          <button
            className={`flex-1 py-3 rounded-full font-semibold transition-colors ${
              activeTab === 'upcoming' ? 'bg-primary text-white' : 'text-gray-400'
            }`}
            onClick={() => setActiveTab('upcoming')}
          >
            Upcoming
          </button>
        </div>
        
        <div className="space-y-6">
          {displayMatches.map((match) => (
            <MatchCard 
              key={match.id} 
              match={match}
              onClick={() => handleMatchClick(match)}
            />
          ))}
        </div>
        
        {activeTab === 'today' && (
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Make Predictions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {predictions.map(prediction => (
                <div 
                  key={prediction.id}
                  onClick={() => handlePredictionClick(prediction)}
                  className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-6 cursor-pointer transform transition-transform hover:scale-105"
                >
                  <h3 className="text-lg font-bold text-white mb-2">{prediction.question}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white/80">{prediction.points} pts</span>
                    <span className="text-sm text-white/80">{prediction.participants} players</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {selectedMatch && (
        <MatchDetails 
          match={selectedMatch}
          onClose={handleCloseMatchDetails}
        />
      )}
      
      {selectedPrediction && (
        <PredictionCard 
          prediction={selectedPrediction}
          onClose={handleClosePrediction}
        />
      )}
    </div>
  );
};

export default Dashboard;
