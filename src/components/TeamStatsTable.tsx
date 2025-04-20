
import React from 'react';
import { teams } from '@/lib/data';
import { ArrowUp, ArrowDown, Minus } from 'lucide-react';

type TableRow = {
  position: number;
  team: string;
  teamShort: string;
  teamColor: string;
  w: number;
  d: number;
  l: number;
  pts: number;
  teamId: string;
  form: ('W' | 'D' | 'L')[];
  change?: number;
};

const TeamStatsTable = () => {
  const tableData: TableRow[] = [
    { position: 1, team: 'Manchester City', teamShort: 'MCI', teamColor: 'bg-team-man-city', w: 18, d: 3, l: 2, pts: 57, teamId: 'man-city', form: ['W', 'W', 'D', 'W', 'W'], change: 0 },
    { position: 2, team: 'West Ham Utd', teamShort: 'WHU', teamColor: 'bg-team-west-ham', w: 14, d: 6, l: 2, pts: 48, teamId: 'west-ham', form: ['W', 'D', 'W', 'L', 'W'], change: 2 },
    { position: 3, team: 'Manchester Utd', teamShort: 'MUN', teamColor: 'bg-team-man-utd', w: 13, d: 8, l: 3, pts: 47, teamId: 'man-utd', form: ['D', 'W', 'D', 'W', 'W'], change: -1 },
    { position: 4, team: 'Chelsea', teamShort: 'CHE', teamColor: 'bg-team-chelsea', w: 11, d: 5, l: 6, pts: 38, teamId: 'chelsea', form: ['W', 'L', 'W', 'D', 'L'], change: 1 },
    { position: 7, team: 'Arsenal', teamShort: 'ARS', teamColor: 'bg-team-arsenal', w: 11, d: 3, l: 6, pts: 36, teamId: 'arsenal', form: ['L', 'W', 'W', 'L', 'D'], change: -2 }
  ];

  return (
    <div className="glass p-4 rounded-2xl">
      <div className="flex items-center text-xs font-medium text-gray-400 px-2 mb-4">
        <div className="w-8 text-center">#</div>
        <div className="flex-1">Team</div>
        <div className="w-8 text-center">W</div>
        <div className="w-8 text-center">D</div>
        <div className="w-8 text-center">L</div>
        <div className="w-16 text-center">Form</div>
        <div className="w-12 text-center">PTS</div>
      </div>
      
      {tableData.map((row, i) => {
        const team = teams.find(t => t.id === row.teamId);
        const badge = team?.badge;
        
        return (
          <div 
            key={i}
            className={`clay flex items-center py-3 px-2 rounded-xl ${
              row.position === 7 ? 'bg-red-900/20' : row.position <= 4 ? 'bg-primary/10' : ''
            } mb-3 hover:scale-105 transition-all duration-300 cursor-pointer`}
          >
            <div className="w-8 text-center font-bold flex items-center justify-center">
              {row.position}
              {row.change !== undefined && row.change !== 0 && (
                <span className="ml-1">
                  {row.change > 0 ? (
                    <ArrowUp size={12} className="text-green-500" />
                  ) : (
                    <ArrowDown size={12} className="text-red-500" />
                  )}
                </span>
              )}
            </div>
            <div className="flex-1 flex items-center">
              <div className="w-6 h-6 rounded-full flex items-center justify-center mr-2 overflow-hidden clay">
                {badge ? (
                  <img src={badge} alt={row.team} className="w-full h-full object-contain" />
                ) : (
                  <div className={`w-full h-full ${row.teamColor} flex items-center justify-center`}>
                    <span className="text-xs text-white font-bold">{row.teamShort[0]}</span>
                  </div>
                )}
              </div>
              <span className="truncate">{row.team}</span>
            </div>
            <div className="w-8 text-center">{row.w}</div>
            <div className="w-8 text-center">{row.d}</div>
            <div className="w-8 text-center">{row.l}</div>
            <div className="w-16 flex items-center justify-center space-x-1">
              {row.form.map((result, index) => (
                <span 
                  key={index}
                  className={`w-3 h-3 rounded-full flex items-center justify-center text-[8px] font-bold ${
                    result === 'W' ? 'bg-green-500' : 
                    result === 'D' ? 'bg-yellow-500' : 
                    'bg-red-500'
                  }`}
                >
                  {result}
                </span>
              ))}
            </div>
            <div className="w-12 text-center font-bold">{row.pts}</div>
          </div>
        );
      })}
    </div>
  );
};

export default TeamStatsTable;
