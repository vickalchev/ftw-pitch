import React from 'react';
import { Link } from 'gatsby';
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
            <h2 className={h2}>Fundraising can feel like a dark forest with no path in sight. We've got the map and the flood lights.</h2> <span className={floodlightIcon}></span>
            <button className = {howItWorksBtn}>How it works</button>
        
        </div>
    )

}

export default Header;