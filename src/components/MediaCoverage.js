import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import Cards from "./MediaCard";
import building from "./images/back-img.jpg";
import bar from "./images/investing_facts_cover.jfif";
import ai from "./images/AI.png";
import analytics from "./images/analytics-img.jpg";
import calc from "./images/calculations.webp";

export default function MediaCoverage({ setLink, setPage }) {
  return (
    <div className="media-page">
      <div className="empty-page">
        <h2
          style={{
            fontSize: 50,
            textAlign: "center",
            color: "rgba(255, 255, 255, 1)",
            backgroundColor: "transparent",
          }}
        >
          IndexElevate
        </h2>
        <p
          style={{
            fontSize: 25,
            textAlign: "center",
            color: "white",
          }}
        >
          Media coverage & insights from our experts
        </p>
      </div>
      <div
        className="d-flex flex-row justify-content-evenly"
        style={{ flexWrap: "wrap", rowGap: "40px", columnGap: "0px" }}
      >
        <Cards
          title="Backtesting and Rebalancing"
          image={building}
          setLink={setLink}
          setPage={setPage}
          link="Screener"
          page="Home"
          />
        <Cards
          title="Index Calculation"
          image={calc}
          setLink={setLink}
          setPage={setPage}
          link="IndexTools"
          page="Onboard New Index"
          ></Cards>
        <Cards
          title="Reporting and Analytics"
          image={analytics}
          setLink={setLink}
          setPage={setPage}
          link="Reporting and Analytics"
          ></Cards>
        <Cards
          title="Portfolio Managment Services"
          image={bar}
          setLink={setLink}
          setPage={setPage}
          link="Portfolio Managment Services"
          ></Cards>
        <Cards title="AI Lab" image={ai} setLink={setLink} setPage={setPage} link="AI Lab"></Cards>
      </div>
    </div>
  );
}
