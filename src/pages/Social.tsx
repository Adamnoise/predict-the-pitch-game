
import { useState } from 'react';
import Header from '@/components/Header';
import { groups } from '@/lib/data';
import { Globe, Lock, Plus, Search, Users } from 'lucide-react';

const Social = () => {
  const [activeTab, setActiveTab] = useState<'groups' | 'friends'>('groups');
  const [lobbyType, setLobbyType] = useState<'public' | 'private'>('public');
  
  return (
    <div className="min-h-screen bg-background pb-16">
      <Header title="SOCIAL" />
      
      <div className="p-4">
        <div className="mb-6 flex rounded-full bg-secondary p-1">
          <button
            className={`flex-1 py-3 rounded-full font-semibold transition-colors ${
              activeTab === 'groups' ? 'bg-primary text-white' : 'text-gray-400'
            }`}
            onClick={() => setActiveTab('groups')}
          >
            Groups
          </button>
          <button
            className={`flex-1 py-3 rounded-full font-semibold transition-colors ${
              activeTab === 'friends' ? 'bg-primary text-white' : 'text-gray-400'
            }`}
            onClick={() => setActiveTab('friends')}
          >
            Friends
          </button>
        </div>
        
        {activeTab === 'groups' && (
          <>
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-4">Select lobbies</h3>
              <div className="flex rounded-full bg-secondary p-1">
                <button
                  className={`flex-1 py-3 rounded-full font-semibold transition-colors ${
                    lobbyType === 'public' ? 'bg-primary text-white' : 'text-gray-400'
                  }`}
                  onClick={() => setLobbyType('public')}
                >
                  Public
                </button>
                <button
                  className={`flex-1 py-3 rounded-full font-semibold transition-colors ${
                    lobbyType === 'private' ? 'bg-primary text-white' : 'text-gray-400'
                  }`}
                  onClick={() => setLobbyType('private')}
                >
                  Private
                </button>
              </div>
            </div>
            
            <div className="mb-6 relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search groups..."
                className="w-full pl-10 pr-4 py-3 bg-secondary border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {groups.map(group => (
                <div 
                  key={group.id}
                  className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-6 transform transition-transform hover:scale-105 cursor-pointer"
                >
                  <h3 className="text-lg font-bold text-white mb-2">{group.name}</h3>
                  <div className="flex items-center text-white/80 text-sm mb-1">
                    <Users size={14} className="mr-1" />
                    <span>{group.members.toLocaleString()}</span>
                  </div>
                  {group.teamId && (
                    <div className="flex items-center text-white/80 text-sm">
                      <span>Team: {group.teamId.toUpperCase()}</span>
                    </div>
                  )}
                </div>
              ))}
              
              <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-6 flex flex-col items-center justify-center transform transition-transform hover:scale-105 cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mb-2">
                  <Plus size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-white">Create Group</h3>
              </div>
            </div>
          </>
        )}
        
        {activeTab === 'friends' && (
          <div className="space-y-6">
            <div className="mb-6 relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search friends..."
                className="w-full pl-10 pr-4 py-3 bg-secondary border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white"
              />
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">My Friends</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[1, 2, 3].map(i => (
                  <div 
                    key={i}
                    className="bg-secondary rounded-xl p-4 flex flex-col items-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-gray-700 mb-3 overflow-hidden">
                      <img 
                        src={`/lovable-uploads/d57d17c9-e0bc-47fb-83f2-21408e4a76c4.png`} 
                        alt="Friend avatar" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-medium text-white mb-1">User {i}</h4>
                    <p className="text-xs text-gray-400">@user{i}</p>
                    <div className="mt-2 bg-gray-700 px-3 py-1 rounded-full text-xs text-gray-300">
                      {Math.floor(Math.random() * 50000)} pts
                    </div>
                  </div>
                ))}
                
                <div className="bg-secondary rounded-xl p-4 flex flex-col items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mb-3">
                    <Plus size={20} className="text-white" />
                  </div>
                  <h4 className="font-medium text-white">Add Friend</h4>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Social;
