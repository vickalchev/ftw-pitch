import React from 'react';
import ImgManSmiling from '../assets/ManSmiling.png';
import {
    cta1Bkg,
    topSectionContainer,
    bottomSectionContainer,
    ctaMessageContainer,
    ctaMessage,
    imgCircleContainer,
    imgManSmiling,
    

    

} from './cta1.module.css';

const Cta1 = () => {
    return (
        <div className={cta1Bkg}>
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

            </div>

        </div>
    )
}

export default Cta1;