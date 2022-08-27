import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import BenHeadshot from '../images/Photo-Ben.png';
import VicHeadshot from '../images/Photo-Vic.png';

import {
    container,
    heading,
    accentWord,
    introParagraph,
    bioSectionContainer,
    bioContainerLeft,
    bioContainerRight,
    bioImgContainer,
    headshot,
    bioTextContainer,
    headshotVic,

} from './team.module.css';

const Team = () => {
    return (
        <div className={container} id='team'>
            <h1 className={heading}>
                Who are <span className={accentWord}>we</span>?
            </h1>
            <h2 className={introParagraph}>
                We are a team of investors, entrepreneurs, and creators united by our passion to help diverse founders build a future we all want to live in. 
            </h2>
            <div className={bioSectionContainer}>

                <div className={bioContainerLeft} >
                    <div className={bioImgContainer}>
                        <StaticImage
                            className={headshot}
                            src='../images/Photo-Isla.png'
                            alt='Isla Headshot'
                            placeholder='traceSVG'
                        />
                    </div>
                    <div className={bioTextContainer}>
                        <p>
                            <b>Isla Monroe - Hochmayr</b> is a co-founder of the FTW DAO and a former VC with UBS’s Global Wealth Management. She’s a recognized thought leader in the diversity for venture capital space.
                        </p>
                    </div>
                </div>

                <div className={bioContainerRight} >
                    <div className={bioTextContainer}>
                        <p>
                            <b>Ben Hoelzl</b> is a web3 strategist and a former director of strategy with UBS’s Global Wealth Management. Ben is a       co-founder of FTW DAO where he finds, funds and fosters diverse founders. 
                        </p>
                    </div>
                    <div className={bioImgContainer}>
                        <img 
                            className={headshot}
                            src={BenHeadshot}
                            alt='Ben Headshot'
                        />
                    </div>
                </div>

                <div className={bioContainerLeft} >
                    <div className={bioImgContainer}>
                        <img 
                            className={headshotVic}
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