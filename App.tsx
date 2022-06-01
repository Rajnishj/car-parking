import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"
import HomePage from "./src/Pages/HomePage";
import ParkingLotPage from "./src/Pages/ParkingLotPage";
import Registration from "./src/Pages/Registration";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/parkinglot" element={<ParkingLotPage />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </Router>
  );
}

export default App