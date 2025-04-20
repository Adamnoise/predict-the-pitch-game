
import { useState } from 'react';
import { predictions } from '@/lib/data';
import Header from '@/components/Header';
import PredictionCard from '@/components/PredictionCard';
import { Prediction } from '@/types';

const PredictionsPage = () => {
  const [selectedPrediction, setSelectedPrediction] = useState<Prediction | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'live' | 'upcoming'>('all');
  
  const handlePredictionClick = (prediction: Prediction) => {
    setSelectedPrediction(prediction);
  };
  
  const handleClosePrediction = () => {
    setSelectedPrediction(null);
  };
  
  // Filter predictions based on tab (just for demo, in reality this would use real data)
  const filteredPredictions = 
    activeTab === 'all' ? predictions :
    activeTab === 'live' ? predictions.slice(0, 2) :
    activeTab === 'upcoming' ? predictions.slice(1, 3) :
    predictions;
  
  return (
    <div className="min-h-screen bg-background pb-16">
      <Header title="PREDICTIONS" />
      
      <div className="p-4">
        <div className="mb-6 flex rounded-full bg-secondary p-1">
          <button
            className={`flex-1 py-2 rounded-full font-medium text-sm transition-colors ${
              activeTab === 'all' ? 'bg-primary text-white' : 'text-gray-400'
            }`}
            onClick={() => setActiveTab('all')}
          >
            All
          </button>
          <button
            className={`flex-1 py-2 rounded-full font-medium text-sm transition-colors ${
              activeTab === 'live' ? 'bg-primary text-white' : 'text-gray-400'
            }`}
            onClick={() => setActiveTab('live')}
          >
            Live
          </button>
          <button
            className={`flex-1 py-2 rounded-full font-medium text-sm transition-colors ${
              activeTab === 'upcoming' ? 'bg-primary text-white' : 'text-gray-400'
            }`}
            onClick={() => setActiveTab('upcoming')}
          >
            Upcoming
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredPredictions.map(prediction => (
            <div 
              key={prediction.id}
              onClick={() => handlePredictionClick(prediction)}
              className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl overflow-hidden shadow-lg transform transition-transform hover:scale-105 cursor-pointer"
            >
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">{prediction.question}</h3>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-white/70 text-xs">to win</span>
                    <div className="flex items-center">
                      <div className="bg-blue-500 h-5 w-5 rounded-full flex items-center justify-center mr-1">
                        <span className="text-white text-xs">⭐</span>
                      </div>
                      <span className="text-white font-bold">{prediction.points} PTS</span>
                    </div>
                  </div>
                  <span className="text-sm text-white/80">{prediction.participants} players</span>
                </div>
              </div>
              <div className="bg-black/30 py-3 px-6">
                <div className="flex justify-between items-center">
                  <span className="text-white/70 text-sm">Time left: 5:42</span>
                  <span className="text-white/70 text-sm">Ends: 9:30 PM</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {selectedPrediction && (
        <PredictionCard 
          prediction={selectedPrediction}
          onClose={handleClosePrediction}
        />
      )}
    </div>
  );
};

export default PredictionsPage;
