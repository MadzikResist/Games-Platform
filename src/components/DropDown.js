import { useState } from "react";

const DropDown = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };
  return (
    <div
      className="dropdown-container"
      style={{
        borderRadius: isDropdownOpen ? 0 : "4px",
        zIndex: isDropdownOpen ? "20" : "0",
      }}
    >
      <div
        className="selected-option"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        style={{
          backgroundColor: isDropdownOpen ? "#3a3a3a" : "",
        }}
      >
        {isDropdownOpen ? <div className="oragneElement" /> : null}
        {selectedOption.label}
        <div className="arrow">
          {isDropdownOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="16"
              viewBox="0 0 512 512"
              fill="white"
            >
              <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="16"
              viewBox="0 0 512 512"
              fill="white"
            >
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
            </svg>
          )}
        </div>
      </div>
      {isDropdownOpen && (
        <ul className="options-list">
          {options.map(
            (option) =>
              option.value !== selectedOption.value && (
                <li
                  key={option.value}
                  className={`option ${
                    selectedOption.value === option.value ? "selected" : ""
                  }`}
                  onClick={() => handleOptionChange(option)}
                >
                  {option.label}
                </li>
              ),
          )}
        </ul>
      )}
    </div>
  );
};
export default DropDown;
