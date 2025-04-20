
import { useState } from 'react';
import { Bell, X, Settings, ChevronRight } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { teams } from '@/lib/data';

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  teamId?: string;
}

const NotificationsPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      title: 'Mérkőzés kezdődik',
      message: 'A Manchester United - Chelsea meccs 30 perc múlva kezdődik',
      time: '30p',
      read: false,
      teamId: 'man-utd'
    },
    {
      id: '2',
      title: 'Góllövő statisztika',
      message: 'Az Arsenal - Liverpool mérkőzésen nagy valószínűséggel 2+ gól lesz',
      time: '1ó',
      read: false,
      teamId: 'arsenal'
    },
    {
      id: '3',
      title: 'Új tippverseny',
      message: 'Új tippverseny kezdődött, nyerj akár 500 pontot!',
      time: '3ó',
      read: true
    }
  ]);

  const [teamAlerts, setTeamAlerts] = useState({
    'man-utd': true,
    'arsenal': true,
    'chelsea': false,
    'liverpool': false
  });

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const toggleTeamAlert = (teamId: string) => {
    setTeamAlerts({
      ...teamAlerts,
      [teamId]: !teamAlerts[teamId]
    });
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="relative text-gray-400 hover:text-white"
      >
        <Bell size={22} />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
            {unreadCount}
          </span>
        )}
      </button>
      
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex justify-end">
          <div className="w-full max-w-md h-full bg-background overflow-auto animate-slide-in-right">
            <div className="sticky top-0 bg-card p-4 flex justify-between items-center border-b border-border z-10">
              <h2 className="text-xl font-bold">Értesítések</h2>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center"
              >
                <X size={18} className="text-white" />
              </button>
            </div>
            
            <div className="p-4">
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-400 mb-2">MA</h3>
                {notifications.map(notification => (
                  <div 
                    key={notification.id}
                    className={`clay p-3 rounded-xl mb-3 ${!notification.read ? 'border-l-4 border-primary' : ''}`}
                    onClick={() => markAsRead(notification.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex gap-3">
                        {notification.teamId && (
                          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                            <img 
                              src={teams.find(t => t.id === notification.teamId)?.badge}
                              alt="Team" 
                              className="w-full h-full object-contain"
                            />
                          </div>
                        )}
                        <div>
                          <h4 className="font-semibold">{notification.title}</h4>
                          <p className="text-sm text-gray-400">{notification.message}</p>
                        </div>
                      </div>
                      <span className="text-xs text-gray-500">{notification.time}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mb-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-md font-semibold">Értesítési beállítások</h3>
                  <Settings size={18} className="text-gray-400" />
                </div>
                
                <div className="space-y-3">
                  <div className="clay p-3 rounded-xl">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Élő meccs értesítések</span>
                      <Switch checked={true} />
                    </div>
                  </div>
                  
                  <div className="clay p-3 rounded-xl">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Tippverseny emlékeztetők</span>
                      <Switch checked={true} />
                    </div>
                  </div>
                  
                  <div className="clay p-3 rounded-xl">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Barátok aktivitása</span>
                      <Switch checked={false} />
                    </div>
                  </div>
                  
                  <h4 className="text-sm font-medium text-gray-400 mt-4 mb-2">Csapat értesítések</h4>
                  
                  {Object.entries(teamAlerts).map(([teamId, enabled]) => {
                    const team = teams.find(t => t.id === teamId);
                    if (!team) return null;
                    
                    return (
                      <div key={teamId} className="clay p-3 rounded-xl">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full overflow-hidden">
                              <img src={team.badge} alt={team.name} className="w-full h-full object-contain" />
                            </div>
                            <span className="font-medium">{team.name}</span>
                          </div>
                          <Switch 
                            checked={enabled} 
                            onCheckedChange={() => toggleTeamAlert(teamId)} 
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NotificationsPanel;
