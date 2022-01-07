import React from "react";
import s from "./Header.module.css"

const Header = () => {
    return (
        <header  className={s.header} >
            <img className={s.img} src="https://upload.wikimedia.org/wikipedia/commons/2/25/FC_Zenit_1_star_2015_logo.png" alt=""/>
        </header>
    )
}

export default Header