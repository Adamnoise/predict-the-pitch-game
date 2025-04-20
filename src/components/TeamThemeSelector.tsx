
import { useState, useEffect } from 'react';
import { teams } from '@/lib/data';
import { Check } from 'lucide-react';

interface TeamThemeSelectorProps {
  onSelect: (teamId: string) => void;
  currentTeam: string;
}

const TeamThemeSelector = ({ onSelect, currentTeam }: TeamThemeSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const popularTeams = teams.slice(0, 6);
  
  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="clay p-3 rounded-xl flex items-center space-x-2 w-full"
      >
        <div className="w-8 h-8 rounded-full overflow-hidden">
          {currentTeam && teams.find(t => t.id === currentTeam)?.badge ? (
            <img 
              src={teams.find(t => t.id === currentTeam)?.badge} 
              alt="Selected team" 
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="w-full h-full bg-primary flex items-center justify-center">
              <span className="text-xs text-white font-bold">T</span>
            </div>
          )}
        </div>
        <span className="text-sm font-medium">Kedvenc csapatod</span>
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 glass p-4 rounded-xl z-50 pop-in">
          <h3 className="text-sm font-bold mb-3">Válassz csapatot</h3>
          <div className="grid grid-cols-3 gap-3">
            {popularTeams.map(team => (
              <button 
                key={team.id}
                onClick={() => {
                  onSelect(team.id);
                  setIsOpen(false);
                }}
                className={`p-2 rounded-lg flex flex-col items-center transition-all duration-300 ${
                  currentTeam === team.id ? 'bg-primary/20 ring-2 ring-primary' : 'hover:bg-white/5'
                }`}
              >
                <div className="w-10 h-10 rounded-full overflow-hidden bg-white/10">
                  {team.badge ? (
                    <img src={team.badge} alt={team.name} className="w-full h-full object-contain" />
                  ) : (
                    <div className={`w-full h-full bg-team-${team.id} flex items-center justify-center`}>
                      <span className="text-xs text-white font-bold">{team.shortName?.[0]}</span>
                    </div>
                  )}
                </div>
                <span className="text-xs mt-1">{team.shortName}</span>
                {currentTeam === team.id && (
                  <div className="absolute -top-1 -right-1 bg-primary rounded-full p-0.5">
                    <Check size={12} className="text-white" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamThemeSelector;
