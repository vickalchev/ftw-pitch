import React from 'react';
import ImgWomanSmiling from '../images/woman-smiling.png';
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

const Cta2 = () => {
    return (
        <div className={cta1Bkg}>
            <div className={topSectionContainer}>
                <div className={ctaMessageContainer} > {/* A headline container */}
                    <h1 className={ctaMessage}>Book a free discovery call</h1>
                </div>
                <div className={imgCircleContainer}> {/* An circle image container */}

                <img className={imgManSmiling} src={ImgWomanSmiling} alt='Smiling man' />
                </div>  
            </div>
            <div className={bottomSectionContainer}>
             {/* This section holds the subheadings that extend across the parent div.*/}
             <h2>Let's find out what you are building and how we can help!</h2>   
             <p>No commitment or expectation to buy.</p>
             <button className={scheduleBtn}>Schedule it!</button>

            </div>

        </div>
    )
}

export default Cta2;