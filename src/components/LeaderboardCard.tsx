
import { useState } from 'react';
import { Trophy, ChevronDown, ChevronUp, Users } from 'lucide-react';

interface LeaderboardUser {
  id: string;
  name: string;
  avatar: string;
  points: number;
  rank: number;
  change: number;
}

const MOCK_USERS: LeaderboardUser[] = [
  { id: '1', name: 'Kovács Péter', avatar: '/placeholder.svg', points: 1250, rank: 1, change: 2 },
  { id: '2', name: 'Nagy Eszter', avatar: '/placeholder.svg', points: 1180, rank: 2, change: 0 },
  { id: '3', name: 'Szabó Dániel', avatar: '/placeholder.svg', points: 1050, rank: 3, change: 1 },
  { id: '4', name: 'Kiss Gergő', avatar: '/placeholder.svg', points: 980, rank: 4, change: -3 },
  { id: '5', name: 'Varga Zsolt', avatar: '/placeholder.svg', points: 920, rank: 5, change: 0 },
];

interface LeaderboardCardProps {
  title?: string;
  users?: LeaderboardUser[];
  compact?: boolean;
}

const LeaderboardCard = ({ 
  title = "Barátok ranglistája", 
  users = MOCK_USERS,
  compact = false
}: LeaderboardCardProps) => {
  const [expanded, setExpanded] = useState(!compact);
  
  const currentUser = users[2]; // Tetszőleges felhasználó kiválasztása a ranglistából
  
  return (
    <div className="clay rounded-xl overflow-hidden animate-scale-in">
      <div 
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center space-x-2">
          <Trophy size={20} className="text-yellow-500" />
          <h3 className="font-bold">{title}</h3>
        </div>
        <div className="flex items-center">
          <Users size={16} className="mr-1 text-gray-400" />
          <span className="text-sm text-gray-400 mr-2">{users.length}</span>
          {compact && (
            expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />
          )}
        </div>
      </div>
      
      {expanded && (
        <div className="px-4 pb-4">
          {users.map((user, index) => (
            <div 
              key={user.id}
              className={`flex items-center justify-between p-3 rounded-lg mb-2 transition-colors ${
                user.id === currentUser.id 
                  ? 'bg-primary/20 border border-primary/30' 
                  : index < 3 
                    ? 'bg-white/5' 
                    : ''
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="w-5 text-center font-bold">
                  {index === 0 ? (
                    <span className="text-yellow-500">1</span>
                  ) : index === 1 ? (
                    <span className="text-gray-300">2</span>
                  ) : index === 2 ? (
                    <span className="text-amber-600">3</span>
                  ) : (
                    user.rank
                  )}
                </div>
                
                <div className="w-8 h-8 rounded-full overflow-hidden bg-secondary">
                  <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                </div>
                
                <span className="font-medium truncate max-w-[120px]">{user.name}</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex items-center">
                  {user.change > 0 ? (
                    <ChevronUp size={16} className="text-green-500" />
                  ) : user.change < 0 ? (
                    <ChevronDown size={16} className="text-red-500" />
                  ) : null}
                  <span className={`text-xs ${
                    user.change > 0 ? 'text-green-500' : 
                    user.change < 0 ? 'text-red-500' : 'text-gray-400'
                  }`}>
                    {user.change !== 0 ? Math.abs(user.change) : '-'}
                  </span>
                </div>
                
                <span className="font-bold">{user.points} P</span>
              </div>
            </div>
          ))}
          
          <button className="w-full py-2 mt-2 text-sm text-center text-gray-400 hover:text-white bg-white/5 rounded-lg transition-colors">
            Teljes ranglista megtekintése
          </button>
        </div>
      )}
    </div>
  );
};

export default LeaderboardCard;
