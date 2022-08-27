import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import {
    container,
    circle1,
    circle2,
    circle3,
    h1,
    h2,
    
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
                
            </h2>
            <AnchorLink
                to='#process'
                >
                <button 
                    className = {howItWorksBtn}>
                        How it works
                        </button>
            </AnchorLink>
        </div>
    )

}

export default Header;