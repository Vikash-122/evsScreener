import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { useState } from "react";
import Slides from "./components/Slides";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";
import MediaCoverage from "./components/MediaCoverage";
import Chart from "./Chart/Chart";

function App() {
  const [page, setPage] = useState("Home");
  return (
    <div>
      {/* ✅ HOME PAGE */}
        <div className="App">
          <div className="slides">
            <Slides />
          </div>

         <div
            className="d-flex flex-row justify-content-evenly"
            style={{
              marginTop: "-150px",
            }}
          >
            <Card1  />
            <Card3/>
            <Card2 />
          </div>

          <MediaCoverage setPage={setPage} />

          <div className="indices-wrapper">
            <p className="title">Indices</p>
            <p className="subtitle">
              Empowering financial institutions with tailored index design, cross-asset calculation services, and scalable tech platforms—driven by advanced programming, digital transformation, and custom-built solutions.
            </p>
          </div>
          <Chart />
        </div>
    </div>
  );
}

export default App;
