import ExcelTransposeTable from '../ExcelTransposeTable';

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

export default function Parameters(){
    return (
              <div className="section5">
        <h4>Parameters</h4>
        <ExcelTransposeTable data={sampleTransData} />
        <button className="btn" style={{ width: "150px" }}>
          Edit and Update
        </button>
      </div>
    )
}