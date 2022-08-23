import React from 'react';
import IslaHeadshot from '../images/Photo-Isla.png';
import BenHeadshot from '../images/Photo-Ben.png';
import VicHeadshot from '../images/Photo-Vic.png';

import {
    heading,
    introParagraph,
    bioSectionContainer,
    bioContainer,
    bioImgContainer,
    headshot,
    bioTextContainer,
    accentWord,

} from './team.module.css';

const Team = () => {
    return (
        <div className='container'>
            <h1 className={heading}>
                Who are <span className={accentWord}>we</span>?
            </h1>
            <h2 className={introParagraph}>
                We are a team of investors, entrepreneurs, and creators united by our passion to help diverse founders build a future we all want to live in. 
            </h2>
            <div className={bioSectionContainer}>

                <div className={bioContainer} >
                    <div className={bioImgContainer}>
                        <img 
                            className={headshot}
                            src={IslaHeadshot}
                            alt='Isla Headshot'
                        />
                    </div>
                    <div className={bioTextContainer}>
                        <p>
                            Isla Monroe - Hochmayr is a co-founder of the FTW DAO and a former VC with UBS’s Global Wealth Management. She’s a recognized thought leader in the diversity for venture capital space.
                        </p>
                    </div>
                </div>

                <div className={bioContainer} >
                    <div className={bioImgContainer}>
                        <img 
                            className={headshot}
                            src={BenHeadshot}
                            alt='Ben Headshot'
                        />
                    </div>
                    <div className={bioTextContainer}>
                        <p>
                            <b>Ben Hoelzl</b> is a web3 strategist and a former director of strategy with UBS’s Global Wealth Management. Ben is a       co-founder of FTW DAO where he finds, funds and fosters diverse founders. 
                        </p>
                    </div>
                </div>

                
                <div className={bioContainer} >
                    <div className={bioImgContainer}>
                        <img 
                            className={headshot}
                            src={VicHeadshot}
                            alt='Vic Headshot'
                        />
                    </div>
                    <div className={bioTextContainer}>
                        <p>
                            <b>Vic Kalchev</b> has an extensive experience in corporate private equity, finance and business strategy. He works with founders on product strategy and fundraising. Vic is a founding member of FTW DAO where he supports diverse founders in building world-changing ventures. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team;