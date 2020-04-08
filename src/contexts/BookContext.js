import React, { createContext, useState } from "react";
import uuid from "uuid/v1";

export const BookContext = createContext();

const initialBooks = [
  { id: uuid(), title: "To kill a mokingbird" },
  { id: uuid(), title: "Angel & Demons" },
  { id: uuid(), title: "Harry potter and deathly hallows" },
  { id: uuid(), title: "Harry pooter and chamber of secrets" },
];

export default function BookContextProvider(props) {
  const [books, setBooks] = useState(initialBooks);
  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
}
