import React from 'react';
import { Link } from 'gatsby';
import FloodlightIcon from '../assets/spotlightIcon.png';
import {
    container,
    circle1,
    circle2,
    circle3,
    h1,
    h2,
    floodlightIcon,
    howItWorksBtn,
} from './header.module.css';

const Header = () => {
    return (
        <div className={container}>
            <div className = {circle1} />
            <div className = {circle2} />
            <div className = {circle3} />
            <h1 className= {h1}>VCs helping founders fundraise</h1>
            <h2 className={h2}>Fundraising can feel like a dark forest with no path in sight. We've got the map and the flood lights.
                <span className={floodlightIcon}>
                    <img 
                        src={FloodlightIcon}
                        alt='Floodlight Icon' />
                </span>
            </h2>
            <button className = {howItWorksBtn}>How it works</button>
        
        </div>
    )

}

export default Header;