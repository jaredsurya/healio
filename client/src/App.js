import { useState, useEffect } from "react";
import "./App.css";
import themeOptions from "./components/themeOptions.js";
import { ThemeProvider } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Welcome from "./components/Welcome";
import UserContext from "./components/userContext";

function App() {
  const [user, setUser] = useState(null);
  // if (!user)
  // return (
  //   <SignIn />
  // );

  return (
    <div className="App">
      <ThemeProvider theme={themeOptions}>
        <UserContext.Provider value={{ user, setUser }}>
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/welcome" element={<Welcome />} />
          </Routes>
        </UserContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
