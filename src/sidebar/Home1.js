import ExcelTable from "./ExcelTable";
import Card from "../components/Card";

const sampleData = [
  { Name: "Alice", Age: 25, Country: "USA" , Actions: "↓  👁"},
  { Name: "Bob", Age: 30, Country: "UK" , Actions: "↓  👁" },
  { Name: "Charlie", Age: 28, Country: "Canada" , Actions: "↓  👁" },
];

export default function Home() {
  return (
    <div style={{width: "100%"}}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "20px",
        alignItems: "center",
        justifyContent: "center",
        margin: "20px 30px"
        }}>
          <Card title="Design New Strategy" text="Comprehensive Framework for Designing and Automating  New Index Strategies Using Advanced Analytical Tools"></Card>
          <Card title="Strategy Analyzer"></Card>
          <Card title="Auto Rulebook"></Card>
          <Card title="Marketing Material"></Card>
      </div>
      <div style={{width: "500px", height: "500px", margin: "20px 50px"}}>
        <h2>Excel-like Table</h2>
        <ExcelTable data={sampleData} />
      </div>
    </div>
  );
}