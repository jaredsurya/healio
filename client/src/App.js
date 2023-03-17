import { useState, useEffect } from "react";
import "./App.css";
import themeOptions from "./utils/themeOptions.js";
import { ThemeProvider } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Main from "./pages/Main";
import UserContext from "./utils/userContext";
import Protected from "./utils/Protected";
import SwitcherContext from "./utils/switcherContext";
import Welcome from "./components/Features/Welcome";

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
            {/* <Route path="*" element={<Navigate to="/main" replace />} /> */}
            <Route path="/signin" element={<Auth />} />
            <Route path="/main/*" element={<Main />} />
          </Routes>
          </SwitcherContext.Provider>
        </UserContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
