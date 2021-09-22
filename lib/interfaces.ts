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
  day: string;
  year: string;
}

export interface CorporateLogo {
  id: number;
  name: string;
  src: string;
}
