
import { Award, Gift, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

interface Reward {
  id: string;
  title: string;
  description: string;
  points: number;
  image: string;
}

const REWARDS: Reward[] = [
  {
    id: '1',
    title: 'VIP meccs élmény',
    description: 'Nézd élőben a kedvenc csapatod egy VIP páholyból!',
    points: 10000,
    image: '/placeholder.svg'
  },
  {
    id: '2',
    title: 'Mez kreditek',
    description: 'Vásárolj hivatalos mezt 50% kedvezménnyel',
    points: 5000,
    image: '/placeholder.svg'
  },
  {
    id: '3',
    title: 'Prémium tippjegyek',
    description: 'Nyerj 5 prémium tippjegyet a következő körre',
    points: 1500,
    image: '/placeholder.svg'
  }
];

const RewardsCard = () => {
  const [userPoints, setUserPoints] = useState(2750);
  
  const handleClaimReward = (reward: Reward) => {
    if (userPoints >= reward.points) {
      toast.success(`Jutalom beváltva: ${reward.title}`, {
        description: 'Ellenőrizd az e-mail fiókod a további részletekért.'
      });
      setUserPoints(prev => prev - reward.points);
    } else {
      toast.error('Nincs elég pontod', {
        description: `Még ${reward.points - userPoints} pontra van szükséged.`
      });
    }
  };
  
  return (
    <div className="glass rounded-xl p-4 animate-scale-in">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Award size={20} className="text-yellow-500" />
          <h3 className="font-bold">Jutalmak</h3>
        </div>
        <div className="py-1 px-3 bg-secondary rounded-full">
          <span className="font-bold">{userPoints} P</span>
        </div>
      </div>
      
      <div className="space-y-3">
        {REWARDS.map(reward => (
          <div 
            key={reward.id}
            className="clay p-3 rounded-xl flex items-center gap-3 hover:bg-secondary/30 transition-colors"
          >
            <div className="w-12 h-12 rounded-lg overflow-hidden bg-primary/20 flex-shrink-0">
              <img src={reward.image} alt={reward.title} className="w-full h-full object-cover" />
            </div>
            
            <div className="flex-1">
              <h4 className="font-semibold">{reward.title}</h4>
              <p className="text-sm text-gray-400 line-clamp-1">{reward.description}</p>
            </div>
            
            <div className="flex flex-col items-end">
              <div className="mb-1 text-sm font-semibold">
                {reward.points} P
              </div>
              <button 
                className={`text-xs py-1 px-3 rounded-full ${
                  userPoints >= reward.points 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-700 text-gray-400'
                }`}
                onClick={() => handleClaimReward(reward)}
              >
                {userPoints >= reward.points ? 'Beváltás' : 'Kevés pont'}
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-3 py-2 bg-white/5 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-center">
        <span>Összes jutalom megtekintése</span>
        <ChevronRight size={16} className="ml-1" />
      </button>
    </div>
  );
};

export default RewardsCard;
