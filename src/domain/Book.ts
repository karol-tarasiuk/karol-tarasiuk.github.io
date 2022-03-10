export interface Book {
  title: string;
  author: string;
  publishYear: string;
  publisher: string;
  language: string;
  edition: string;
  isbn: string;
  originalTitle: string | undefined;
  originalPublishYear: string | undefined;
  properties: BookProperties;
  progress: BookProgress;
}

export interface BookProperties {
  pages: number;
  format: string;
}

export interface BookProgress {
  state: string;
  started: string | null;
  finished: string | null;
  rating: number | null;
}