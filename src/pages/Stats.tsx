
import { useState } from 'react';
import Header from '@/components/Header';
import { BarChart3, ChevronRight, Star, TrendingUp, User } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TeamStatsTable from '@/components/TeamStatsTable';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';

const performanceData = [
  { name: 'Week 1', ManCity: 3, Chelsea: 1, Arsenal: 0, ManUtd: 3 },
  { name: 'Week 2', ManCity: 6, Chelsea: 4, Arsenal: 3, ManUtd: 6 },
  { name: 'Week 3', ManCity: 9, Chelsea: 7, Arsenal: 6, ManUtd: 6 },
  { name: 'Week 4', ManCity: 12, Chelsea: 8, Arsenal: 9, ManUtd: 9 },
  { name: 'Week 5', ManCity: 15, Chelsea: 9, Arsenal: 9, ManUtd: 12 },
  { name: 'Week 6', ManCity: 18, Chelsea: 10, Arsenal: 9, ManUtd: 15 },
  { name: 'Week 7', ManCity: 21, Chelsea: 11, Arsenal: 10, ManUtd: 16 },
  { name: 'Week 8', ManCity: 24, Chelsea: 11, Arsenal: 11, ManUtd: 19 },
  { name: 'Week 9', ManCity: 27, Chelsea: 12, Arsenal: 12, ManUtd: 22 },
  { name: 'Week 10', ManCity: 30, Chelsea: 15, Arsenal: 15, ManUtd: 25 },
  { name: 'Week 11', ManCity: 33, Chelsea: 16, Arsenal: 18, ManUtd: 28 },
  { name: 'Week 12', ManCity: 36, Chelsea: 19, Arsenal: 21, ManUtd: 28 },
  { name: 'Week 13', ManCity: 39, Chelsea: 22, Arsenal: 24, ManUtd: 31 },
  { name: 'Week 14', ManCity: 42, Chelsea: 25, Arsenal: 27, ManUtd: 34 },
  { name: 'Week 15', ManCity: 45, Chelsea: 28, Arsenal: 30, ManUtd: 37 },
  { name: 'Week 16', ManCity: 48, Chelsea: 31, Arsenal: 33, ManUtd: 40 },
  { name: 'Week 17', ManCity: 51, Chelsea: 34, Arsenal: 33, ManUtd: 43 },
  { name: 'Week 18', ManCity: 54, Chelsea: 37, Arsenal: 33, ManUtd: 44 },
  { name: 'Week 19', ManCity: 57, Chelsea: 38, Arsenal: 36, ManUtd: 47 },
];

