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
          <div className="radio-col-field">
            <label
              key={option.radio}
              className={`radio-box ${
                selectedOption3 === option.radio ? "active" : ""
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
                className={`radio-box ${
                  selectedOption4 === option ? "active" : ""
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
        </div>
      )}
      {selectedOption3 === "Custom Universe Builder" && (
        <div className="brown-border">
          <div style={{ padding: "20px", fontFamily: "Arial" , justifySelf: "center", justifyContent: "right"}}>
            {/* Row 1: Radio Buttons */}
            <div style={{ display: "flex", gap: "20px", marginBottom: "15px" }}>
              <label
                className={`radio-box ${
                  filteredOption === "exchange" ? "active" : ""
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
              <label className={`radio-box ${
                  filteredOption === "benchmark" ? "active" : ""
                }`}>
                <input
                  type="radio"
                  name="selection"
                  value="benchmark"
                  onChange={() => handleRadioChange("benchmark")}
                />
                Select Benchmark
              </label >
              <label className={`radio-box ${
                  filteredOption === "existingIndex" ? "active" : ""
                }`}>
                <input
                  type="radio"
                  name="selection"
                  value="existingIndex"
                  onChange={() => handleRadioChange("existingIndex")}
                />
                Select Existing Index
              </label>
              <label className={`radio-box ${
                  filteredOption === "uploadUniverse" ? "active" : ""
                }`}>
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
              <select
                disabled={!filteredOption}
                className="custom-dropdown"
                style={{ width: "100%" }}
              >
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
          <div
            className="form-section"
            style={{ width: "70%", marginTop: "30px", justifySelf: "center" }}
          >
            <div className="form-row">
              <label>Screening Fundamental</label>
              <input type="text" />
            </div>
            <div className="form-row">
              <label>Financial</label>
              <input type="text" />
            </div>
            <div className="form-row">
              <label>Liquidity</label>
              <input type="text" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

{
  /* <div
  style={{
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    gap: "10px",
  }}
>
  <label htmlFor="custom-dropdown">Select Benchmark Index</label>
  <select
    id="custom-dropdown"
    value={selectedOption}
    onChange={(e) => setSelectedOption(e.target.value)}
    className="custom-dropdown"
    style={{ width: "90%" }}
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
</div> */
}
