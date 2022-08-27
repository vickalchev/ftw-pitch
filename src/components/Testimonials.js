import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
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

                <StaticImage 
                    className={testimonialsImg}
                    src='../images/testimonials.png'
                    alt='testimonials'
                    placeholder='tracedSVG'
                />

                
            </div>
        </div>
    
    )
}

export default Testimonials;