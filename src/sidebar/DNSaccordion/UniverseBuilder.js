import { useState } from "react";

const options3 = [
  {
    label:
      "Replicate an investible universe and apply predefined strategy rules by leveraging an existing index, while retaining the flexibility to customize parameters and logic",
    radio: "Pre-built Screens",
  },
  {
    label:
      "Create your own investible universe by leveraging existing or benchmark indices and applying a broad range of market and fundamental screening criteria",
    radio: "Custom Universe Builder",
  },
];
const options4 = ["a ", "b ", "c ", "d ", "e ", "f ", "g ", "h "];
const options = ["Option 1", "Option 2", "Option 3"];
const optionsMap = {
  exchange: ["NSE", "BSE", "NASDAQ"],
  benchmark: ["Nifty 50", "Sensex", "Dow Jones"],
  existingIndex: ["Index A", "Index B", "Index C"],
  uploadUniverse: ["Custom Universe"],
};

export default function UniverseBuilder() {
  const [filteredOption, setFilteredOption] = useState("");
  const [dropdownOptions, setDropdownOptions] = useState([]);
  const [selectedOption3, setSelectedOption3] = useState("");
  const [selectedOption4, setSelectedOption4] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const [showPopup, setPopup] = useState(false); // ✅ Popup state

  const handleRadioChange = (value) => {
    setFilteredOption(value);
    setDropdownOptions(optionsMap[value]);
  };

  return (
    <div
      style={{
        borderRadius: "6px",
        padding: "25px 25px",
        paddingTop: "5px",
        marginBottom: "10px",
      }}
    >
      <div className="radio-col brown-border">
        {options3.map((option) => (
          <div className="radio-col-field" key={option.radio}>
            <label
              className={`radio-box ${selectedOption3 === option.radio ? "active" : ""
                }`}
            >
              <input
                type="radio"
                name="option"
                value={option.radio}
                checked={selectedOption3 === option.radio}
                onChange={() => setSelectedOption3(option.radio)}
              />
              {option.radio}
            </label>
            <label>{option.label}</label>
          </div>
        ))}
      </div>

      {selectedOption3 === "Pre-built Screens" && (
        <div className="brown-border">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
              columnGap: "40px",
              rowGap: "10px",
            }}
          >
            {options4.map((option) => (
              <label
                key={option}
                className={`radio-box ${selectedOption4 === option ? "active" : ""
                  }`}
              >
                <input
                  type="radio"
                  name="option"
                  value={option}
                  checked={selectedOption4 === option}
                  onChange={() => setSelectedOption4(option)}
                />
                {option}
              </label>
            ))}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 3fr",
              gap: "10px",
              marginTop: "60px",
            }}
          >
            <label htmlFor="custom-dropdown">
              Replicate from Existing Index
            </label>
            <select
              id="custom-dropdown"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="custom-dropdown"
              style={{ width: "80%" }}
            >
              <option value="" disabled>
                -- Select an option --
              </option>
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Buttons */}
          <div
            style={{
              marginTop: "10px",
              justifyContent: "center",
              display: "flex",
              gap: "120px",
            }}
          >
            <button
              type="button"
              className="primary-btn"
              style={{ height: "35px", padding: "4px 10px" }}
              onClick={() => setPopup(true)}
            >
              View Underlying Data
            </button>
            <button
              type="button"
              className="secondary-btn"
              style={{ height: "35px", padding: "4px 10px" }}
              onClick={() => setSelectedOption3("Custom Universe Builder")}
            >
              Screening
            </button>
          </div>
        </div>
      )}

      {selectedOption3 === "Custom Universe Builder" && (
        <div className="brown-border">
          <div
            style={{
              padding: "20px",
              fontFamily: "Arial",
              justifySelf: "center",
              justifyContent: "right",
            }}
          >
            {/* Row 1: Radio Buttons */}
            <div style={{ display: "flex", gap: "20px", marginBottom: "15px" }}>
              <label
                className={`radio-box ${filteredOption === "exchange" ? "active" : ""
                  }`}
              >
                <input
                  type="radio"
                  name="selection"
                  value="exchange"
                  onChange={() => handleRadioChange("exchange")}
                />
                Select Exchange
              </label>
              <label
                className={`radio-box ${filteredOption === "benchmark" ? "active" : ""
                  }`}
              >
                <input
                  type="radio"
                  name="selection"
                  value="benchmark"
                  onChange={() => handleRadioChange("benchmark")}
                />
                Select Benchmark
              </label>
              <label
                className={`radio-box ${filteredOption === "existingIndex" ? "active" : ""
                  }`}
              >
                <input
                  type="radio"
                  name="selection"
                  value="existingIndex"
                  onChange={() => handleRadioChange("existingIndex")}
                />
                Select Existing Index
              </label>
              <label
                className={`radio-box ${filteredOption === "uploadUniverse" ? "active" : ""
                  }`}
              >
                <input
                  type="radio"
                  name="selection"
                  value="uploadUniverse"
                  onChange={() => handleRadioChange("uploadUniverse")}
                />
                Upload Universe
              </label>
            </div>

            <div style={{ marginBottom: "15px" }}>
              <select disabled={!filteredOption} className="custom-dropdown" style={{ width: "100%" }}>
                <option value="">-- Select an option --</option>
                {dropdownOptions.map((opt, index) => (
                  <option key={index} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {filteredOption === "uploadUniverse" && (
              <div>
                <input type="file" />
              </div>
            )}
          </div>

          {/* ✅ Three Tables */}



          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: "30px",
              overflowX: "auto",
              paddingBottom: "10px",
              width: "100%",
            }}
          >
            {/* Table 1 */}
            <div style={{ minWidth: "300px" }}>
              <h3 style={{ textAlign: "center" }}>Liquidity</h3>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ backgroundColor: "#f2f2f2" }}>
                    <th style={{ border: "1px solid #ccc", padding: "8px" }}>Select</th>
                    <th style={{ border: "1px solid #ccc", padding: "8px" }}>Value</th>
                  </tr>
                </thead>
                <tbody>
                  {["ADVT 1M", "ADVT 3M", "ADVT 6M", " MDVT 1M", "MDVT 3M", " MDVT 6M"].map((item, index) => (
                    <tr key={index}>
                      {/* First column: Name + Radio */}
                      <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                        <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <input type="radio" name="liquidity" />
                          {item}
                        </label>
                      </td>

                      {/* Second column: Input box */}
                      <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                        <input type="text" placeholder={`Value for ${item}`} />
                      </td>
                    </tr>
                  ))}

                  <tr>
                    <td colSpan="2" style={{ textAlign: "center", padding: "10px" }}>
                      <button
                        style={{
                          padding: "3px 12px",
                          backgroundColor: "#007bff",
                          color: "#fff",
                          border: "none",
                          borderRadius: "4px",
                          cursor: "pointer",
                          width: "100%",
                          fontSize: "14px"

                        }}
                      >

                        Add New
                      </button>
                    </td>
                  </tr>
                </tbody>



              </table>
            </div>

            {/* Table 2 */}
            <div style={{ minWidth: "250px" }}>
              <h3 style={{ textAlign: "center" }}>Multi-Selection</h3>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ backgroundColor: "#f2f2f2" }}>
                    <th style={{ border: "1px solid #ccc", padding: "8px" }}>Select</th>
                    <th style={{ border: "1px solid #ccc", padding: "8px" }}>Value</th>
                  </tr>
                </thead>
                <tbody>
                  {["ROE", "LEV", "ACC", "BP", "EP", "SP"].map((item, index) => (
                    <tr key={index}>
                      {/* First column: Name + Radio */}
                      <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                        <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <input type="checkbox" name="liquidity" />
                          {item}
                        </label>
                      </td>

                      {/* Second column: Input box */}
                      <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                        <input  type="text" placeholder={`Value for ${item}`} />
                      </td>
                    </tr>
                  ))}

                  <tr>
                    <td colSpan="2" style={{ textAlign: "center", padding: "10px" }}>
                      <button
                        style={{
                          padding: "3px 12px",
                          backgroundColor: "#007bff",
                          color: "#fff",
                          border: "none",
                          borderRadius: "4px",
                          cursor: "pointer",
                          width: "100%",
                          fontSize: "14px"

                        }}
                      >

                        Add New
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>


            {/* Table 3 */}
            <div style={{ minWidth: "200px" }}>
              <h3 style={{ textAlign: "center" }}>Market Data</h3>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ backgroundColor: "#f2f2f2" }}>
                    <th style={{ border: "1px solid #ccc", padding: "8px" }}>Metric</th>
                    <th style={{ border: "1px solid #ccc", padding: "8px" }}>Options</th>
                  </tr>
                </thead>
                <tbody>
                  {["Price Return", "Total Return", "Currency"].map((item, index) => (
                    <tr key={index}>
                      <td style={{ border: "1px solid #ccc", padding: "8px" }}>{item}</td>
                      <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                        <select style={{ width: "100%" }}>
                          <option>Select</option>
                          <option>Option 1</option>
                          <option>Option 2</option>
                        </select>
                      </td>
                    </tr>
                  ))}

                  <tr>
                    <td style={{ border: "1px solid #ccc", padding: "8px" }}>Market Cap</td>
                    <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                      <input
                        type="text"
                        placeholder="Enter Market Cap"
                        style={{ width: "100%" }}
                      />
                    </td>
                  </tr>

                   <tr>
                    <td colSpan="2" style={{ textAlign: "center", padding: "10px" }}>
                      <button
                        style={{
                          padding: "3px 12px",
                          backgroundColor: "#007bff",
                          color: "#fff",
                          border: "none",
                          borderRadius: "4px",
                          cursor: "pointer",
                          width: "100%",
                          fontSize: "14px"

                        }}
                      >

                        Add New
                      </button>
                    </td>
                  </tr>

                </tbody>

              </table>
            </div>
          </div>

          <div
            style={{
              marginTop: "10px",
              justifyContent: "center",
              display: "flex",
              gap: "120px",
            }}
          >
            <button
              type="button"
              className="primary-btn"
              style={{ height: "35px", padding: "4px 10px" }}
              onClick={() => setPopup(true)}
            >
              View Underlying Data
            </button>
          </div>

        </div>
      )}

      {/* Popup */}

      {showPopup && (
        <>
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "60%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
              zIndex: 1000,
              width: "90%", // Make it wider for table
              maxWidth: "1000px",
              textAlign: "center",
            }}
          >
            <h3 style={{ marginBottom: "20px" }}>Underlying Instruments</h3>

            {/* Table */}
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "14px",
              }}
            >
              <thead>
                <tr style={{ backgroundColor: "#f2f2f2" }}>
                  <th style={{ border: "1px solid #ccc", padding: "8px" }}>Effective Date</th>
                  <th style={{ border: "1px solid #ccc", padding: "8px" }}>UID</th>
                  <th style={{ border: "1px solid #ccc", padding: "8px" }}>ISIN</th>
                  <th style={{ border: "1px solid #ccc", padding: "8px" }}>Ticker</th>
                  <th style={{ border: "1px solid #ccc", padding: "8px" }}>RIC</th>
                  <th style={{ border: "1px solid #ccc", padding: "8px" }}>Name</th>
                  <th style={{ border: "1px solid #ccc", padding: "8px" }}>Currency</th>
                  <th style={{ border: "1px solid #ccc", padding: "8px" }}>Dividend Currency</th>
                  <th style={{ border: "1px solid #ccc", padding: "8px" }}>Exchange Currency</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(5)].map((_, index) => (
                  <tr key={index}>
                    <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
                    <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
                    <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
                    <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
                    <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
                    <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
                    <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
                    <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
                    <td style={{ border: "1px solid #ccc", padding: "8px" }}></td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Close Button */}
            <button
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
              onClick={() => setPopup(false)}
            >
              Close
            </button>
          </div>

          {/* Overlay */}
          <div
            onClick={() => setPopup(false)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.3)",
              zIndex: 999,
            }}
          ></div>
        </>
      )}
    </div>
  );
}