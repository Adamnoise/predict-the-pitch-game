
import { Match } from '@/types';

interface MatchCardProps {
  match: Match;
  onClick?: () => void;
  variant?: 'large' | 'small';
}

const MatchCard = ({ match, onClick, variant = 'large' }: MatchCardProps) => {
  const isLive = match.status === 'live';
  const { homeTeam, awayTeam } = match;

  const homeGradient = homeTeam.gradientClass || `from-${homeTeam.colorClass} to-${homeTeam.colorClass}`;
  const awayGradient = awayTeam.gradientClass || `from-${awayTeam.colorClass} to-${awayTeam.colorClass}`;

  if (variant === 'small') {
    return (
      <div 
        onClick={onClick}
        className={`flex items-center p-3 mb-4 rounded-xl bg-gradient-to-r ${homeGradient} via-purple-900 ${awayGradient} cursor-pointer overflow-hidden transition-transform hover:scale-105`}
      >
        <div className="flex-1 flex items-center">
          <div className="w-10 h-10 mr-3">
            <img src={homeTeam.badge} alt={homeTeam.name} className="w-full h-full object-contain" />
          </div>
          <div className="text-white">
            <p className="font-bold">{homeTeam.shortName}</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mx-4">
          {isLive ? (
            <>
              <div className="text-white font-bold text-xl">
                {match.homeScore} : {match.awayScore}
              </div>
              <div className="text-xs bg-white/20 px-2 rounded-full text-white">
                {match.timeElapsed}
              </div>
            </>
          ) : (
            <div className="text-white font-medium">
              {match.time.replace(':00', '')}
            </div>
          )}
        </div>

        <div className="flex-1 flex items-center justify-end">
          <div className="text-white text-right">
            <p className="font-bold">{awayTeam.shortName}</p>
          </div>
          <div className="w-10 h-10 ml-3">
            <img src={awayTeam.badge} alt={awayTeam.name} className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      onClick={onClick}
      className={`match-card cursor-pointer ${isLive ? 'animate-pulse-light' : ''}`}
    >
      <div className="bg-gradient-to-r from-[#1F2133] via-[#16182B] to-[#1F2133] p-1">
        <div className="bg-gradient-to-r from-[#1F2133] via-[#16182B] to-[#1F2133] rounded-t-2xl p-6 relative">
          {isLive && (
            <div className="live-tag">
              LIVE
            </div>
          )}
          
          <div className="flex justify-between items-center">
            <div className="text-left">
              <h3 className="text-2xl font-bold uppercase text-white">{homeTeam.name}</h3>
            </div>
            
            <span className="text-gray-400 text-xl font-bold mx-4">VS</span>
            
            <div className="text-right">
              <h3 className="text-2xl font-bold uppercase text-white">{awayTeam.name}</h3>
            </div>
          </div>

          <div className="flex justify-between items-center mt-6">
            <div className="w-24 h-28">
              <img 
                src={homeTeam.badge || `/assets/teams/${homeTeam.id}.png`} 
                alt={homeTeam.name} 
                className="w-full h-full object-contain"
              />
            </div>
            
            {isLive && (
              <div className="text-center">
                <div className="text-5xl font-bold text-white">
                  {match.homeScore}:{match.awayScore}
                </div>
                <div className="text-gray-400 text-base mt-1">{match.timeElapsed}</div>
              </div>
            )}
            
            <div className="w-24 h-28">
              <img 
                src={awayTeam.badge || `/assets/teams/${awayTeam.id}.png`} 
                alt={awayTeam.name} 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="mt-4 text-center text-xs text-gray-400">
            {match.league}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchCard;
