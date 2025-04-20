
import { useState } from 'react';
import { match } from 'assert';
import { Button } from './ui/button';
import { Match } from '@/types';
import { X } from 'lucide-react';

interface MatchDetailsProps {
  match: Match;
  onClose: () => void;
}

const MatchDetails = ({ match, onClose }: MatchDetailsProps) => {
  const [activeTab, setActiveTab] = useState<'stats' | 'lineups'>('stats');
  const { homeTeam, awayTeam, stats } = match;

  if (!stats) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm overflow-auto flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-card rounded-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-[#1F2133] via-[#16182B] to-[#1F2133] p-6 relative">
          <button 
            onClick={onClose}
            className="absolute top-4 left-4 bg-black/30 rounded-full p-1"
          >
            <X className="w-5 h-5 text-gray-300" />
          </button>
          
          <div className="flex justify-between items-center mt-2 mb-4">
            <div className="text-left">
              <h3 className="text-xl font-bold text-white">{homeTeam.shortName}</h3>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-white">
                {match.homeScore}:{match.awayScore}
              </div>
              <div className="text-gray-400 text-sm">{match.timeElapsed}</div>
            </div>
            
            <div className="text-right">
              <h3 className="text-xl font-bold text-white">{awayTeam.shortName}</h3>
            </div>
          </div>
          
          <div className="text-center text-xs text-gray-400 mb-4">
            {match.league}
          </div>
        </div>

        <div className="border-b border-gray-800">
          <div className="flex">
            <button 
              className={`flex-1 py-3 font-semibold text-center ${activeTab === 'stats' ? 'text-primary border-b-2 border-primary' : 'text-gray-400'}`}
              onClick={() => setActiveTab('stats')}
            >
              Statistics
            </button>
            <button 
              className={`flex-1 py-3 font-semibold text-center ${activeTab === 'lineups' ? 'text-primary border-b-2 border-primary' : 'text-gray-400'}`}
              onClick={() => setActiveTab('lineups')}
            >
              Lineups
            </button>
          </div>
        </div>

        <div className="p-6">
          {activeTab === 'stats' ? (
            <div>
              <h4 className="font-semibold mb-4">General</h4>
              
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="text-right w-10 font-semibold text-sm">{stats.possession[0]}</div>
                  <div className="flex-1">
                    <div className="flex h-1.5 bg-gray-700 rounded-full overflow-hidden">
                      <div className="bg-red-600 h-full" style={{ width: `${stats.possession[0]}%` }}></div>
                      <div className="bg-blue-600 h-full" style={{ width: `${stats.possession[1]}%` }}></div>
                    </div>
                  </div>
                  <div className="text-gray-400 w-32 text-sm">possession %</div>
                  <div className="text-left w-10 font-semibold text-sm">{stats.possession[1]}</div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right w-10 font-semibold text-sm">{stats.passes[0]}</div>
                  <div className="flex-1">
                    <div className="flex h-1.5 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="bg-red-600 h-full" 
                        style={{ width: `${(stats.passes[0] / (stats.passes[0] + stats.passes[1])) * 100}%` }}
                      ></div>
                      <div 
                        className="bg-blue-600 h-full" 
                        style={{ width: `${(stats.passes[1] / (stats.passes[0] + stats.passes[1])) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-gray-400 w-32 text-sm">passes</div>
                  <div className="text-left w-10 font-semibold text-sm">{stats.passes[1]}</div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right w-10 font-semibold text-sm">{stats.shots[0]}</div>
                  <div className="flex-1">
                    <div className="flex h-1.5 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="bg-red-600 h-full" 
                        style={{ width: `${(stats.shots[0] / (stats.shots[0] + stats.shots[1] || 1)) * 100}%` }}
                      ></div>
                      <div 
                        className="bg-blue-600 h-full" 
                        style={{ width: `${(stats.shots[1] / (stats.shots[0] + stats.shots[1] || 1)) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-gray-400 w-32 text-sm">shots</div>
                  <div className="text-left w-10 font-semibold text-sm">{stats.shots[1]}</div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right w-10 font-semibold text-sm">{stats.freeKicks[0]}</div>
                  <div className="flex-1">
                    <div className="flex h-1.5 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="bg-red-600 h-full" 
                        style={{ width: `${(stats.freeKicks[0] / (stats.freeKicks[0] + stats.freeKicks[1] || 1)) * 100}%` }}
                      ></div>
                      <div 
                        className="bg-blue-600 h-full" 
                        style={{ width: `${(stats.freeKicks[1] / (stats.freeKicks[0] + stats.freeKicks[1] || 1)) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-gray-400 w-32 text-sm">free kicks</div>
                  <div className="text-left w-10 font-semibold text-sm">{stats.freeKicks[1]}</div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right w-10 font-semibold text-sm">{stats.corners[0]}</div>
                  <div className="flex-1">
                    <div className="flex h-1.5 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="bg-red-600 h-full" 
                        style={{ width: `${(stats.corners[0] / (stats.corners[0] + stats.corners[1] || 1)) * 100}%` }}
                      ></div>
                      <div 
                        className="bg-blue-600 h-full" 
                        style={{ width: `${(stats.corners[1] / (stats.corners[0] + stats.corners[1] || 1)) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-gray-400 w-32 text-sm">corners</div>
                  <div className="text-left w-10 font-semibold text-sm">{stats.corners[1]}</div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right w-10 font-semibold text-sm">{stats.offsides[0]}</div>
                  <div className="flex-1">
                    <div className="flex h-1.5 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="bg-red-600 h-full" 
                        style={{ width: `${(stats.offsides[0] / (stats.offsides[0] + stats.offsides[1] || 1)) * 100}%` }}
                      ></div>
                      <div 
                        className="bg-blue-600 h-full" 
                        style={{ width: `${(stats.offsides[1] / (stats.offsides[0] + stats.offsides[1] || 1)) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-gray-400 w-32 text-sm">offsides</div>
                  <div className="text-left w-10 font-semibold text-sm">{stats.offsides[1]}</div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right w-10 font-semibold text-sm">{stats.fouls[0]}</div>
                  <div className="flex-1">
                    <div className="flex h-1.5 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="bg-red-600 h-full" 
                        style={{ width: `${(stats.fouls[0] / (stats.fouls[0] + stats.fouls[1] || 1)) * 100}%` }}
                      ></div>
                      <div 
                        className="bg-blue-600 h-full" 
                        style={{ width: `${(stats.fouls[1] / (stats.fouls[0] + stats.fouls[1] || 1)) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-gray-400 w-32 text-sm">fouls</div>
                  <div className="text-left w-10 font-semibold text-sm">{stats.fouls[1]}</div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right w-10 font-semibold text-sm">{stats.yellowCards[0]}</div>
                  <div className="flex-1">
                    <div className="flex h-1.5 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="bg-red-600 h-full" 
                        style={{ width: `${(stats.yellowCards[0] / (stats.yellowCards[0] + stats.yellowCards[1] || 1)) * 100}%` }}
                      ></div>
                      <div 
                        className="bg-blue-600 h-full" 
                        style={{ width: `${(stats.yellowCards[1] / (stats.yellowCards[0] + stats.yellowCards[1] || 1)) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-gray-400 w-32 text-sm">yellow cards</div>
                  <div className="text-left w-10 font-semibold text-sm">{stats.yellowCards[1]}</div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right w-10 font-semibold text-sm">{stats.redCards[0]}</div>
                  <div className="flex-1">
                    <div className="flex h-1.5 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="bg-red-600 h-full" 
                        style={{ width: `${(stats.redCards[0] / (stats.redCards[0] + stats.redCards[1] || 1)) * 100}%` }}
                      ></div>
                      <div 
                        className="bg-blue-600 h-full" 
                        style={{ width: `${(stats.redCards[1] / (stats.redCards[0] + stats.redCards[1] || 1)) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-gray-400 w-32 text-sm">red cards</div>
                  <div className="text-left w-10 font-semibold text-sm">{stats.redCards[1]}</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center h-40">
              <p className="text-gray-400">Lineups coming soon</p>
            </div>
          )}
        </div>
        
        <div className="p-4 border-t border-gray-800 flex justify-center">
          <Button 
            onClick={onClose}
            className="bg-primary text-white px-8 rounded-full"
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MatchDetails;
