import React from 'react';
import style from './header.module.css'
import logo from '../../image/svg/logo.svg'

function Header(props) {
    return (
        <header className={style.header}>
            <nav className={style.headerNav}>
                <img className={style.logo} src={logo} alt="logo" />
            </nav>
        </header>
    );
}

export default Header;