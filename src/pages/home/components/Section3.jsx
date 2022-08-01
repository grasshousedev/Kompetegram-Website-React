import React, { Component } from 'react';

import codeSym from '../../../assets/img/Code-Symbol.svg';
import connectionSym from '../../../assets/img/Connection-Symbol.svg';
import trophySym from '../../../assets/img/Trophy-Symbol.svg';

class Section3 extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (

            <div className="Section-3">
                <div className="Header">
                    <h1 id='header-txt'>Kenapa Harus Bergabung?</h1>
                </div>
                <div className="Description">
                    <div className="Point-1">
                        <div className="Point-Symbol">
                            <img src={codeSym} alt="" id='point-img' />
                        </div>

                        <div className="Content">
                            <h3 id='header-txt'>Skills</h3>
                            <p id='desc-txt'>Menambah soft skill, hard skill dan wawasan mengenai Teknologi Informasi</p>
                        </div>
                    </div>

                    <div className="Point-2">
                        <div className="Point-Symbol">
                            <img src={connectionSym} alt="" id='point-img' />
                        </div>

                        <div className="Content">
                            <h3 id='header-txt'>Connections</h3>
                            <p id='desc-txt'>Membangun relasi untuk bekerja sama mewujudkan kreativitas.</p>
                        </div>
                    </div>

                    <div className="Point-3">
                        <div className="Point-Symbol">
                            <img src={trophySym} alt="" id='point-img' />
                        </div>

                        <div className="Content">
                            <h3 id='header-txt'>Achievements</h3>
                            <p id='desc-txt'>Mendapat penghargaan berupa sertifikat ketika mengikuti sebuah event.</p>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Section3;