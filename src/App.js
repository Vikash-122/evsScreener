import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { useState } from "react";
import {Routes, Route}  from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./Home";
import AILabs from "./AILab"
import Screener from "./Screener"
import IndexTools from './IndexTools'
import PortfolioManagmentServices from "./PortfolioManagmentServices"
import RepotingAndAnalytics from "./ReportingAndAnalytics"

function App() {
  const [page, setPage] = useState("Home");
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path = "/" element={<Home />} />
        <Route path = "/Screener" element={<Screener page={page} link="Screener" setPage={setPage} />}/>
        <Route path = "/IndexTools" element={<IndexTools page={page} link="IndexTools" setPage={setPage} />}/>
        <Route path = "/ReportingAndAnalytics" element={<RepotingAndAnalytics page={page} link="ReportingAndAnalytics" setPage={setPage} />}/>
        <Route path = "/PortfolioManagmentServices" element={<PortfolioManagmentServices page={page} link="PortfolioManagmentServices" setPage={setPage} />}/>
        <Route path = "/AILab" element={<AILabs page={page} link="AILab" setPage={setPage} />} />
      </Routes>
    </div>
  );
}

export default App;
