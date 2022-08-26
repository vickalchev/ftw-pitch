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
    menuItemAnchorLink,

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
                            className={menuItemAnchorLink}
                            to='#process'
                            >
                            How It Works
                        </AnchorLink>
                    </li>
                    
                    <li className={menuItem}>
                        <AnchorLink
                            className={menuItemAnchorLink}
                            to='#cta1'
                        >
                            Let's Chat  
                        </AnchorLink>
                    </li>
                    <li className={menuItem}>
                        <AnchorLink
                            className={menuItemAnchorLink}
                            to='#team' >
                            Team
                        </AnchorLink>
                    </li>
                    <li className={menuItem}>
                        <a
                        className={menuItemAnchorLink}
                        href='https://www.ftwdao.com/'
                        target='_blank'
                        rel='noopener noreferrer'
                        >
                            FTW.DAO
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
 export default NavBar;