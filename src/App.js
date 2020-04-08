import React from "react";
import NavBar from "./components/NavBar";
import BookList from "./components/BookList";
import ThemeContextProvider from "./contexts/ThemeContext";
import ToggleTheme from "./components/ToggleTheme";
import AuthContextProvider from "./contexts/AuthContext";
import BookContextProvider from "./contexts/BookContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <NavBar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ToggleTheme />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
