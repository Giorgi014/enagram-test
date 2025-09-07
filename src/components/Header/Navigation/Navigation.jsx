import { IoMdArrowForward } from "react-icons/io";
import { Check, Text, Microphone, Text_voice, Document } from "../../Route";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "./Navigation.scss";
import { useState } from "react";

const Navigation = () => {
  const [activeId, setActiveId] = useState(2);
  const navItems = [
    { id: 1, icon: Check, label: "მართლმწერი" },
    { id: 2, icon: Text, label: "ტექსტის შედარება" },
    {
      id: 3,
      icon: Microphone,
      label: "ხმა",
      arrow: true,
      secondLabel: "ტექსტი",
    },
    {
      id: 4,
      icon: Text_voice,
      label: "ტექსტი",
      arrow: true,
      secondLabel: "ხმა",
    },
    { id: 5, icon: Document, label: "PDF კონვერტაცია" },
  ];

  return (
    <nav>
      <ul>
        {navItems.map(({ id, label, secondLabel, icon, arrow }) => (
          <li key={id} className={id === 2 ? "active" : ""}>
            <img src={icon} alt={label} />
            <span className="label">
              {label} {arrow && <IoMdArrowForward />}{" "}
              {secondLabel && secondLabel}
            </span>
            <MdOutlineKeyboardArrowDown className="down_row" />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
