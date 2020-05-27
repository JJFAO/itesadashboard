import React from 'react';
import './loader.scss'

export function Loader() {



    return (
        <div id="loading">
            <div id="loading-center">
                <div id="loading-center-absolute">
                    <div className="object" id="object_four"></div>
                    <div className="object" id="object_three"></div>
                    <div className="object" id="object_two"></div>
                    <div className="object" id="object_one"></div>
                </div>
            </div>
        </div>
    )
}