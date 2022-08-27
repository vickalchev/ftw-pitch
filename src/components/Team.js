import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';


import {
    container,
    accentWord,
    bioSectionContainer,
    bioContainerLeft,
    bioContainerRight,
    bioImgContainer,
    headshot,
    headshotVic,

} from './team.module.css';

const Team = () => {
    return (
        <div className={container} id='team'>
            <h1>
                Who are <span className={accentWord}>we</span>?
            </h1>
            <h2>
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
                    <div>
                        <p>
                            <b>Isla Monroe - Hochmayr</b> is a co-founder of the FTW DAO and a former VC with UBS’s Global Wealth Management. She’s a recognized thought leader in the diversity for venture capital space.
                        </p>
                    </div>
                </div>

                <div className={bioContainerRight} >
                    <div>
                        <p>
                            <b>Ben Hoelzl</b> is a web3 strategist and a former director of strategy with UBS’s Global Wealth Management. Ben is a       co-founder of FTW DAO where he finds, funds and fosters diverse founders. 
                        </p>
                    </div>
                    <div className={bioImgContainer}>
                        <StaticImage
                            className={headshot}
                            src='../images/Photo-Ben.png'
                            alt='Ben Headshot'
                            placeholder='tracedSVG'
                        />
                    </div>
                </div>

                <div className={bioContainerLeft} >
                    <div className={bioImgContainer}>
                        <StaticImage
                            className={headshotVic}
                            src='../images/Photo-Vic.png'
                            alt='Vic Headshot'
                        />
                    </div>
                    <div>
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