import React from "react";
import s from "./NavBar.module.css"
import {NavLink} from "react-router-dom";


const NavBar = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}><NavLink to="/profile"
                 className={(navData) => (navData.isActive ? s.activeLink : 'none')}>Profile</NavLink>
            </div>
            <div className={s.item}><NavLink to="/dialogs">Messages</NavLink></div>
            <div className={s.item}><a>News</a></div>
            <div className={s.item}><a>Music</a></div>
            <div className={s.item}><a>Settings</a></div>

            <div className={s.item}><a>Friends</a>
                <div className={s.friends}>
                    <div>
                        <div className={s.friends__item}>
                            <div>1</div>
                            <div>Andrew</div>
                        </div>
                    </div>
                    <div className={s.friends__item}>
                        <div>2</div>
                        <div>Sasha</div>
                    </div>
                    <div className={s.friends__item}>
                        <div>3</div>
                        <div>Sveta</div>
                    </div>


                </div>


            </div>


        </nav>
    )
}
export default NavBar