const Stats = () => {
  const [activeTab, setActiveTab] = useState('tables');
  const navigate = useNavigate();

  const handleStatsClick = (type: string) => {
    toast({
      title: "Coming Soon",
      description: `${type} stats will be available in the next update`,
    });
  };

  return (
    <div className="min-h-screen bg-background pb-16">
      <Header title="STATS CENTRE" />
      
      <div className="p-4">
        <Tabs defaultValue="tables" className="mb-6">
          <TabsList className="w-full mb-4">
            <TabsTrigger value="tables" className="flex-1" onClick={() => setActiveTab('tables')}>Tables</TabsTrigger>
            <TabsTrigger value="players" className="flex-1" onClick={() => setActiveTab('players')}>Players</TabsTrigger>
            <TabsTrigger value="teams" className="flex-1" onClick={() => setActiveTab('teams')}>Teams</TabsTrigger>
          </TabsList>
          
          <TabsContent value="tables">
            <div className="bg-card rounded-xl overflow-hidden mb-6">
              <div className="p-4">
                <h3 className="text-center text-lg font-bold mb-4">PREMIER LEAGUE</h3>
                
                <TeamStatsTable />
                
                <div className="mt-4 text-center">
                  <button 
                    className="text-primary text-sm font-medium"
                    onClick={() => navigate('/stats/full-table')}
                  >
                    See the full table
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl overflow-hidden mb-6">
              <div className="p-4">
                <h3 className="text-center text-lg font-bold mb-4">POINTS PROGRESSION</h3>
                
                <div className="h-64 w-full">
                  <ChartContainer 
                    config={{
                      ManCity: { label: 'Man City', color: '#1EAEDB' },
                      Chelsea: { label: 'Chelsea', color: '#0066b2' },
                      Arsenal: { label: 'Arsenal', color: '#EF0107' },
                      ManUtd: { label: 'Man Utd', color: '#C70101' }
                    }}
                  >
                    <AreaChart data={performanceData}>
                      <defs>
                        <linearGradient id="colorManCity" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#1EAEDB" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#1EAEDB" stopOpacity={0.1}/>
                        </linearGradient>
                        <linearGradient id="colorChelsea" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#0066b2" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#0066b2" stopOpacity={0.1}/>
                        </linearGradient>
                        <linearGradient id="colorArsenal" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#EF0107" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#EF0107" stopOpacity={0.1}/>
                        </linearGradient>
                        <linearGradient id="colorManUtd" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#C70101" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#C70101" stopOpacity={0.1}/>
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="name" tick={{fill: '#999'}} />
                      <YAxis tick={{fill: '#999'}} />
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                      <ChartTooltip 
                        content={<ChartTooltipContent />} 
                      />
                      <Area type="monotone" dataKey="ManCity" stroke="#1EAEDB" fillOpacity={1} fill="url(#colorManCity)" />
                      <Area type="monotone" dataKey="Chelsea" stroke="#0066b2" fillOpacity={0.8} fill="url(#colorChelsea)" />
                      <Area type="monotone" dataKey="Arsenal" stroke="#EF0107" fillOpacity={0.8} fill="url(#colorArsenal)" />
                      <Area type="monotone" dataKey="ManUtd" stroke="#C70101" fillOpacity={0.8} fill="url(#colorManUtd)" />
                    </AreaChart>
                  </ChartContainer>
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
                      className={`flex items-center justify-between p-3 bg-gradient-to-r ${match.homeColor} via-purple-900 ${match.awayColor} rounded-lg cursor-pointer transition-transform hover:scale-105`}
                      onClick={() => navigate(`/matches/${i}`)}
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
          </TabsContent>
          
          <TabsContent value="players">
            <div className="space-y-4">
              <div 
                className="bg-card rounded-xl p-4 flex justify-between items-center cursor-pointer hover:bg-card/80 transition-colors"
                onClick={() => handleStatsClick('Top Scorers')}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 p-2 rounded-full">
                    <TrendingUp className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold">Top Scorers</h3>
                    <p className="text-sm text-gray-400">Premier League</p>
                  </div>
                </div>
                <ChevronRight className="text-gray-400" />
              </div>
              
              <div 
                className="bg-card rounded-xl p-4 flex justify-between items-center cursor-pointer hover:bg-card/80 transition-colors"
                onClick={() => handleStatsClick('Top Assisters')}  
              >
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 p-2 rounded-full">
                    <Star className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold">Top Assisters</h3>
                    <p className="text-sm text-gray-400">Premier League</p>
                  </div>
                </div>
                <ChevronRight className="text-gray-400" />
              </div>
              
              <div 
                className="bg-card rounded-xl p-4 flex justify-between items-center cursor-pointer hover:bg-card/80 transition-colors"
                onClick={() => handleStatsClick('Clean Sheets')}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 p-2 rounded-full">
                    <User className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold">Clean Sheets</h3>
                    <p className="text-sm text-gray-400">Premier League</p>
                  </div>
                </div>
                <ChevronRight className="text-gray-400" />
              </div>
              
              <div 
                className="bg-card rounded-xl p-4 flex justify-between items-center cursor-pointer hover:bg-card/80 transition-colors"
                onClick={() => handleStatsClick('Most Minutes')}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 p-2 rounded-full">
                    <BarChart3 className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold">Most Minutes</h3>
                    <p className="text-sm text-gray-400">Premier League</p>
                  </div>
                </div>
                <ChevronRight className="text-gray-400" />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="teams">
            <div className="space-y-4">
              <div 
                className="bg-card rounded-xl p-4 flex justify-between items-center cursor-pointer hover:bg-card/80 transition-colors"
                onClick={() => handleStatsClick('Goals Scored')}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 p-2 rounded-full">
                    <BarChart3 className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold">Goals Scored</h3>
                    <p className="text-sm text-gray-400">By team</p>
                  </div>
                </div>
                <ChevronRight className="text-gray-400" />
              </div>
              
              <div 
                className="bg-card rounded-xl p-4 flex justify-between items-center cursor-pointer hover:bg-card/80 transition-colors"
                onClick={() => handleStatsClick('Clean Sheets')}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 p-2 rounded-full">
                    <TrendingUp className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold">Clean Sheets</h3>
                    <p className="text-sm text-gray-400">By team</p>
                  </div>
                </div>
                <ChevronRight className="text-gray-400" />
              </div>
              
              <div 
                className="bg-card rounded-xl p-4 flex justify-between items-center cursor-pointer hover:bg-card/80 transition-colors"
                onClick={() => handleStatsClick('Possession')}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 p-2 rounded-full">
                    <Star className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold">Possession</h3>
                    <p className="text-sm text-gray-400">Average per game</p>
                  </div>
                </div>
                <ChevronRight className="text-gray-400" />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Stats;
