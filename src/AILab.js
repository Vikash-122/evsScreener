import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import {Routes, Route}  from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import Analytics from "./SidebarIndexTools/Analytics";
import DailyCalculations from "./SidebarIndexTools/DailyCalculations";
import OnboardNewIndex from "./SidebarIndexTools/OnboardNewIndex";
import Rebalance from "./SidebarIndexTools/Rebalance";
import EmptyPage from "./sidebar/EmptyPage";

function App({page, setPage, link}) {
  return (
    <div>
        <div id="home-root">
          <Sidebar page={page} setPage={setPage} link={link}/>

          {page === "Onboard New Index" && <OnboardNewIndex/>}
          {page === "Daily Calculations" && <DailyCalculations />}
          {page === "Rebalance" && <Rebalance />}
          {page === "Analytics" && <Analytics />}
          {page === "EmptyPage" && <EmptyPage/>}
        </div>
    </div>
  );
}

export default App;