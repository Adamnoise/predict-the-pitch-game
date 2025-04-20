
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { X, Users, Info } from 'lucide-react';
import { Prediction } from '@/types';
import { toast } from 'sonner';

interface PredictionCardProps {
  prediction: Prediction;
  onClose: () => void;
}

const PredictionCard = ({ prediction, onClose }: PredictionCardProps) => {
  const [homeScore, setHomeScore] = useState(2);
  const [awayScore, setAwayScore] = useState(2);

  const handleSubmit = () => {
    toast.success('Prediction submitted!', {
      description: `You predicted ${homeScore}-${awayScore}`,
    });
    onClose();
  };

  // Calculate remaining time
  const deadline = new Date(prediction.deadline);
  const now = new Date();
  const timeRemaining = Math.max(0, Math.floor((deadline.getTime() - now.getTime()) / 1000));
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm overflow-auto flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gradient-to-br from-red-600 to-blue-600 rounded-3xl overflow-hidden">
        <div className="p-6 pt-10 relative">
          <button 
            onClick={onClose}
            className="absolute top-4 left-4 bg-black/30 rounded-full p-1"
          >
            <X className="w-5 h-5 text-white" />
          </button>
          
          <button className="absolute top-4 right-4 bg-black/30 rounded-full p-1">
            <Info className="w-5 h-5 text-white" />
          </button>
          
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white uppercase">{prediction.question}</h3>
          </div>
          
          <div className="flex justify-between items-center mb-8">
            <div className="text-center">
              <p className="text-sm text-white/70 mb-1">to win</p>
              <div className="flex items-center">
                <div className="bg-blue-500 h-6 w-6 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">⭐</span>
                </div>
                <span className="text-white text-3xl font-bold ml-2">{prediction.points} PTS</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-white/70 mb-1">since last pick</p>
              <span className="text-white text-xl">+ 200 PTS</span>
            </div>
          </div>
          
          <div className="flex justify-center items-center gap-8 mb-10">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-white/90 rounded-xl flex flex-col relative items-center justify-center mb-2">
                <button 
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white/20 rounded-full p-1"
                  onClick={() => setHomeScore(Math.min(9, homeScore + 1))}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="white" strokeWidth="2" fill="none">
                    <path d="M18 15l-6-6-6 6"/>
                  </svg>
                </button>
                <span className="text-6xl font-bold text-red-600">{homeScore}</span>
                <button 
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 rounded-full p-1"
                  onClick={() => setHomeScore(Math.max(0, homeScore - 1))}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="white" strokeWidth="2" fill="none">
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="text-white text-2xl font-bold">:</div>
            
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-white/90 rounded-xl flex flex-col relative items-center justify-center mb-2">
                <button 
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white/20 rounded-full p-1"
                  onClick={() => setAwayScore(Math.min(9, awayScore + 1))}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="white" strokeWidth="2" fill="none">
                    <path d="M18 15l-6-6-6 6"/>
                  </svg>
                </button>
                <span className="text-6xl font-bold text-blue-600">{awayScore}</span>
                <button 
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 rounded-full p-1"
                  onClick={() => setAwayScore(Math.max(0, awayScore - 1))}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="white" strokeWidth="2" fill="none">
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          <div className="mb-4 flex justify-center">
            <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-full">
              <Users size={16} className="text-white/70" />
              <span className="text-white/70 text-sm">{prediction.participants} participants</span>
            </div>
          </div>
        </div>
        
        <div className="p-4 bg-black/20 flex justify-center">
          <Button 
            onClick={handleSubmit}
            className="bg-blue-600 hover:bg-blue-700 text-white w-full py-6 rounded-xl text-lg font-semibold"
          >
            Submit your pick
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PredictionCard;
