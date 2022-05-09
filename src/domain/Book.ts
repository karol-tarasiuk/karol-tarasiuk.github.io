export interface Book {
  title: string;
  author: string;
  language: string;
  properties: BookProperties;
  progress: BookProgress;
}

export interface BookProperties {
  pages: number;
  genre: string;
}

export interface BookProgress {
  started: string | null;
  finished: string | null;
  rating: number | null;
}