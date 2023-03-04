import { useState, useEffect } from "react";
import "./App.css";
import themeOptions from "./utils/themeOptions.js";
import { ThemeProvider } from "@mui/material/styles";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Auth from "./pages/Auth";
import Main from "./pages/Main";
import UserContext from "./utils/userContext";
import Protected from "./utils/Protected";

function App() {
  const [user, setUser] = useState(null);
  
  // const navigate = useNavigate();

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setUser(user);
        });
      } else {
        setUser(null);
        res.json().then((err) => console.log("error in /me",err.error));
      }
    });
  }, []);

  //useEffect(() => {
  // check if user is signed in
  // replace this with your own authentication logic
  //   const signedIn = true; // replace with your own check for signed in user

  //   if (
  //     !signedIn &&
  //     window.location.pathname !== "/signin" &&
  //     window.location.pathname !== "/signup"
  //   ) {
  //     // redirect user to signin page
  //     navigate("/signin");
  //   }
  // }, [user, navigate]);
  // MAKE USER ROLES AUTHENTICATE PATHS SPECIFICALLY FOR THEM
  // AUTHENTICATE USER AND USE LOGIC TO REDIRECT TO /SIGNIN IF USER IS NOT LOGGED IN

  // SET UP IMAGE UPLOADING FEATURE AS A PART OF USER PROFILE EDITOR
  return (
    <div className="App">
      <ThemeProvider theme={themeOptions}>
        <UserContext.Provider value={{ user, setUser }}>
          
          <Routes>
            {!user ? <Route path="/signin" element={<Auth />} /> : <Route path="/main" element={<Main />} />}
            {/* PROTECTED ROUTES BELOW */}

            {/* MAY WANT SOME OF THESE FOR JUST VISITOR OR JUST HEALER USERS */}
            {/* <Route
              path="/main"
              element={
                <Protected >
                  <Main />
                </Protected>
              }
            /> */}
            {/* CATCHES ALL NO MATCH ROUTES AND RENAVIGATES THEM */}
            <Route path="*" element={<Navigate to="/signin" replace />} />
          </Routes>

        </UserContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
