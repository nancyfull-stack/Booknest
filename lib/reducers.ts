export function booksReducer(state: Book[], action: Action): Book[] {
    switch (action.type) {
      case "add":
        const newBook = {
          id: crypto.randomUUID(),
          title: action.payload.title,
          author: action.payload.author,
          likes: 0,
        };
        return [newBook, ...state];
      case "delete":
        return state.filter((book) => book.id !== action.payload.id);
      case "sort":
        return [...state].sort((a, b) => b.likes - a.likes);
      case "like":
        return state.map((book) =>
          book.id === action.payload.id
            ? { ...book, likes: book.likes + 1 }
            : book
        );
      case "dislike":
        return state.map((book) =>
          book.id === action.payload.id
            ? { ...book, likes: book.likes - 1 }
            : book
        );
      default:
        return state;
    }
  }