
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TeamSelection from '@/components/TeamSelection';
import { toast } from '@/components/ui/use-toast';
import { Team } from '@/types';

const Onboarding = () => {
  const [step, setStep] = useState(1);
  const [selectedTeams, setSelectedTeams] = useState<Team[]>([]);
  const navigate = useNavigate();
  
  const handleTeamSelectionComplete = (teams: Team[]) => {
    setSelectedTeams(teams);
    toast({
      title: "Teams selected",
      description: `You've selected ${teams.length} teams to follow`,
    });
    navigate('/');
  };
  
  return (
    <div className="min-h-screen bg-background">
      {step === 1 && (
        <TeamSelection onComplete={handleTeamSelectionComplete} />
      )}
    </div>
  );
};

export default Onboarding;
