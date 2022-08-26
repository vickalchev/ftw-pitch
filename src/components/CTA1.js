import React from 'react';
import ImgManSmiling from '../images/ManSmiling.png';
import {
    cta1Bkg,
    topSectionContainer,
    bottomSectionContainer,
    ctaMessageContainer,
    ctaMessage,
    imgCircleContainer,
    imgManSmiling,
    scheduleBtn,
    

    

} from './cta1.module.css';

const Cta1 = () => {
    return (
        <div className={cta1Bkg} id='cta1'>
            <div className={topSectionContainer}>
                <div className={ctaMessageContainer} > {/* A headline container */}
                    <h1 className={ctaMessage}>Book a free discovery call</h1>
                </div>
                <div className={imgCircleContainer}> {/* An circle image container */}

                <img className={imgManSmiling} src={ImgManSmiling} alt='Smiling man' />
                </div>  
            </div>
            <div className={bottomSectionContainer}>
             {/* This section holds the subheadings that extend across the parent div.*/}
             <h2>Let's find out what you are building and how we can help!</h2>   
             <p>No commitment or expectation to buy.</p>
             <a
                href='https://calendly.com/next-round/15min'
                target='_blank'
                rel='noopener noreferrer'
            >
                <button className={scheduleBtn}>Schedule it!</button>
             </a>
            </div>

        </div>
    )
}

export default Cta1;