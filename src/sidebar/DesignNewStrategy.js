import "./DesignNewStrategy.css";
import RadioButton from "./RadioButton";
import PopUp from "./PopUp";
import ExcelTable from "./ExcelTable";
import ExcelTransposeTable from "./ExcelTransposeTable";
import ScheduleForm from "./ScheduleForm";

function App() {
  const sampleData = [
    {
      ISIN: "",
      Ticker: "",
      RIC: "",
      Currency: "",
      DividendCurrency: "",
      ExchangeCountry: "",
      DataSource: "",
      Actions: "↓  👁",
    },
    {
      ISIN: "",
      Ticker: "",
      RIC: "",
      Currency: "",
      DividendCurrency: "",
      ExchangeCountry: "",
      DataSource: "",
      Actions: "↓  👁",
    },
    {
      ISIN: "",
      Ticker: "",
      RIC: "",
      Currency: "",
      DividendCurrency: "",
      ExchangeCountry: "",
      DataSource: "",
      Actions: "↓  👁",
    },
    {
      ISIN: "",
      Ticker: "",
      RIC: "",
      Currency: "",
      DividendCurrency: "",
      ExchangeCountry: "",
      DataSource: "",
      Actions: "↓  👁",
    },
  ];
  const sampleTransData = [
    { Currency: "", Static: "", Action: "" },
    { Currency: "", Static: "", Action: "" },
    { Currency: "", Static: "", Action: "" },
    { Currency: "", Static: "", Action: "" },
    { Currency: "", Static: "", Action: "" },
    { Currency: "", Static: "", Action: "" },
    { Currency: "", Static: "", Action: "" },
    { Currency: "", Static: "", Action: "" },
    { Currency: "", Static: "", Action: "" },
    { Currency: "", Static: "", Action: "" },
  ];
  return (
    <div className="container">
      {/* Section 1 */}
      <div className="section2">
        <div className="section2-content">
          <label>SELECT 1: </label>
          <RadioButton
            options={["Replicate Existing Strategy", "Create New Strategy"]}
            labelName={"strategyType"}
          ></RadioButton>
        </div>
        <div className="section2-content">
          <label>SELECT 2: </label>
          <RadioButton
            options={["Index", "Basket", "TWAPS/VWAPS"]}
            labelName={"assetType1"}
          ></RadioButton>
        </div>
        <div className="section2-content">
          <label>SELECT 3: </label>
          <RadioButton
            options={["Eq", "Eq Drv", "Rates", "Comm", "Multi Asset"]}
            labelName={"assetType2"}
          ></RadioButton>
        </div>
      </div>
      <div className="section">
        <ScheduleForm></ScheduleForm>
      </div>
      <div className="section section4">
        <div className="row">
          <h4>Underlying Instrument</h4>
          <PopUp></PopUp>
        </div>
        <div style={{ width: "100%" }}>
          <div style={{ width: "600px", height: "auto", margin: "10px 50px" }}>
            <ExcelTable data={sampleData} />
          </div>
        </div>
      </div>
      <div className="section section5">
        <h4>Parameters</h4>
        <ExcelTransposeTable data={sampleTransData} />
        <button className="btn" style={{ width: "150px" }}>
          Edit and Update
        </button>
      </div>
      <div className="section section6">
        <h4>Backtest Parameters</h4>
        <div className="backtest-grid">
          <div className="row">
            <label>From Date:</label>
            <input type="date" />
            <label>Data Sufficiency Check:</label>
            <input type="text" placeholder="check" />
          </div>
          <div className="row">
            <label>To Date:</label>
            <input type="date" />
            <label>Switch Date for Data Source:</label>
            <input type="date" />
          </div>
        </div>
      </div>
      <div className="generate-btn">
        <button className="btn">Generate Backtest</button>
      </div>
    </div>
  );
}

export default App;
