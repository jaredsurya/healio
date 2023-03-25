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
import HealersServicesContext from "./utils/healersServicesContext";

function App() {
  const [user, setUser] = useState(null);
  const [feed, setFeed] = useState("welcome");
  const [services, setServices] = useState([]);
  const [healers, setHealers] = useState([]);

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setUser(data);
        });
      } else {
        setUser(null);
        res.json().then((err) => console.log("error in /me", err.error));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/services").then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setServices(data);
          console.log("svcs", data)
        });
      } else {
        res.json().then((err) => console.log("error in services ", err.error));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/healers").then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setHealers(data);
          console.log("HLRS",data)
        });
      } else {
        res.json().then((err) => console.log("error in services ", err.error));
      }
    });
  }, []);

  if (!user) {
    return (
      <UserContext.Provider value={{ user, setUser }}>
        <Auth />
      </UserContext.Provider>
    );
  }

  return (
    <div className="App">
      <ThemeProvider theme={themeOptions}>
        <UserContext.Provider value={{ user, setUser }}>
          <SwitcherContext.Provider value={{ feed, setFeed }}>
            <HealersServicesContext.Provider value={{services, setServices, healers, setHealers}}>
              <Routes>
                {/* <Route path="*" element={<Navigate to="/main" replace />} /> */}
                <Route path="/signin" element={<Auth />} />
                <Route path="/main/*" element={<Main />} />
              </Routes>
            </HealersServicesContext.Provider>
          </SwitcherContext.Provider>
        </UserContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
