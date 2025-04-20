
import { Home, Trophy, Users, CalendarDays, BarChart3 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const BottomNav = () => {
  const location = useLocation();
  const path = location.pathname;

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: CalendarDays, label: 'Matches', path: '/matches' },
    { icon: Trophy, label: 'Predictions', path: '/predictions' },
    { icon: Users, label: 'Social', path: '/social' },
    { icon: BarChart3, label: 'Stats', path: '/stats' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#16182B] border-t border-[#242747] py-1 z-40">
      <div className="flex justify-around items-center">
        {navItems.map((item) => {
          const isActive = path === item.path || path.startsWith(`${item.path}/`);
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center py-2 px-3 relative ${
                isActive 
                  ? 'text-primary after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1/2 after:h-0.5 after:bg-primary after:rounded-full'
                  : 'text-gray-500'
              }`}
            >
              <item.icon 
                size={24} 
                className={`${isActive ? 'text-primary' : 'text-gray-500'} ${isActive ? 'animate-pulse-light' : ''}`} 
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
