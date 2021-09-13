export interface BlogPost {
  id: number;
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
