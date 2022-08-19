import React from "react";
import style from "./header.module.css";
import logo from "../../../../image/svg/logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <img className={style.logo} src={logo} alt="logo" />
        <div className={style.breathingBlock}>
          <Link to="/breathing" className={style.breathingLink} href="#">
            Дыхание
          </Link>
          <Link to="/" className={style.breathingLink} href="#">
            Круг эмоций
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
