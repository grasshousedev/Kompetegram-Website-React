import { Component } from 'react';

import './styles/Global.css';
import './styles/Mobile.css';

import ktgLogo from '../../assets/img/logo.svg';
import ktgLogoTxt from '../../assets/img/Kompetegram.svg';
import arrowRedirect from '../../assets/img/Arrow-Redirect.svg';
import illustration1 from '../../assets/img/Illustration-Orbit.svg';
import illustration2 from '../../assets/img/Illustration-Orbit-Community.svg';
import codeSym from '../../assets/img/Code-Symbol.svg';
import connectionSym from '../../assets/img/Connection-Symbol.svg';
import trophySym from '../../assets/img/Trophy-Symbol.svg';
import illustration3 from '../../assets/img/Illustration-TeamWork.png';

class Home extends Component {

    constructor(props) {

        super(props);

        this.state = {

        };

        this.Content = this.Content.bind(this);

        return;
    }
    
    Content() {

        return (
            <div className="Content">
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

                <div className="Section-4">
                    <div className="Illustration">
                        <img src={illustration3} alt="" />
                    </div>

                    <div className="Header">
                        <h1 id="header-txt">Lebih Dari yang Kamu Bayangkan</h1>
                    </div>

                    <div className="Description">
                        <p id="desc-txt">Kompetegram bukan hanya tempat berkumpul saja. Menyebarkan informasi dan bekerja sama
                            membangun kreativitas</p>
                    </div>

                    <div className="Buttons">
                        <div className="Instagram">

                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {

        return (

            <div className="Home">
                {<this.Content />}
            </div>

        );
    }
}

export default Home;