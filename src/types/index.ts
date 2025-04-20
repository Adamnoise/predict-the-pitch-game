
export type Team = {
  id: string;
  name: string;
  shortName: string;
  colorClass: string;
  gradientClass?: string;
  badge: string;
};

export type Match = {
  id: string;
  homeTeam: Team;
  awayTeam: Team;
  date: string;
  time: string;
  league: string;
  status: 'upcoming' | 'live' | 'finished';
  homeScore?: number;
  awayScore?: number;
  timeElapsed?: string;
  stats?: MatchStats;
};

export type MatchStats = {
  possession: [number, number];
  shots: [number, number];
  shotsOnTarget: [number, number];
  passes: [number, number];
  freeKicks: [number, number];
  corners: [number, number];
  offsides: [number, number];
  fouls: [number, number];
  yellowCards: [number, number];
  redCards: [number, number];
};

export type Prediction = {
  id: string;
  matchId: string;
  type: 'score' | 'next-goal' | 'penalty' | 'shots' | 'cards';
  question: string;
  options?: string[];
  points: number;
  deadline: string;
  participants: number;
};

export type UserPrediction = {
  id: string;
  predictionId: string;
  answer: string;
  timestamp: string;
};

export type User = {
  id: string;
  name: string;
  username: string;
  avatar: string;
  points: number;
  predictions: UserPrediction[];
  favoriteTeams: string[];
  level: 'beginner' | 'sunday' | 'amateur' | 'professional';
};

export type Group = {
  id: string;
  name: string;
  type: 'public' | 'private';
  members: number;
  avatar?: string;
  teamId?: string;
};
