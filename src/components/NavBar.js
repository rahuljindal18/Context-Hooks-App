import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

export default function NavBar() {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <nav
      style={{
        background: theme.ui,
        color: theme.syntax,
      }}
    >
      <h1>Context App</h1>
      <div onClick={toggleAuth}>
        {isAuthenticated ? "Logged In" : "Logged Out"}
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

// export default class NavBar extends Component {
//   render() {
//     return (
//       <AuthContext.Consumer>
//         {(authContext) => (
//           <ThemeContext.Consumer>
//             {(themeContext) => {
//               const { isAuthenticated, toggleAuth } = authContext;
//               const { isLightTheme, dark, light } = themeContext;
//               const theme = isLightTheme ? light : dark;
//               return (
//                 <nav
//                   style={{
//                     background: theme.ui,
//                     color: theme.syntax,
//                   }}
//                 >
//                   <h1>Context App</h1>
//                   <div onClick={toggleAuth}>
//                     {isAuthenticated ? "Logged In" : "Logged Out"}
//                   </div>
//                   <ul>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>Contact</li>
//                   </ul>
//                 </nav>
//               );
//             }}
//           </ThemeContext.Consumer>
//         )}
//       </AuthContext.Consumer>
//     );
//   }
// }
