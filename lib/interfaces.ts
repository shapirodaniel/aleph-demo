export interface BlogPost {
  id: number;
  title: string;
  text: string;
  src: string;
  createdAt: Date;
}

export interface ParsedDateObject {
  weekday: string;
  month: string;
  day: number;
  year: number;
}

export interface CorporateLogo {
  id: number;
  name: string;
  src: string;
}
