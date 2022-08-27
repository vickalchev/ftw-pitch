import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import {
    newsletterCtaBkg,
    container,
    newsletter,
    magnetTitle,
    ctaBtn,
    newsletterCTAImg,
    h1NewsletterCta,
    h2NewsletterCta,
    magnetWrapper,
    leftCol,
    rightCol,


} from './newsletterCTA.module.css';

const NewsletterCTA = () => {
    return (
        <div className={newsletterCtaBkg}>
            {/* 👆 This is the background div that bleeds. */}
            <div className={container}>
                {/* 👆 This div ensure that the content width is at 80% of the vw. */}
                <div className={leftCol}>
                    <h1 className={h1NewsletterCta}>
                        Sign up for our
                        <br/>
                        <span className={newsletter}>newsletter</span>
                    </h1>
                    <div className={magnetWrapper}>
                        <h2 className={h2NewsletterCta}>and get a free copy of
                            <br/>
                            <span className={magnetTitle}>6 Deadly Traps of Building a Pitch Deck</span>
                        </h2>
                    </div>
                    <button className={ctaBtn}>Get It Now!</button>
                </div>
                <div className={rightCol} >
                        <StaticImage 
                            className={newsletterCTAImg}
                            src='../images/NewsletterCTAImg.png'
                            alt='person with computer'
                            placeholder='tracedSVG'
                        />

                        
                </div>
            </div>
                {/* We want to keep the button outside of the div above. The bottomSection div use display:flex to align the heading and image in a row. We don't want the button to also be displayed in that row on bigger screens. This is why, we keep it separately. */}

            </div>
    )
}

export default NewsletterCTA;