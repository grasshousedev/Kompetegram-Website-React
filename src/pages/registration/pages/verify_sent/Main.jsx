// Library
import React, { useEffect, useState, createRef } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

// Styles
import './styles/Phone.css';
import './styles/Tab.css';
import './styles/Desktop.css';

// Assets
import ktgLogo from '../../assets/KTG-Header.svg';

const useQuery = () => {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
};

function Main() {
  // Hook Query
  const query = useQuery();

  // Hook State
  const [countdown, setCountdown] = useState(59);

  // Hook Ref
  const countdownRef = createRef();
  const resendBtnRef = createRef();

  // Handler
  useEffect(() => {
    setTimeout(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      } else {
        countdownRef.current.style.display = 'none';
        resendBtnRef.current.style.display = 'block';
      }
    }, 1000);
  });

  const resendOnClicked = () => {
    axios.post('https://pemrograman.me/api/v1/members/resend', {
      userId: query.get('userId'),
      resendToken: query.get('resendToken'),
    });
    setCountdown(59);
    countdownRef.current.style.display = 'block';
    resendBtnRef.current.style.display = 'none';
  };

  // Render
  return (
    <div className="RegistrationVerifySent">
      <div className="Header">
        <div className="HeaderLogo">
          <img src={ktgLogo} alt="" id="image" />
        </div>

        <div id="line" />

        <div className="Title">
          <h1 id="header">OPEN REGISTRATION</h1>

          <h3 id="desc">BATCH 3</h3>
        </div>
      </div>

      <div className="Content">
        <div className="Box">
          <div className="TriDotAnimation">
            <div id="circleOne" />
            <div id="circleTwo" />
            <div id="circleThree" />
          </div>

          <h3 id="title">VERIFY YOUR EMAIL</h3>

          <p id="desc">
            Kami telah mengirim email ke
            {query.get('email')}
            untuk melakukan verifikasi terhadap email anda.
            Link akan kadaluarsa dalam 15 menit.
          </p>

          <div className="ResendVerification">
            <p id="text">Kirim ulang verifikasi:</p>
            <p id="countdown" ref={countdownRef}>{countdown}</p>
            <button id="resendBtn" type="button" ref={resendBtnRef} onClick={resendOnClicked}>Kirim</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
