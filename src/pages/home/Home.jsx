// Styles
import './styles/Global.css';
import './styles/Mobile.css';
import './styles/Tablet.css';
import './styles/Desktop.css';

// Components
import React, { Component } from 'react';
import {
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
} from './components';

// Assets
import ktgLogo from '../../assets/img/logo.svg';
import ktgLogoTxt from '../../assets/img/Kompetegram.svg';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="Home">
        <div className="Content">
          <a href="/" className="Header">
            <img src={ktgLogo} alt="" id="logo" />
            <img src={ktgLogoTxt} alt="" id="logo-text" />
          </a>
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
        </div>
      </div>
    );
  }
}

export default Home;
