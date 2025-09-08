import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoMenu } from "react-icons/io5";
import { Logo } from "../Exports";
import Navigation from "./Navigation/Navigation";
import { useState } from "react";
import "./Header.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleHeader = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`${isOpen ? "close" : ""}`}>
      <div className="icons" onClick={handleHeader}>
        {isOpen ? (
          <RxDoubleArrowRight className="row" />
        ) : (
          <RxDoubleArrowLeft className="row" />
        )}
      </div>
      <div className="resp_menu">
        <IoMenu className="menu" />
      </div>
      <section className="logo_cont">
        <img src={Logo} alt="logo" className="logo" />
        <h1 className="logo_text">Enagram</h1>
      </section>
      <Navigation />
      <section className="user_cont">
        <div className="user_section">
          <div className="user">
            <p>გ</p>
          </div>
          <p className="user_name">გიორგი გუგუნავა</p>
        </div>
        <HiOutlineDotsHorizontal className="dots" />
      </section>
    </header>
  );
};

export default Header;
