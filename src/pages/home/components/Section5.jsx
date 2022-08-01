import React, { Component } from 'react';

import arrowRedirect from '../../../assets/img/Arrow-Redirect.svg';
import activDocu from '../../../assets/img/Zoom-Documentation.png'

class Section5 extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() { 

        return (

            <div className="Section-5">
                <div className="Header">
                    <h1 id='header-txt'>Menjadi Bagian dari Keluarga</h1>
                </div>

                <div className="Description">
                    <p id='desc-txt'>Mari bergabung menjadi bagian dari komunitas Kompetegram untuk mendapatkan benefit dan mengikuti berbagai informasi dan event yang akan datang.</p>
                </div>

                <div className="Register-Button">
                    <a href="/" id="regis-btn">
                        <img src={arrowRedirect} alt="" id="arrow-logo" />
                        Daftar
                    </a>
                </div>

                <div className="Activity-Documentation">
                    <img src={activDocu} alt="" id='docu-img'/>
                </div>
            </div>

        );
    }
}
 
export default Section5;