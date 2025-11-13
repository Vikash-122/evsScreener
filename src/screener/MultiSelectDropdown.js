import { useState } from "react";

const MultiSelectDropdown = ({header, options}) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleCheckboxChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div style={{ width: "300px", position: "relative" }}>
      {/* Dropdown Header */}
      <div
        style={{
          border: "1px solid #ccc",
          padding: "8px",
          cursor: "pointer",
          background: "#fff",
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* {selectedOptions.length > 0
          ? selectedOptions.join(", ")
          : "Select options"} */}
          {`${header}${isOpen ? ' ↑ ': ' ↓ '}`} 
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          style={{
            position: "relative",
            top: "100%",
            left: 0,
            width: "100%",
            border: "1px solid #ccc",
            background: "#fff",
            zIndex: 1,
          }}
        >
          {options.map((option) => (
            <label
              key={option}
              style={{ display: "block", padding: "4px", cursor: "pointer" }}
            >
              <input
                type="checkbox"
                checked={selectedOptions.includes(option)}
                onChange={() => handleCheckboxChange(option)}
              />{" "}
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
