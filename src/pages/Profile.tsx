
import { useState } from 'react';
import Header from '@/components/Header';
import { userData, levels } from '@/lib/data';
import { Badge, ChevronLeft, ChevronRight } from 'lucide-react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState<'stats' | 'history'>('stats');
  
  return (
    <div className="min-h-screen bg-background pb-16">
      <Header 
        title="PROFILE" 
        showBackButton={true} 
        onBackClick={() => window.history.back()}
        showBell={false}
        showSettings={false}
        showProfile={false}
      />
      
      <div className="p-4">
        <div className="flex flex-col items-center mb-8">
          <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
            <img 
              src={userData.avatar} 
              alt={userData.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold text-white mb-1">{userData.name}</h2>
          <p className="text-gray-400">{userData.username}</p>
          
          <div className="mt-4 bg-gradient-to-r from-red-600 to-blue-600 rounded-full px-6 py-2">
            <div className="flex items-center">
              <Badge className="h-4 w-4 text-white mr-2" />
              <span className="text-white font-medium">{userData.level.toUpperCase()}</span>
            </div>
          </div>
        </div>
        
        <div className="bg-card rounded-xl overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-red-600 to-red-700 p-4">
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-white/70 text-sm">Points earned</p>
                <div className="flex items-center">
                  <div className="bg-blue-500 h-6 w-6 rounded-full flex items-center justify-center mr-2">
                    <span className="text-white text-xs">⭐</span>
                  </div>
                  <span className="text-white text-3xl font-bold">{userData.points.toLocaleString()} pts</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-white/70 text-sm mb-1">since last win</p>
                <span className="text-white text-xl">+ 1,500 PTS</span>
              </div>
            </div>
            
            <div className="h-24 relative">
              {/* This would be a real chart in production */}
              <svg viewBox="0 0 300 80" className="w-full h-full">
                <path
                  d="M0,40 C20,20 40,60 60,40 C80,20 100,60 120,40 C140,20 160,60 180,40 C200,20 220,60 240,40 C260,20 280,60 300,50"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                />
                <circle cx="300" cy="50" r="5" fill="#FCD34D" />
              </svg>
              
              <div className="absolute bottom-0 left-0 right-0 flex justify-between text-white/60 text-xs">
                <span>Sun</span>
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
              </div>
            </div>
          </div>
          
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-gray-400 text-sm">Amateur (16,000)</p>
                <p className="text-white text-sm">4,000 pts left to get to Professional (20,000)</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white">
                🏆
              </div>
            </div>
            
            <h3 className="font-bold mb-2">Levels by points</h3>
            
            <div className="space-y-3">
              {levels.map(level => (
                <div 
                  key={level.id}
                  className={`flex items-center p-3 rounded-lg ${
                    userData.level === level.id ? 'bg-secondary' : 'bg-gray-800'
                  }`}
                >
                  <div className="w-8 h-8 flex items-center justify-center mr-3">
                    <span role="img" aria-label={level.name}>{level.icon}</span>
                  </div>
                  <div>
                    <p className="font-medium text-white">{level.name}</p>
                    <p className="text-xs text-gray-400">{level.range}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <div className="flex border-b border-gray-800 mb-4">
            <button
              className={`py-3 px-6 font-semibold text-sm ${
                activeTab === 'stats' ? 'text-primary border-b-2 border-primary' : 'text-gray-400'
              }`}
              onClick={() => setActiveTab('stats')}
            >
              My Stats
            </button>
            <button
              className={`py-3 px-6 font-semibold text-sm ${
                activeTab === 'history' ? 'text-primary border-b-2 border-primary' : 'text-gray-400'
              }`}
              onClick={() => setActiveTab('history')}
            >
              Prediction History
            </button>
          </div>
          
          {activeTab === 'stats' ? (
            <div className="bg-card rounded-xl p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold">Overall Stats</h3>
                <div className="flex items-center gap-2">
                  <button className="p-1 rounded-full bg-gray-700">
                    <ChevronLeft size={16} className="text-gray-400" />
                  </button>
                  <span className="text-sm text-gray-400">Season 21/22</span>
                  <button className="p-1 rounded-full bg-gray-700">
                    <ChevronRight size={16} className="text-gray-400" />
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-secondary rounded-lg p-3">
                  <p className="text-sm text-gray-400 mb-1">Predictions Made</p>
                  <p className="text-2xl font-bold">234</p>
                </div>
                <div className="bg-secondary rounded-lg p-3">
                  <p className="text-sm text-gray-400 mb-1">Accuracy Rate</p>
                  <p className="text-2xl font-bold">43%</p>
                </div>
                <div className="bg-secondary rounded-lg p-3">
                  <p className="text-sm text-gray-400 mb-1">Points Earned</p>
                  <p className="text-2xl font-bold">{userData.points.toLocaleString()}</p>
                </div>
                <div className="bg-secondary rounded-lg p-3">
                  <p className="text-sm text-gray-400 mb-1">Highest Points</p>
                  <p className="text-2xl font-bold">2,500</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-card rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-full ${i % 2 === 0 ? 'bg-green-600' : 'bg-red-600'} flex items-center justify-center text-white mr-3`}>
                        {i % 2 === 0 ? '✓' : '✗'}
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Final Score Prediction</h4>
                        <p className="text-xs text-gray-400">Arsenal vs Chelsea</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-bold ${i % 2 === 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {i % 2 === 0 ? '+1,200 pts' : '+0 pts'}
                      </p>
                      <p className="text-xs text-gray-400">April 18, 2025</p>
                    </div>
                  </div>
                  
                  <div className="mt-2 p-2 bg-secondary rounded-lg">
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-400">
                        Your prediction: <span className="text-white">2-1</span>
                      </p>
                      <p className="text-sm text-gray-400">
                        Actual result: <span className="text-white">2-1</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
