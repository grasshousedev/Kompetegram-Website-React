import React, { Component } from 'react';

import illustration from '../../../assets/img/Illustration-TeamWork.svg';
// import githubIcon from '../../../assets/img/Github-Icon.svg';
import igIcon from '../../../assets/img/Instagram-Icon.svg';
import igIconColored from '../../../assets/img/Instagram-Icon-Colored.svg';

import GithubLogo from './SVG/GithubLogo';

class Section4 extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    return;
  }
  render() {
    return (
      <div className="Section-4">
        <div className="Illustration">
          <img src={illustration} alt="" id="illus-img" />
        </div>

        <div className="Content">
          <div className="Header">
            <h1 id="header-txt">Lebih Dari yang Kamu Bayangkan</h1>
          </div>

          <div className="Description">
            <p id="desc-txt">
              Kompetegram bukan hanya tempat berkumpul saja. Menyebarkan
              informasi dan bekerja sama membangun kreativitas
            </p>
          </div>

          <div className="Buttons">
            <a href="https://www.instagram.com/kompetegram/" rel="noopener noreferrer" target='_blank' className="ig-btn">
              <div className="ig-icon-wrapper">
                <img src={igIcon} alt="" id="ig-icon" />
                <img src={igIconColored} alt="" id="ig-icon-colored" />
              </div>
              <p id="ig-txt">Instagram</p>
            </a>
            <a
              href="https://github.com/PROYEK-KOMPETEGRAM" rel="noopener noreferrer" target='_blank' className="github-btn"
            >
              {/* <img src={githubIcon} alt="" id="github-icon" /> */}
              <GithubLogo className="github-logo" />
              <p id="github-txt">Github</p>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Section4;
