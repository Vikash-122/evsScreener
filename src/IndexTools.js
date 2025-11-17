import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import SidebarIndexTools from "./SidebarIndexTools/sidebarIndexTools";
import Analytics from "./SidebarIndexTools/Analytics";
import DailyCalculations from "./SidebarIndexTools/DailyCalculations";
import OnboardNewIndex from "./SidebarIndexTools/OnboardNewIndex";
import Rebalance from "./SidebarIndexTools/Rebalance";

function App({page, link, setPage}) {
  return (
        <div id="home-root">
          <SidebarIndexTools page={page} setPage={setPage}/>

          {page === "Onboard New Index" && <OnboardNewIndex/>}
          {page === "Daily Calculations" && <DailyCalculations />}
          {page === "Rebalance" && <Rebalance />}
          {page === "Analytics" && <Analytics />}
    </div>
  );
}

export default App;
