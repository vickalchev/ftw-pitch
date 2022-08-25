import React from 'react';
import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
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
                        <AnchorLink
                            to='/#process'
                            >
                            How It Works
                        </AnchorLink>
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