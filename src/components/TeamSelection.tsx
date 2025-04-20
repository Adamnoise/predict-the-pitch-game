
import { useState } from 'react';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { teams } from '@/lib/data';
import { Team } from '@/types';

interface TeamSelectionProps {
  onComplete: (selectedTeams: Team[]) => void;
}

const TeamSelection = ({ onComplete }: TeamSelectionProps) => {
  const [selectedTeams, setSelectedTeams] = useState<Team[]>([]);
  const maxTeams = 5;

  const handleTeamSelect = (team: Team) => {
    if (selectedTeams.some(t => t.id === team.id)) {
      setSelectedTeams(selectedTeams.filter(t => t.id !== team.id));
    } else if (selectedTeams.length < maxTeams) {
      setSelectedTeams([...selectedTeams, team]);
    }
  };

  const handleRemoveTeam = (teamId: string) => {
    setSelectedTeams(selectedTeams.filter(team => team.id !== teamId));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-background">
      <h1 className="text-3xl font-bold mb-2 text-center tracking-wide uppercase">PICK UP TO 5 TEAMS</h1>
      <h2 className="text-2xl mb-8 text-center tracking-wide uppercase text-gray-400">TO FOLLOW</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-3xl mb-8">
        {teams.map(team => (
          <div 
            key={team.id}
            onClick={() => handleTeamSelect(team)}
            className={`team-card ${team.colorClass} ${
              selectedTeams.some(t => t.id === team.id) 
                ? 'ring-2 ring-white' 
                : ''
            } cursor-pointer`}
          >
            <div className="flex flex-col items-center justify-center p-4">
              <div className="w-20 h-20 mb-2">
                <img 
                  src={team.badge || `/assets/teams/${team.id}.png`} 
                  alt={team.name} 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-white font-medium">{team.name}</span>
            </div>
          </div>
        ))}
      </div>

      {selectedTeams.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {selectedTeams.map(team => (
            <div key={team.id} className="flex items-center gap-2 px-3 py-2 bg-secondary rounded-full">
              <img 
                src={team.badge || `/assets/teams/${team.id}.png`}
                alt={team.name} 
                className="w-5 h-5 object-contain" 
              />
              <span className="text-sm font-medium">{team.name}</span>
              <button
                onClick={() => handleRemoveTeam(team.id)}
                className="w-4 h-4 flex items-center justify-center rounded-full hover:bg-gray-700"
              >
                <X size={12} />
              </button>
            </div>
          ))}
        </div>
      )}

      <Button 
        className="w-full max-w-md bg-primary text-white py-4 rounded-full font-semibold"
        onClick={() => onComplete(selectedTeams)}
        disabled={selectedTeams.length === 0}
      >
        Select ({selectedTeams.length}/{maxTeams})
      </Button>
    </div>
  );
};

export default TeamSelection;
