
import { Team, Match, Prediction, User, Group } from '@/types';

// Team Data
export const teams: Team[] = [
  {
    id: 'arsenal',
    name: 'Arsenal',
    shortName: 'ARS',
    colorClass: 'bg-team-arsenal',
    gradientClass: 'from-team-arsenal to-red-700',
    badge: '/lovable-uploads/fe9031e1-183a-4813-bc29-24d28c48c8e9.png'
  },
  {
    id: 'chelsea',
    name: 'Chelsea',
    shortName: 'CHE',
    colorClass: 'bg-team-chelsea',
    gradientClass: 'from-team-chelsea to-blue-700',
    badge: '/lovable-uploads/7d2cc986-a515-40be-99e7-3c522cb5c088.png'
  },
  {
    id: 'liverpool',
    name: 'Liverpool',
    shortName: 'LIV',
    colorClass: 'bg-team-liverpool',
    gradientClass: 'from-team-liverpool to-red-800',
    badge: '/lovable-uploads/2390f8f3-1c9b-4d3a-85f4-f38c820e4e62.png'
  },
  {
    id: 'man-city',
    name: 'Man City',
    shortName: 'MCI',
    colorClass: 'bg-team-man-city',
    gradientClass: 'from-team-man-city to-blue-500',
    badge: '/lovable-uploads/e4e48559-9876-4433-ba9e-6e32d7a8842f.png'
  },
  {
    id: 'man-utd',
    name: 'Man Utd',
    shortName: 'MUN',
    colorClass: 'bg-team-man-utd',
    gradientClass: 'from-team-man-utd to-red-700',
    badge: '/lovable-uploads/5b6641b6-6989-47e4-8935-21b89be9bd78.png'
  },
  {
    id: 'leeds',
    name: 'Leeds Utd',
    shortName: 'LEE',
    colorClass: 'bg-team-leeds',
    gradientClass: 'from-team-leeds to-yellow-400',
    badge: '/lovable-uploads/f065a576-3050-4253-b396-97f85250d639.png'
  },
  {
    id: 'norwich',
    name: 'Norwich City',
    shortName: 'NOR',
    colorClass: 'bg-team-norwich',
    gradientClass: 'from-green-500 to-team-norwich',
    badge: '/lovable-uploads/0eb9a6f3-8bd4-4264-88a8-f2056afec882.png'
  },
  {
    id: 'everton',
    name: 'Everton',
    shortName: 'EVE',
    colorClass: 'bg-team-everton',
    gradientClass: 'from-team-everton to-blue-700',
    badge: '/lovable-uploads/b54d4c90-cf03-4412-8b8e-26c669dd42a8.png'
  },
  {
    id: 'west-ham',
    name: 'West Ham',
    shortName: 'WHU',
    colorClass: 'bg-team-west-ham',
    gradientClass: 'from-team-west-ham to-red-800',
    badge: '/lovable-uploads/43df9087-51b8-4967-a3f7-0c3592559c73.png'
  },
  {
    id: 'watford',
    name: 'Watford',
    shortName: 'WAT',
    colorClass: 'bg-team-watford',
    gradientClass: 'from-team-watford to-yellow-400',
    badge: '/lovable-uploads/9b743df6-1cb8-4254-b545-3d8000ae4339.png'
  }
];

// Match Data
export const todayMatches: Match[] = [
  {
    id: 'match-1',
    homeTeam: teams.find(team => team.id === 'arsenal')!,
    awayTeam: teams.find(team => team.id === 'chelsea')!,
    date: '2025-04-20',
    time: '15:00',
    league: 'Premier League',
    status: 'live',
    homeScore: 2,
    awayScore: 3,
    timeElapsed: '24\'',
    stats: {
      possession: [63, 37],
      shots: [12, 8],
      shotsOnTarget: [5, 4],
      passes: [491, 308],
      freeKicks: [8, 5],
      corners: [7, 2],
      offsides: [2, 3],
      fouls: [7, 10],
      yellowCards: [1, 1],
      redCards: [0, 0]
    }
  },
  {
    id: 'match-2',
    homeTeam: teams.find(team => team.id === 'man-city')!,
    awayTeam: teams.find(team => team.id === 'norwich')!,
    date: '2025-04-20',
    time: '15:00',
    league: 'Premier League',
    status: 'live',
    homeScore: 2,
    awayScore: 1,
    timeElapsed: '24\''
  }
];

export const upcomingMatches: Match[] = [
  {
    id: 'match-3',
    homeTeam: teams.find(team => team.id === 'liverpool')!,
    awayTeam: teams.find(team => team.id === 'chelsea')!,
    date: '2025-04-20',
    time: '17:30',
    league: 'FA Cup Semi-Final',
    status: 'upcoming'
  },
  {
    id: 'match-4',
    homeTeam: teams.find(team => team.id === 'west-ham')!,
    awayTeam: teams.find(team => team.id === 'man-utd')!,
    date: '2025-04-20',
    time: '18:30',
    league: 'Premier League',
    status: 'upcoming'
  },
  {
    id: 'match-5',
    homeTeam: teams.find(team => team.id === 'man-city')!,
    awayTeam: teams.find(team => team.id === 'watford')!,
    date: '2025-04-20',
    time: '17:00',
    league: 'Premier League',
    status: 'upcoming'
  }
];

// Prediction Data
export const predictions: Prediction[] = [
  {
    id: 'pred-1',
    matchId: 'match-1',
    type: 'score',
    question: 'WHAT WILL BE THE FINAL SCORE?',
    points: 1200,
    deadline: '2025-04-20T16:00:00',
    participants: 33
  },
  {
    id: 'pred-2',
    matchId: 'match-1',
    type: 'shots',
    question: 'WHAT PLAYER WILL BLOCK THE MOST SHOTS?',
    points: 1800,
    deadline: '2025-04-20T16:00:00',
    participants: 25
  },
  {
    id: 'pred-3',
    matchId: 'match-1',
    type: 'penalty',
    question: 'WHERE WILL THE PENALTY GO?',
    points: 1000,
    deadline: '2025-04-20T16:00:00',
    participants: 43
  }
];

// User Data
export const userData: User = {
  id: 'user-1',
  name: 'John Doe',
  username: '@johndoe',
  avatar: '/lovable-uploads/d57d17c9-e0bc-47fb-83f2-21408e4a76c4.png',
  points: 13240,
  predictions: [],
  favoriteTeams: ['arsenal', 'man-city'],
  level: 'amateur'
};

// Group Data
export const groups: Group[] = [
  {
    id: 'group-1',
    name: 'Chelsea Fans Group',
    type: 'public',
    members: 1034,
    teamId: 'chelsea'
  },
  {
    id: 'group-2',
    name: 'Arsenal Fans Group',
    type: 'public',
    members: 849,
    teamId: 'arsenal'
  },
  {
    id: 'group-3',
    name: 'Football Fans Group',
    type: 'public',
    members: 3490
  }
];

// User levels
export const levels = [
  {
    id: 'beginner',
    name: 'BEGINNER',
    range: '0 → 5,000 pts',
    icon: '🟥',
  },
  {
    id: 'sunday',
    name: 'SUNDAY LEAGUE',
    range: '5,000 → 10,000 pts',
    icon: '🟩',
  },
  {
    id: 'amateur',
    name: 'AMATEUR',
    range: '10,000 → 20,000 pts',
    icon: '🟨',
  },
  {
    id: 'professional',
    name: 'PROFESSIONAL',
    range: '20,000 → 50,000 pts',
    icon: '🟦',
  }
];
