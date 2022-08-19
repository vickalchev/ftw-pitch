import React from 'react';
import ImgCircle from '../assets/man-smiling.jpg';
import {
    cta1Bkg,
    container,
    ctaMessage,
    imgCircleStyle,
    ctaHeadingImg,
    

} from './cta1.module.css';

const Cta1 = () => {
    return (
        <div className={cta1Bkg}>
            <div className={container}>
                                    <div >
                        <h1 className={ctaMessage}>Book a free discovery call</h1>
                    </div>
                    <div className={ctaHeadingImg}>
                        <div />
                        
                        <div></div>
                    </div>
                    <h2></h2>
                    <h3></h3>
                    <button>Schedule It!</button>
                

            </div>
        </div>
    )
}

export default Cta1;