import "bootstrap/dist/css/bootstrap.css";
import MultiSelectDropdown from "./MultiSelectDropdown";
// import FormSelect from "react-bootstrap/FormSelect";
// import Form from "react-bootstrap/Form";

export default function FilterPanel() {
  const dropdown_data = [{
    "id": 0,
    "header": "Stock Universe",
    "options": ['A', 'B', 'C', 'D', 'E', 'F']
  },{
    "id": 1,
    "header": "Sector",
    "options": ['A', 'B', 'C', 'D', 'E', 'F']
  },{
    "id": 2,
    "header": "Market Cap",
    "options": ['A', 'B', 'C', 'D', 'E', 'F']
  },{
    "id": 3,
    "header": "Close Price (Rs)",
    "options": ['A', 'B', 'C', 'D', 'E', 'F']
  },{
    "id": 4,
    "header": "PE Ratio",
    "options": ['A', 'B', 'C', 'D', 'E', 'F']
  },]
  return (
    <div style={{ width: "30%" }}>
      {
        dropdown_data.map(data => 
          <MultiSelectDropdown key = {data.id} header = {data.header} options = {data.options}></MultiSelectDropdown>
        )
      }
    </div>
  );
}
