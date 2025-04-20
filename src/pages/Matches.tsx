
import { useState } from 'react';
import { todayMatches, upcomingMatches } from '@/lib/data';
import Header from '@/components/Header';
import MatchCard from '@/components/MatchCard';
import MatchDetails from '@/components/MatchDetails';
import { Match } from '@/types';
import { CalendarDays, ChevronLeft, ChevronRight } from 'lucide-react';

const Matches = () => {
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);
  const [selectedDate, setSelectedDate] = useState<number>(0); // 0 = today, 1 = tomorrow, etc.
  
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const today = new Date();
  
  // Generate next 7 days
  const dates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(today);
    date.setDate(date.getDate() + i);
    return {
      date,
      dayOfWeek: daysOfWeek[date.getDay()],
      day: date.getDate()
    };
  });
  
  const handleMatchClick = (match: Match) => {
    setSelectedMatch(match);
  };
  
  const handleCloseMatchDetails = () => {
    setSelectedMatch(null);
  };
  
  // Combine today's matches and upcoming matches based on selected date
  const displayMatches = selectedDate === 0 
    ? todayMatches 
    : upcomingMatches.filter((match, index) => index % (selectedDate + 1) === 0); // Just for demo purposes
  
  return (
    <div className="min-h-screen bg-background pb-16">
      <Header title="MATCHES" />
      
      <div className="p-4">
        <div className="mb-6 relative">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-400 uppercase">AUGUST, 2021</h3>
            <div className="flex space-x-2">
              <button className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white">
                <ChevronLeft size={16} />
              </button>
              <button className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
          
          <div className="flex space-x-3 overflow-x-auto pb-2">
            {dates.map((date, index) => (
              <button
                key={index}
                className={`flex flex-col items-center min-w-[40px] py-2 rounded-lg ${
                  selectedDate === index 
                    ? 'bg-primary text-white' 
                    : 'bg-secondary text-gray-400'
                }`}
                onClick={() => setSelectedDate(index)}
              >
                <span className="text-xs">{date.dayOfWeek}</span>
                <span className="text-lg font-bold">{date.day}</span>
              </button>
            ))}
          </div>
        </div>
        
        <div className="space-y-4">
          {displayMatches.length > 0 ? (
            displayMatches.map((match) => (
              <MatchCard 
                key={match.id} 
                match={match}
                variant="small"
                onClick={() => handleMatchClick(match)}
              />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center h-60">
              <CalendarDays size={48} className="text-gray-500 mb-4" />
              <p className="text-gray-400">No matches scheduled for this day</p>
            </div>
          )}
        </div>
      </div>
      
      {selectedMatch && (
        <MatchDetails 
          match={selectedMatch}
          onClose={handleCloseMatchDetails}
        />
      )}
    </div>
  );
};

export default Matches;
