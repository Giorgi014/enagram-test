import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "./Language.scss";

export const Language = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("ქართული");
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (lang) => {
    setSelectedLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="language_container">
      <button
        className="language_button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedLanguage} <MdOutlineKeyboardArrowDown />
      </button>

      {isOpen && (
        <ul className="language_dropdown">
          <li onClick={() => handleSelect("ქართული")}>ქართული</li>
          <li onClick={() => handleSelect("English")}>English</li>
        </ul>
      )}
    </div>
  );
};
