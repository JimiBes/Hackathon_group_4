import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Results";
import AboutUs from "./pages/AboutUs";

function App() {
  const API_KEY = "PuLQi5pRZFopouLskrF8zM5k9asnF6L8";
  const API_SECRET = "c2MfCusfHLwDkhGl";

  function getAccessToken() {
    const endpointUrl = "https://test.api.amadeus.com/v1/security/oauth2/token";
    const data = new URLSearchParams();
    data.append("grant_type", "client_credentials");
    data.append("client_id", API_KEY);
    data.append("client_secret", API_SECRET);

    return axios
      .post(endpointUrl, data, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((response) => response.data.access_token)
      .catch((error) => {
        console.log("Erreur de récupération du token d'accès : ", error);
        throw error;
      });
  }

  const latitude = 41.397158;
  const longitude = 2.160873;
  const radius = 1;

  function getActivities() {
    return getAccessToken().then((token) => {
      const endpointUrl =
        "https://test.api.amadeus.com/v1/shopping/activities?latitude=${latitude}&longitude=${longitude}&radius=${radius}&limit=9";

      return axios
        .get(endpointUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => response.data.data)
        .catch((error) => {
          console.log("Erreur de récupération des activités: ", error);
          throw error;
        });
    });
  }

  const [activities, setActivities] = useState([]);
  useEffect(() => {
    getActivities().then((data) => {
      setActivities(data.slice(0, 9));
    });
  }, []);

  console.log(activities);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home activities={activities} setActivities={setActivities} />
          }
        />
        <Route
          path="/results"
          element={
            <Results activities={activities} setActivities={setActivities} />
          }
        />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
