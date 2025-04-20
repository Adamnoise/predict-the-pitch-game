
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { teams } from '@/lib/data';

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // This would normally check if user is logged in and has selected teams
    // If not, redirect to onboarding
    const hasSelectedTeams = localStorage.getItem('selectedTeams');
    
    if (!hasSelectedTeams) {
      navigate('/onboarding');
    } else {
      navigate('/');
    }
  }, [navigate]);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-white">Predict The Pitch</h1>
        <p className="text-xl text-gray-400 mb-8">Loading your football experience...</p>
        
        <div className="flex justify-center space-x-4">
          {teams.slice(0, 3).map(team => (
            <div 
              key={team.id}
              className={`w-16 h-16 ${team.colorClass} rounded-full flex items-center justify-center animate-pulse`}
            >
              <img 
                src={team.badge} 
                alt={team.name} 
                className="w-10 h-10 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
