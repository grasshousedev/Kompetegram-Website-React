import React, { Component } from 'react';

import illustration from '../../../assets/img/Illustration-Orbit-Community.svg';

class Section2 extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }
    render() {
        return (
            <div className="Section-2">
                <div className="Illustration">

                    <img src={illustration} alt="" id='illus-img' />

                </div>

                <div className="Header">
                    <h1 id='header-txt'>Tentang Kami</h1>
                </div>

                <div className="Description">
                    <p id='desc-txt'>Kompetegram  merupakan komunitas untuk belajar dan berbagi pengetahuan mengenai teknologi.
                        Tidak hanya itu, di Kompetegram juga terdapat event atau kegiatan seperti webinar, projek,
                        dan kuis.
                    </p>
                </div>

                <div className="Cards">
                    <div className="Card-1">
                        <p id='number'>54</p>
                        <p id='text'>Anggota</p>
                    </div>

                    <div className="Card-2">
                        <p id='number'>21</p>
                        <p id='text'>Kegiatan</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Section2;