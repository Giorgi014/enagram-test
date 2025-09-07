import { useState, useRef, useEffect } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "./Language.scss";

export const Language = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("ქართული");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const handleSelect = (lang) => {
    setSelectedLanguage(lang);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    const handleEsc = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener("click", handleOutsideClick);
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen]);

  return (
    <div className="language_container" ref={containerRef}>
      <button
        className="language_button"
        onClick={() => setIsOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {selectedLanguage} <MdOutlineKeyboardArrowDown />
      </button>

      {isOpen && (
        <ul className="language_dropdown" role="listbox">
          <li
            role="option"
            tabIndex={0}
            onClick={() => handleSelect("ქართული")}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleSelect("ქართული");
              }
            }}
          >
            ქართული
          </li>
          <li
            role="option"
            tabIndex={0}
            onClick={() => handleSelect("English")}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleSelect("English");
              }
            }}
          >
            English
          </li>
        </ul>
      )}
    </div>
  );
};
