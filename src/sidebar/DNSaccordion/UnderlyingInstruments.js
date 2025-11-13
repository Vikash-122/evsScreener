import PopUp from '../PopUp';
import ExcelTable from '../ExcelTable';

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

export default function UnderlyingInstruments(){
    return(
        <div className="row">
           <h4>Underlying Instrument</h4>
           <PopUp></PopUp>
         <div style={{ width: "100%" }}>
           <div style={{ width: "600px", height: "auto", margin: "10px 50px" }}>
             <ExcelTable data={sampleData} />
           </div>
         </div>
         </div>
    )
}