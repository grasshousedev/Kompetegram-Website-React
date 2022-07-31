import { Component } from 'react';

import './styles/Global.css';
import './styles/Mobile.css';

import ktgLogo from '../../assets/img/logo.svg';
import ktgLogoTxt from '../../assets/img/Kompetegram.svg'
import arrowRedirect from '../../assets/img/Arrow-Redirect.svg'
import illustration1 from '../../assets/img/Illustration-Orbit.svg'
import illustration2 from '../../assets/img/Illustration-Orbit-Community.svg'

class Home extends Component {

    constructor(props) {

        super(props);

        this.state = {

        };

        return;
    }

    render() {

        return (

            <div className="Home">
                <div className="Header">
                    <img src={ktgLogo} alt="" id="logo" />
                    <img src={ktgLogoTxt} alt="" id="logo-text" />
                </div>

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
                        <img src={illustration1} alt="" id='illus-img' />
                    </div>
                </div>

                <div className="Section-2">
                    <div className="Illustration">
                        <img src={illustration2} alt="" id='illus-img' />
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
            </div>

        );
    }
}

export default Home;