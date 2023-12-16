import { useEffect, useRef, useState } from "react";

const DropDown = ({ options, onDataUpdate, nameFilter }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  console.log("selectedOp", selectedOption);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
    onDataUpdate(option, nameFilter);
  };
  return (
    <div
      className="dropdown-container"
      ref={dropdownRef}
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
        {selectedOption}
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
        <ul
          className="options-list"
          style={{ height: nameFilter === "sortBy" ? "90px" : "300px" }}
        >
          {options.map(
            (option) =>
              option !== selectedOption && (
                <li
                  key={option}
                  className={`option ${
                    selectedOption === option ? "selected" : ""
                  }`}
                  onClick={() => handleOptionChange(option)}
                >
                  {option}
                </li>
              ),
          )}
        </ul>
      )}
    </div>
  );
};
export default DropDown;
