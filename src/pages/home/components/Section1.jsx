import React, { Component } from 'react';

import arrowRedirect from '../../../assets/img/Arrow-Redirect.svg';
import illustration from '../../../assets/img/Illustration-Orbit.svg';
import illustrationDesktop from '../../../assets/img/Illustration-Orbit-desktop.svg';
import { Link } from 'react-router-dom';

class Section1 extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    return;
  }

  render() {
    return (
      <div className="Section-1">
        <article className="Content">
          <div className="Header">
            <h1 id="header-txt">Komunitas, Pemrograman, dan Teknologi</h1>
          </div>

          <div className="Description">
            <p id="desc-txt">
              Untuk menjadi programmer yang baik komunitas merupakan salah satu
              pendukungnya. Kami menyediakan kerjasama, skill upgrading, dan
              ide-ide untuk solusi
            </p>
          </div>

          <div className="Register-Button">
            <Link to="/registration" id="regis-btn">
              <img src={arrowRedirect} alt="" id="arrow-logo" />
                Daftar
            </Link>
          </div>
        </article>

        <div className="Illustration">
          <img src={illustration} alt="Orbit" id="illus-img" />
          <img src={illustrationDesktop} alt="Orbit" id="illus-img-desktop" />
        </div>
      </div>
    );
  }
}

export default Section1;
