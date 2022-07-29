import { Book } from "@/domain/Book";

export const filterBooks = (books: Book[], searchText: string): Book[] => {
  if(!searchText || searchText.length == 0) {
    return books;
  }

  const normalizedSearchText = searchText.toLowerCase();
  const stringParts = normalizedSearchText.split(':');
  let filteredBooks: Book[] = [];

  if (stringParts.length === 1) {
    filteredBooks = books.filter(b => b.author.toLowerCase().includes(normalizedSearchText) || b.title.includes(normalizedSearchText));
  }
  else {
    filteredBooks = books.filter(b => mapProperty(stringParts[0], b).toLowerCase().includes(stringParts[1]));
  }

  return filteredBooks;
  return books;
};

const mapProperty = (type: string, book: Book) => {
  switch(type) {
    case 'title': return book.title;
    case 'genre': return book.properties.genre;
    case 'author': return book.author;
    case 'year': return book.progress.finished ?? '';
    default: return '';
  }
};