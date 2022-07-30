import { Component } from 'react';

import './styles/Global.css';
import './styles/Mobile.css';

import ktgLogo from '../../assets/img/logo.svg';
import ktgLogoTxt from '../../assets/img/Kompetegram.svg'

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
                <div className="header">
                    <img src={ ktgLogo } alt="" id='logo'/>
                    <img src={ ktgLogoTxt } alt="" id='logo-text'/>
                </div>
            </div>

        );
    }
}
 
export default Home;