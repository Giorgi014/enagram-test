import { IoMdArrowForward } from "react-icons/io";
import { Check, Text, Microphone, Text_voice, Document } from "../../Route";
import { NavLink } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "./Navigation.scss";

const Navigation = () => {
  const navItems = [
    { id: 1, icon: Check, path: "/მართლმწერი", label: "მართლმწერი" },
    { id: 2, icon: Text, path: "/ტექსტის_შედარება", label: "ტექსტის შედარება" },
    {
      id: 3,
      icon: Microphone,
      path: "/ხმა_ტექსტი",
      label: "ხმა",
      arrow: true,
      secondLabel: "ტექსტი",
    },
    {
      id: 4,
      icon: Text_voice,
      path: "/ტექსტი_ხმა",
      label: "ტექსტი",
      arrow: true,
      secondLabel: "ხმა",
    },
    { id: 5, icon: Document, path: "/კონვერტაცია", label: "PDF კონვერტაცია" },
  ];

  return (
    <nav>
      <ul>
        {navItems.map(({ id, path, label, secondLabel, icon, arrow }) => (
          <li key={id}>
            <NavLink
              to={path}
              className={({ isActive }) => `${isActive ? "active" : ""}`}
            >
              <img src={icon} alt={label} />
              <span className="label">
                {label} {arrow && <IoMdArrowForward />}{" "}
                {secondLabel && secondLabel}
              </span>
              <MdOutlineKeyboardArrowDown className="down_row" />
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
