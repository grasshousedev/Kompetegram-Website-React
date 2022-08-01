import { Component } from 'react';

// Styles
import './styles/Global.css';
import './styles/Mobile.css';

// Components
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';

// Assets
import ktgLogo from '../../assets/img/logo.svg';
import ktgLogoTxt from '../../assets/img/Kompetegram.svg';

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

                <Section1 />

                <Section2 />

                <Section3 />

                <Section4 />

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