import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Sidebar from "./sidebar/Sidebar";
import Home1 from "./sidebar/Home1";
import UniverseBuilder from "./sidebar/UniverseBuilder";
import DesignNewStrategy from "./sidebar/DesignNewStrategy";
import EmptyPage from "./sidebar/EmptyPage";
import GeneralRules from './sidebar/GeneralRules'
import CustomStrategyBuilder from "./sidebar/CustomStrategyBuilder";
import Backtesting from "./sidebar/Backtesting";
import PerfAnalytics from "./sidebar/Analytics";

function App({page, setPage, link}) {
  console.log("App rendered");
  return (
        <div id="home-root">
          <Sidebar page={page} setPage={setPage}  link={link}/>

          {page === "Home" && <Home1 />}
          {page === "General Rules" && <GeneralRules/>}
          {page === "Universe Builder" && <UniverseBuilder />}
          {page === "Custom Strategy Builder" && <CustomStrategyBuilder />}
          {page === "Backtesting" && <Backtesting />}
          {page === "Analytics" && <PerfAnalytics />}
          {page === "Design New Strategy" && <DesignNewStrategy />}
          {page === "EmptyPage" && <EmptyPage/>}
        </div>
  );
}

export default App;
