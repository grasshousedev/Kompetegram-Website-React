import { Component } from 'react';

import './styles/Global.css';
import './styles/Mobile.css';

import ktgLogo from '../../assets/img/logo.svg';
import ktgLogoTxt from '../../assets/img/Kompetegram.svg'
import arrowRedirect from '../../assets/img/Arrow-Redirect.svg'
import orbit1 from '../../assets/img/Illustration-Orbit.svg'

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
                    <img src={ ktgLogo } alt="" id="logo"/>
                    <img src={ ktgLogoTxt } alt="" id="logo-text"/>
                </div>

                <div className="Section-1">
                    <div className="Header">
                        <h1 id="header-txt">Komunitas, Teknologi, dan Pemrograman</h1>
                    </div>

                    <div className="Description">
                        <p id="description-txt">Untuk menjadi programmer yang baik salah satunya membutuhkan komunitas. Kami menyediakan kerjasama, skill upgrading, dan ide-ide untuk solusi</p>
                    </div>
                    
                    <div className="Register-Button">
                        <a href="/" id="regis-btn">
                            <img src={ arrowRedirect } alt="" id="arrow-logo"/>
                            Daftar
                        </a>
                    </div>

                    <div className="Illustration">
                        <img src={ orbit1 } alt="" id='illustration-img'/>
                    </div>
                </div>
                
            </div>

        );
    }
}
 
export default Home;