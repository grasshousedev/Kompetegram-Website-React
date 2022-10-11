// Library
import React, { useEffect, useState, createRef } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';

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

const SITE_KEY = "6LcOO2kiAAAAALkcSRRv44yqaS1GVPn6d6m7HwoJ";

const Main = () => {
  // Hook Query
  const query = useQuery();

  // Hook State
  const [countdown, setCountdown] = useState(59);
  const [resendAction, setResendAction] = useState(false);
  const [buttonDisable, setButtonDisable] = useState(true);
  const [captchaToken, setCaptchaToken] = useState('');

  // Hook Ref
  const countdownRef = createRef();
  const resendBtnRef = createRef();

  // Handler
  useEffect(() => {
    setTimeout(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      } else {
        setResendAction(true);
      }
    }, 1000);
  });

  const resendOnClicked = () => {
    axios.post('https://pemrograman.me/api/v1/members/resend', {
      userId: query.get('userId'),
      resendToken: query.get('resendToken')
    }, {
      headers: { captcha: captchaToken }
    });
    setCountdown(59);
    setResendAction(false);
    setButtonDisable(true);
    window.grecaptcha.reset();
  }

  const onSuccessCaptcha = (token) => {
    setButtonDisable(false);
    setCaptchaToken(token);
  }

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

          <p id="desc">Kami telah mengirim email ke {query.get('email')} untuk melakukan verifikasi terhadap email anda. Link akan kadaluarsa dalam 15 menit.</p>

          {resendAction && (
            <div id="captcha-box">
              <ReCAPTCHA
                sitekey={SITE_KEY}
                onChange={onSuccessCaptcha}
                onExpired={() => setButtonDisable(true)}
                onErrored={() => setButtonDisable(true)}
                theme="light"
              />
            </div>
          )}

          <div className="ResendVerification">
            <p id="text">Kirim ulang verifikasi:</p>
            {resendAction ? (
              <button 
                disabled={buttonDisable}
                id={buttonDisable ? 'resendBtnDisable' : 'resendBtn'} 
                ref={resendBtnRef} 
                onClick={resendOnClicked}
              >
                Kirim
              </button>
            ) : (
              <p id="countdown" ref={countdownRef}>{countdown}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
