import React, { Component } from 'react';

import arrowRedirect from '../../../assets/img/Arrow-Redirect.svg';
import illustration from '../../../assets/img/Illustration-Orbit.svg';

class Section1 extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };

        return;
    }

    render() {

        return (
            <div className="Section-1">
                <div className="Header">
                    <h1 id="header-txt">Komunitas, Teknologi, dan Pemrograman</h1>
                </div>

                <div className="Description">
                    <p id="desc-txt">Untuk menjadi programmer yang baik salah satunya membutuhkan komunitas.
                        Kami menyediakan kerjasama, skill upgrading, dan ide-ide untuk solusi.
                    </p>
                </div>

                <div className="Register-Button">
                    <a href="/" id="regis-btn">
                        <img src={arrowRedirect} alt="" id="arrow-logo" />
                        Daftar
                    </a>
                </div>

                <div className="Illustration">
                    <img src={illustration} alt="" id='illus-img' />
                </div>
            </div>
        );
    }
}

export default Section1;