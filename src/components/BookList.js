import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { BookContext } from "../contexts/BookContext";

export default function BookList() {
  const { books } = useContext(BookContext);
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className="book-list"
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <ul>
        {books.map((book) => (
          <li key={book.id} style={{ background: theme.ui }}>
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

// export default class BookList extends Component {
//   static contextType = ThemeContext;

//   render() {
//     const { isLightTheme, dark, light } = this.context;
//     const theme = isLightTheme ? light : dark;
//     return (
//       <div
//         className="book-list"
//         style={{ color: theme.syntax, background: theme.bg }}
//       >
//         <ul>
//           <li style={{ background: theme.ui }}>The way of kings</li>
//           <li style={{ background: theme.ui }}>The name of the wind</li>
//           <li style={{ background: theme.ui }}>The final empire</li>
//         </ul>
//       </div>
//     );
//   }
// }
