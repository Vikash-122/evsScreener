import { useState } from "react";

const options3 = ["Pre-built Screens", "Custom Universe Builder"];
const options4 = ["a ", "b ", "c ", "d ", "e ", "f ", "g ", "h "];
const options = ["Option 1", "Option 2", "Option 3"];

export default function UniverseBuilder() {

  const [selectedOption3, setSelectedOption3] = useState("");
  const [selectedOption4, setSelectedOption4] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
  return (
    <div
      style={{
        borderRadius: "6px",
        padding: "25px 25px",
        paddingTop: "5px",
        marginBottom: "10px",
      }}
    >
      
      <div className="radio-row">
        {options3.map((option) => (
          <label
            key={option}
            className={`radio-box ${
              selectedOption3 === option ? "active" : ""
            }`}
          >
            <input
              type="radio"
              name="option"
              value={option}
              checked={selectedOption3 === option}
              onChange={() => setSelectedOption3(option)}
            />
            {option}
          </label>
        ))}
      </div>
      {selectedOption3 === "Pre-built Screens" && (
        <div style={{
            padding: "20px",
            marginTop: "10px",
            border: "1px solid black"
      }}>

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
          <div style={{display: "grid", gridTemplateColumns: "1fr 2fr", gap: "10px", marginTop: "60px"}}>
            <label htmlFor="custom-dropdown">Use Existing Index</label>
            <select
              id="custom-dropdown"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="custom-dropdown"
              style={{width: "80%"}}
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
        <div style={{
            padding: "20px",
            border: "1px solid black",
            marginTop: "10px"
      }}>
        <div style={{display: "grid", gridTemplateColumns: "1fr 2fr", gap: "10px"}}>
            <label htmlFor="custom-dropdown">Select Benchmark Index</label>
            <select
              id="custom-dropdown"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="custom-dropdown"
              style={{width: "90%"}}
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
            <div className="form-section" style={{width: "70%", marginTop: "30px", justifySelf: "center"}}>
                <div className="form-row">
                    <label >Screening Fundamental</label>
                    <input type="text"/>
                </div>
                <div className="form-row">

                    <label >Financial</label>
                    <input type="text"/>
                </div>
                <div className="form-row">
                    <label >Liquidity</label>
                    <input type="text"/>
                </div>
            </div>
        </div>
      )}
    </div>
  );
}
