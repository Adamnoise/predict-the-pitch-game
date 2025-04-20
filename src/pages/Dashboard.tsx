
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { todayMatches, upcomingMatches, predictions } from '@/lib/data';
import MatchCard from '@/components/MatchCard';
import Header from '@/components/Header';
import MatchDetails from '@/components/MatchDetails';
import PredictionCard from '@/components/PredictionCard';
import TeamThemeSelector from '@/components/TeamThemeSelector';
import LeaderboardCard from '@/components/LeaderboardCard';
import RewardsCard from '@/components/RewardsCard';
import { Match, Prediction } from '@/types';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<'today' | 'upcoming'>('today');
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);
  const [selectedPrediction, setSelectedPrediction] = useState<Prediction | null>(null);
  const [favoriteTeam, setFavoriteTeam] = useState<string>('');
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    // Animáció késleltetése
    const timer = setTimeout(() => {
      setMounted(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
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
  
  const handleTeamSelect = (teamId: string) => {
    setFavoriteTeam(teamId);
    // Téma osztály hozzáadása a document.body-hoz
    document.body.classList.remove('team-theme-arsenal', 'team-theme-chelsea', 'team-theme-liverpool', 'team-theme-man-city');
    if (teamId) {
      document.body.classList.add(`team-theme-${teamId}`);
    }
  };

  const displayMatches = activeTab === 'today' ? todayMatches : upcomingMatches;
  
  return (
    <div className={`min-h-screen bg-background pb-16 ${favoriteTeam ? `team-theme-${favoriteTeam}` : ''}`}>
      <Header title="PLAY" />
      
      <div className="p-4">
        <div className={`mb-4 ${mounted ? 'fade-in' : 'opacity-0'}`} style={{ transitionDelay: '100ms' }}>
          <TeamThemeSelector onSelect={handleTeamSelect} currentTeam={favoriteTeam} />
        </div>
        
        <div className={`mb-6 flex rounded-full bg-secondary p-1 ${mounted ? 'fade-in' : 'opacity-0'}`} style={{ transitionDelay: '200ms' }}>
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
          {displayMatches.map((match, index) => (
            <div 
              key={match.id}
              className={`${mounted ? 'fade-in' : 'opacity-0'}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <MatchCard 
                match={match}
                onClick={() => handleMatchClick(match)}
              />
            </div>
          ))}
        </div>
        
        {activeTab === 'today' && (
          <>
            <div className={`mt-8 ${mounted ? 'fade-in' : 'opacity-0'}`} style={{ transitionDelay: '700ms' }}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Make Predictions</h2>
                <Link to="/predictions" className="text-sm text-primary">View all</Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {predictions.slice(0, 2).map((prediction, index) => (
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
            
            <div className={`mt-8 ${mounted ? 'fade-in' : 'opacity-0'}`} style={{ transitionDelay: '800ms' }}>
              <LeaderboardCard compact={true} />
            </div>
            
            <div className={`mt-8 ${mounted ? 'fade-in' : 'opacity-0'}`} style={{ transitionDelay: '900ms' }}>
              <RewardsCard />
            </div>
          </>
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
