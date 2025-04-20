
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import TeamStatsTable from '@/components/TeamStatsTable';
import LeaderboardCard from '@/components/LeaderboardCard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Sparkline } from 'lucide-react';

const StatsPage = () => {
  const [activeTab, setActiveTab] = useState<'teams' | 'players' | 'predictions'>('teams');
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    // Animáció késleltetése
    const timer = setTimeout(() => {
      setMounted(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="min-h-screen pb-20">
      <Header title="STATS" />
      
      <div className="p-4">
        <div className={`mb-6 flex rounded-full bg-secondary p-1 ${mounted ? 'fade-in' : 'opacity-0'}`}>
          <button
            className={`tab-button ${activeTab === 'teams' ? 'tab-button-active' : 'tab-button-inactive'}`}
            onClick={() => setActiveTab('teams')}
          >
            Teams
          </button>
          <button
            className={`tab-button ${activeTab === 'players' ? 'tab-button-active' : 'tab-button-inactive'}`}
            onClick={() => setActiveTab('players')}
          >
            Players
          </button>
          <button
            className={`tab-button ${activeTab === 'predictions' ? 'tab-button-active' : 'tab-button-inactive'}`}
            onClick={() => setActiveTab('predictions')}
          >
            My Picks
          </button>
        </div>
        
        {activeTab === 'teams' && (
          <div className={`${mounted ? 'fade-in' : 'opacity-0'}`} style={{ transitionDelay: '200ms' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <Card className="clay">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-400">Goals per match</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-3xl font-bold">2.74</p>
                      <p className="text-xs text-green-500">+0.16 vs last season</p>
                    </div>
                    <div className="p-3 bg-secondary rounded-full">
                      <BarChart size={24} />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="clay">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-400">Clean sheets</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-3xl font-bold">32%</p>
                      <p className="text-xs text-red-500">-3% vs last season</p>
                    </div>
                    <div className="p-3 bg-secondary rounded-full">
                      <Sparkline size={24} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className={`mb-6 ${mounted ? 'fade-in' : 'opacity-0'}`} style={{ transitionDelay: '300ms' }}>
              <TeamStatsTable />
            </div>
          </div>
        )}
        
        {activeTab === 'players' && (
          <div className={`${mounted ? 'fade-in' : 'opacity-0'}`} style={{ transitionDelay: '200ms' }}>
            <div className="p-8 clay rounded-xl flex flex-col items-center justify-center">
              <BarChart size={48} className="text-gray-400 mb-4" />
              <p className="text-gray-400 text-center">Játékos statisztikák hamarosan elérhetők!</p>
            </div>
          </div>
        )}
        
        {activeTab === 'predictions' && (
          <div className={`${mounted ? 'fade-in' : 'opacity-0'}`} style={{ transitionDelay: '200ms' }}>
            <div className="mb-6">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="clay rounded-xl p-4 text-center">
                  <p className="text-sm text-gray-400">Tippek</p>
                  <p className="text-2xl font-bold">42</p>
                </div>
                <div className="clay rounded-xl p-4 text-center">
                  <p className="text-sm text-gray-400">Sikeres</p>
                  <p className="text-2xl font-bold text-green-500">28</p>
                </div>
                <div className="clay rounded-xl p-4 text-center">
                  <p className="text-sm text-gray-400">Pontosság</p>
                  <p className="text-2xl font-bold">67%</p>
                </div>
              </div>
              
              <LeaderboardCard title="Tippverseny ranglista" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsPage;
