import { useState, useEffect } from "react";
import "./App.css";
import themeOptions from "./components/themeOptions.js";
import { ThemeProvider } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Main from "./components/Main";
import UserContext from "./components/userContext";

function App() {
  const [user, setUser] = useState(null);

  // MAKE USER ROLES AUTHENTICATE PATHS SPECIFICALLY FOR THEM
  // AUTHENTICATE USER AND USE LOGIC TO REDIRECT TO /SIGNIN IF USER IS NOT LOGGED IN

  // SET UP IMAGE UPLOADING FEATURE AS A PART OF USER PROFILE EDITOR

  return (
    <div className="App">
      <ThemeProvider theme={themeOptions}>
        <UserContext.Provider value={{ user, setUser }}>
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/main" element={<Main />} />
          </Routes>
        </UserContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
