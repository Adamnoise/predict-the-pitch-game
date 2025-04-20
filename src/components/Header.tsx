
import { Settings, User, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

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
            className="mr-4 text-gray-400 hover:text-white"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
        
        {showSettings && (
          <Link to="/settings" className="text-gray-400 hover:text-white">
            <Settings size={22} />
          </Link>
        )}
      </div>
      
      <h1 className="text-2xl font-bold tracking-wider uppercase">{title}</h1>
      
      <div className="flex items-center gap-4">
        {showBell && (
          <div className="relative">
            <Link to="/notifications" className="text-gray-400 hover:text-white">
              <Bell size={22} />
            </Link>
            {bellCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
                {bellCount}
              </span>
            )}
          </div>
        )}
        
        {showProfile && (
          <Link to="/profile" className="text-gray-400 hover:text-white">
            <User size={22} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
