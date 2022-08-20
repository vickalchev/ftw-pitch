import React from 'react';
import testimonials from '../images/Testimonials.png';
import {
    testimonialsBkg,
    container,
    testimonialsImg,
    aboutUs,

} from './testimonials.module.css';

const Testimonials = () => {
    return (
        <div className={testimonialsBkg}>
            {/*This is the background div. */}
            <div className={container}>
                {/* Using this div to lay out the width of the content. */}
                <h1>
                    What they say 
                    <br/>
                    <span className={aboutUs}>about us</span>
                </h1>
                <img
                    className={testimonialsImg}
                    src={testimonials}
                    alt='testimonials'
                    />
            </div>
        </div>
    
    )
}

export default Testimonials;