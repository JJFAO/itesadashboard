import React from 'react'
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';
import eclipse from './eclipse.png';
import eclipse1 from './eclipse1.png';
import pointsfeatures from "../Features/pointsfeatures.png";

export default function ImgHomeReg({classes}) {
    return (
        <div>
            <img src={img1} className={classes.img1} alt="" />
            <img src={img2} className={classes.img2} alt="" />
            <img src={img3} className={classes.img3} alt="" />
            <img src={eclipse} className={classes.eclipse} alt="" />
            <img src={eclipse1} className={classes.eclipse1} alt="" />
            <img src={pointsfeatures} className={classes.points} alt="" />
            
        </div>
    )
}
