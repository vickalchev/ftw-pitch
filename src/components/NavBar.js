import React from 'react';
import { Link } from 'gatsby';
import Logo from '../images/FTW Pitch Logo.png';
import {
    container,
    logo,
    navMenu,
    navList,
    menuItem,

} from './navBar.module.css';

const NavBar = () => {
    return (
        <div className={container}>
           <Link to='/'>
                <img 
                    className={logo}
                    src={Logo} 
                    alt='FTW Pitch Logo'
                />
            </Link>

            <nav className={navMenu}>
                <ul className={navList}>
                    <li className={menuItem}>
                        How It Works
                    </li>
                    <li className={menuItem}>
                        Let's Chat
                    </li>
                    <li className={menuItem}>
                        Team
                    </li>
                    <li className={menuItem}>
                        FTW.DAO
                    </li>
                </ul>
            </nav>
        </div>
    )
}
 export default NavBar;