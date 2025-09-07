import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";
import { IoMenu, IoClose } from "react-icons/io5";
import { Logo } from "../Route";
import Navigation from "./Navigation/Navigation";
import { useState } from "react";
import "./Header.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menu, setMenu] = useState(false);

  const handleHeader = () => {
    setIsOpen(!isOpen);
  };

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className={`${isOpen ? "close" : ""} ${menu ? "show" : ""}`}>
      <div className="icons" onClick={handleHeader}>
        {isOpen ? (
          <RxDoubleArrowRight className="row" />
        ) : (
          <RxDoubleArrowLeft className="row" />
        )}
      </div>
      <div className="resp_menu" onClick={handleMenu}>
        {menu ? (
          <IoClose className="menu" />
        ) : (
          <IoMenu className="menu" />
        )}
      </div>
      <section className="logo_cont">
        <img src={Logo} alt="logo" className="logo" />
        <h1 className="logo_text">Enagram</h1>
      </section>
      <Navigation />
    </header>
  );
};

export default Header;
