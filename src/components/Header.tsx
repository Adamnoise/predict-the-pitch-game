
import { Settings, User, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import NotificationsPanel from './NotificationsPanel';

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  onBackClick?: () => void;
  showBell?: boolean;
  showSettings?: boolean;
  showProfile?: boolean;
  bellCount?: number;
}

const Header = ({ 
  title, 
  showBackButton = false, 
  onBackClick, 
  showBell = true, 
  showSettings = true,
  showProfile = true,
  bellCount = 1 
}: HeaderProps) => {
  return (
    <div className="flex items-center justify-between w-full p-4 bg-transparent">
      <div className="flex items-center">
        {showBackButton && (
          <button 
            onClick={onBackClick}
            className="mr-4 text-gray-400 hover:text-white transition-colors duration-200"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
        
        {showSettings && (
          <Link to="/settings" className="text-gray-400 hover:text-white transition-colors duration-200">
            <Settings size={22} />
          </Link>
        )}
      </div>
      
      <h1 className="text-2xl font-bold tracking-wider uppercase fade-in">{title}</h1>
      
      <div className="flex items-center gap-4">
        {showBell && <NotificationsPanel />}
        
        {showProfile && (
          <Link to="/profile" className="text-gray-400 hover:text-white transition-colors duration-200">
            <User size={22} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
