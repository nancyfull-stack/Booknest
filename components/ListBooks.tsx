import React, { Dispatch } from "react";
import SingleBook from "./SingleBook";

interface ListBooksProps {
  books: Book[];
  dispatch: Dispatch<Action>;
}

function ListBooks({ books, dispatch }: ListBooksProps) {
  return (
    <section className="px-4 flex flex-wrap gap-2 justify-center mb-10">
      {books.map((book) => (
        <SingleBook key={book.id} book={book} dispatch={dispatch} />
      ))}
    </section>
  );
}

export default ListBooks;