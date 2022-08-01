import React, { Component } from 'react';

import illustration from '../../../assets/img/Illustration-TeamWork.svg';
import igIcon from '../../../assets/img/Instagram-Icon.svg';
import githubIcon from '../../../assets/img/Github-Icon.svg';

class Section4 extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };

        return;
    }

    render() {

        return (

            <div className="Section-4">
                <div className="Illustration">
                    <img src={illustration} alt="" id='illus-img' />
                </div>

                <div className="Header">
                    <h1 id="header-txt">Lebih Dari yang Kamu Bayangkan</h1>
                </div>

                <div className="Description">
                    <p id="desc-txt">Kompetegram bukan hanya tempat berkumpul saja. Menyebarkan informasi dan bekerja sama
                        membangun kreativitas</p>
                </div>

                <div className="Buttons">
                    <a href="https://www.instagram.com/kompetegram/" className='ig-btn'>
                        Instagram
                    </a>
                    <a href="https://github.com/PROYEK-KOMPETEGRAM" className='github-btn'>
                        <img src={githubIcon} alt="" id='github-icon' />
                        Github
                    </a>
                </div>
            </div>

        );
    }
}

export default Section4;