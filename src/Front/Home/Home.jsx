import React from 'react';
import Header from '../Header/Header';
import ImgHomeReg from '../ImgHomeReg/ImgHomeReg';
import Sponsors from '../Sponsors/Sponsors';
import Features from '../Features/Features';
import Pricing from '../Pricing/Pricing';
import HowWorks from '../HowWorks/HowWorks';
import Footer from '../Footer/Footer';
import { Hidden } from '@material-ui/core';


export default function Home({ classes }) {
    return (
        <div>
            <Header classes={classes} />
            <ImgHomeReg classes={classes} />
            <Sponsors classes={classes} />
            <Features classes={classes} />
            <Hidden smUp >
                <Pricing classes={classes} />
                <div className={classes.imgfondocirclecel}>
                    <HowWorks classes={classes} />
                    <Footer classes={classes} />
                </div>
            </Hidden>
            <Hidden smDown>
                <div className={classes.imgfondocircle}>
                    <Pricing classes={classes} />
                    <HowWorks classes={classes} />
                </div>
                <Footer classes={classes} />
            </Hidden>
        </div>
    );
}
