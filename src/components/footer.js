import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { Link } from 'gatsby';
import LogoFooter from '../images/FTW Pitch Logo Footer.png';
import {
    footerBkg,
    container,
    logo,
    navMenu,
    navList,
    menuItem,
    menuItemAnchorLink,
    copyright,
    copyrightLink,
    copyrightContainer,
} from './footer.module.css';

const Footer = () => {
    return (
        <div className={footerBkg}>
            <div className={container}>
                <Link to='/'>
                    <img 
                        className={logo}
                        src={LogoFooter} 
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
            <div className={copyrightContainer}>  
                <p className={copyright}>Made with 💞 by    <span>
                    <a
                        className={copyrightLink}
                        href='https://ftwdao.com'
                        target='_blank'
                        rel='noopener noreferrer'>
                            FTW DAO
                    </a>
                </span>
                </p>
            </div>
        </div> 
    )
}

export default Footer;
