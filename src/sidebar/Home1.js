import ExcelTable from "./ExcelTable";

const sampleData = [
  { Name: "Alice", Age: 25, Country: "USA" , Actions: "↓  👁"},
  { Name: "Bob", Age: 30, Country: "UK" , Actions: "↓  👁" },
  { Name: "Charlie", Age: 28, Country: "Canada" , Actions: "↓  👁" },
];

export default function Home() {
  return (
    <div style={{width: "100%"}}>
      <div style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "flex-start",
        }}>
        <div className="home-data">Analytics</div>
        <div className="home-data">Rebalance</div>
        <div className="home-data">Integeration</div>
      </div>
      <div style={{width: "500px", height: "500px", margin: "20px 50px"}}>
        <h2>Excel-like Table</h2>
        <ExcelTable data={sampleData} />
      </div>
    </div>
  );
}