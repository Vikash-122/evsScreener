import ExcelTable from "./ExcelTable";
import Card from "../components/Card";

const sampleData = [
  { Name: "Alice", Age: 25, Country: "USA" , Actions: "↓  👁"},
  { Name: "Bob", Age: 30, Country: "UK" , Actions: "↓  👁" },
  { Name: "Charlie", Age: 28, Country: "Canada" , Actions: "↓  👁" },
];

export default function Home({setPage}) {
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
          <Card title="Design New Strategy" text="Comprehensive Framework for Designing and Automating  New Index Strategies Using Advanced Analytical Tools" page="" setPage={setPage}></Card>
          <Card title="Strategy Analyzer" text="The Analyzer enables rapid creation of rulebook summaries, aggregation of data requirements, and comparative analysis to highlight differences across strategies" page="" setPage={setPage}></Card>
          <Card title="Auto Rulebook" text="Auto-generate draft rulebooks using backtested rules and predefined templates for faster strategy deployment" page="" setPage={setPage}></Card>
          <Card title="Marketing Material" text="Auto-create factsheets, flyers, and decks enriched with AI-driven performance insights" page="" setPage={setPage}></Card>
      </div>
      <div style={{width: "500px", height: "500px", margin: "20px 50px"}}>
        <h2>Discover What's New</h2>
        <ExcelTable data={sampleData} />
      </div>
    </div>
  );
}