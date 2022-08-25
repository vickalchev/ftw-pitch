import React from 'react';
import ProcessMap from '../images/ProcessMap.png';
import {
    processBkg,
    container,
    h1,
    h2,
    process,
    guideYou,
    processMap,

 } from './process.module.css';

const Process = () => {
    return (
        <div className={processBkg} id='process'>
            <div className={container}>
                <h1 className={h1}>Fundraising is a </h1> <h1 className={process}>process</h1>
                <h2 className={h2}>You don't have to discover it on your own.</h2>
                <h2 className={h2}>We'll <span className = {guideYou}> guide you </span> through it.</h2>
                <img 
                    className={processMap}
                    src={ProcessMap} 
                    alt='Process Map'        
                    />
            </div>
        </div>
    )
}

export default Process;