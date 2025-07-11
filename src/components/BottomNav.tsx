
import { Home, Trophy, Users, CalendarDays, BarChart3, Bell } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const BottomNav = () => {
  const location = useLocation();
  const path = location.pathname;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: CalendarDays, label: 'Matches', path: '/matches' },
    { icon: Trophy, label: 'Predictions', path: '/predictions' },
    { icon: Users, label: 'Social', path: '/social' },
    { icon: BarChart3, label: 'Stats', path: '/stats' },
  ];

  return (
    <div className={`fixed bottom-4 left-4 right-4 glass rounded-2xl z-40 mx-auto max-w-md ${mounted ? 'slide-up' : 'opacity-0'}`}>
      <div className="flex justify-around items-center">
        {navItems.map((item, index) => {
          const isActive = path === item.path || path.startsWith(`${item.path}/`);
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center py-3 px-3 rounded-xl transition-all duration-300 ${
                isActive 
                  ? 'clay text-primary scale-110' 
                  : 'text-gray-500 hover:text-primary/80 hover:bg-white/5'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <item.icon 
                size={24} 
                className={`${isActive ? 'text-primary' : 'text-gray-500'} transition-colors duration-300`} 
              />
              <span className={`text-xs mt-1 ${isActive ? 'font-medium' : ''}`}>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;
