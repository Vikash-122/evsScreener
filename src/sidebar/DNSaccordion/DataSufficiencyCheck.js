import PopUp from '../PopUp';
import ExcelTable from '../ExcelTable';

const sampleData = [
    {
      ISIN: "",
      Ticker: "",
      RIC: "",
      Date: "",
      DataAvil: "",
      DataSource: " ",
      Actions: "↓  👁",
    },
    {
        ISIN: "",
        Ticker: "",
        RIC: "",
        Date: "",
        DataAvil: "",
        DataSource: " ",
        Actions: "↓  👁",
    },
    {
        ISIN: "",
        Ticker: "",
        RIC: "",
        Date: "",
        DataAvil: "",
        DataSource: " ",
        Actions: "↓  👁",
    },
    {
        ISIN: "",
        Ticker: "",
        RIC: "",
        Date: "",
        DataAvil: "",
        DataSource: " ",
        Actions: "↓  👁",
    },
  ];

export default function UnderlyingInstruments(){
    return(
        <div className="section5">
          <div style={{display: "flex", flexDirection: "row", justifyContent: "end", paddingBottom: "5px"}}>
           <PopUp title="Data Feed"></PopUp>
          </div>
         <div style={{ width: "100%" }}>
           <div style={{ width: "100%", height: "auto"}}>
             <ExcelTable data={sampleData} />
           </div>
         </div>
         </div>
    )
}