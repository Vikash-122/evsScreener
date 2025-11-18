import ExcelTransposeTable from '../ExcelTransposeTable';
import CorporateActions from './CorporateActions';

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
        <div style ={{marginBottom: "15px", border: "2px solid #ddd", padding: "10px", borderRadius: "8px"
        }}>
        <h6>Select Applicable Corporate Actions:</h6>
        <CorporateActions></CorporateActions>
        </div>
        <div style ={{marginBottom: "15px", border: "2px solid #ddd", padding: "10px", borderRadius: "8px"
        }}>

        <ExcelTransposeTable data={sampleTransData} />
        <button className="btn" style={{ width: "150px" , marginTop: "10px"}}>
          Edit and Update
        </button>
        </div>
      </div>
    )
}