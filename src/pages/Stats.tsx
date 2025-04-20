
import { useState } from 'react';
import Header from '@/components/Header';
import { ChevronRight } from 'lucide-react';

const Stats = () => {
  return (
    <div className="min-h-screen bg-background pb-16">
      <Header title="STATS CENTRE" />
      
      <div className="p-4">
        <div className="bg-card rounded-xl overflow-hidden mb-6">
          <div className="p-4">
            <h3 className="text-center text-lg font-bold mb-4">PREMIER LEAGUE</h3>
            
            <div className="flex items-center text-xs font-medium text-gray-400 px-2 mb-2">
              <div className="w-8 text-center">#</div>
              <div className="flex-1">Team</div>
              <div className="w-8 text-center">W</div>
              <div className="w-8 text-center">D</div>
              <div className="w-8 text-center">L</div>
              <div className="w-12 text-center">PTS</div>
            </div>
            
            {[
              { position: 1, team: 'Manchester City', teamShort: 'MCI', teamColor: 'bg-team-man-city', w: 18, d: 3, l: 2, pts: 57 },
              { position: 2, team: 'West Ham Utd', teamShort: 'WHU', teamColor: 'bg-team-west-ham', w: 14, d: 6, l: 2, pts: 48 },
              { position: 3, team: 'Manchester Utd', teamShort: 'MUN', teamColor: 'bg-team-man-utd', w: 13, d: 8, l: 3, pts: 47 },
              { position: 4, team: 'Chelsea', teamShort: 'CHE', teamColor: 'bg-team-chelsea', w: 11, d: 5, l: 6, pts: 38 },
              { position: 7, team: 'Arsenal', teamShort: 'ARS', teamColor: 'bg-team-arsenal', w: 11, d: 3, l: 6, pts: 36 }
            ].map((team, i) => (
              <div 
                key={i}
                className={`flex items-center py-3 px-2 rounded-lg ${
                  team.position === 7 ? 'bg-red-900/40' : team.position <= 4 ? 'bg-secondary' : ''
                } mb-2`}
              >
                <div className="w-8 text-center font-bold">{team.position}</div>
                <div className="flex-1 flex items-center">
                  <div className={`w-6 h-6 rounded-full ${team.teamColor} flex items-center justify-center mr-2`}>
                    <span className="text-xs text-white font-bold">{team.teamShort[0]}</span>
                  </div>
                  <span>{team.team}</span>
                </div>
                <div className="w-8 text-center">{team.w}</div>
                <div className="w-8 text-center">{team.d}</div>
                <div className="w-8 text-center">{team.l}</div>
                <div className="w-12 text-center font-bold">{team.pts}</div>
              </div>
            ))}
            
            <div className="mt-4 text-center">
              <button className="text-primary text-sm font-medium">
                See the full table
              </button>
            </div>
          </div>
        </div>
        
        <div className="bg-card rounded-xl overflow-hidden mb-6">
          <div className="p-4">
            <h3 className="text-center text-lg font-bold mb-4">LATEST RESULTS</h3>
            
            <div className="space-y-3">
              <p className="text-xs text-gray-400 mb-1">Aug 08, Sun</p>
              
              {[
                { homeTeam: 'LIV', homeColor: 'from-team-liverpool', homeScore: 3, awayTeam: 'LEI', awayColor: 'to-team-chelsea', awayScore: 2 },
                { homeTeam: 'LEE', homeColor: 'from-team-leeds', homeScore: 2, awayTeam: 'EVE', awayColor: 'to-team-everton', awayScore: 2 },
                { homeTeam: 'MUN', homeColor: 'from-team-man-utd', homeScore: 1, awayTeam: 'WAT', awayColor: 'to-yellow-500', awayScore: 0 }
              ].map((match, i) => (
                <div 
                  key={i}
                  className={`flex items-center justify-between p-3 bg-gradient-to-r ${match.homeColor} via-purple-900 ${match.awayColor} rounded-lg`}
                >
                  <div className="flex-1 text-left">
                    <span className="text-white font-bold">{match.homeTeam}</span>
                  </div>
                  <div className="flex items-center gap-1 mx-2">
                    <span className="text-white font-bold">{match.homeScore}</span>
                    <span className="text-white">:</span>
                    <span className="text-white font-bold">{match.awayScore}</span>
                  </div>
                  <div className="flex-1 text-right">
                    <span className="text-white font-bold">{match.awayTeam}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="bg-card rounded-xl p-4 flex justify-between items-center">
            <div>
              <h3 className="font-bold">Top Scorers</h3>
              <p className="text-sm text-gray-400">Premier League</p>
            </div>
            <ChevronRight className="text-gray-400" />
          </div>
          
          <div className="bg-card rounded-xl p-4 flex justify-between items-center">
            <div>
              <h3 className="font-bold">Top Assisters</h3>
              <p className="text-sm text-gray-400">Premier League</p>
            </div>
            <ChevronRight className="text-gray-400" />
          </div>
          
          <div className="bg-card rounded-xl p-4 flex justify-between items-center">
            <div>
              <h3 className="font-bold">Clean Sheets</h3>
              <p className="text-sm text-gray-400">Premier League</p>
            </div>
            <ChevronRight className="text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
