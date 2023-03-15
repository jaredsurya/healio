import { useState, useEffect } from "react";
import "./App.css";
import themeOptions from "./utils/themeOptions.js";
import { ThemeProvider } from "@mui/material/styles";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Auth from "./pages/Auth";
import Main from "./pages/Main";
import UserContext from "./utils/userContext";
import Protected from "./utils/Protected";
import SwitcherContext from "./utils/switcherContext";
import Welcome from "./components/Features/Welcome";

// infinite loops from rerendering user?

function App() {
  const [user, setUser] = useState(null);
  const [feed, setFeed] = useState("welcome")

  const widgetClickHandler = (name) => {
    if (!name){
      return <Welcome size="full" />
    }
    else{
      return <name size="full"/>
    }
  }
  
    useEffect(() => {
      fetch("/me").then((res) => {
        if (res.ok) {
          res.json().then((data) => {
            setUser(data);
          });
        } else {
          setUser(null);
          res.json().then((err) => console.log("error in /me",err.error));
        }
      });
    }, []);
  
  // MAKE USER ROLES AUTHENTICATE PATHS SPECIFICALLY FOR THEM
  
  // AUTHENTICATE USER AND USE LOGIC TO REDIRECT TO /SIGNIN IF USER IS NOT LOGGED IN

  // SET UP IMAGE UPLOADING FEATURE AS A PART OF USER PROFILE EDITOR

  // USE A SWITCH STATEMENT TO CONDITIONALLY RENDER HEALER VS VISITOR DATA TYPES 
  
  if(!user){
    return (
      <UserContext.Provider value={{ user, setUser }} >
        <Auth />
      </UserContext.Provider>
    )
  }


  return (
    <div className="App">
      <ThemeProvider theme={themeOptions}>
        <UserContext.Provider value={{ user, setUser }}>
          <SwitcherContext.Provider value={{feed, setFeed, widgetClickHandler}}>
          <Routes>
            {/* {!user ? <Route path="/signin" element={<Auth />} /> : <Route path="/main" element={<Main />} />} */}
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
            <Route path="*" element={<Navigate to="/main" replace />} />
            <Route path="/main" element={<Main />} />
            <Route path="/signin" element={<Auth />} />
          </Routes>
          </SwitcherContext.Provider>
        </UserContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
