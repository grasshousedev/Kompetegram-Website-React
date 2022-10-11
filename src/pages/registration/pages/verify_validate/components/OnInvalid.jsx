// Assets
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';

// Assets
import ktgLogo from '../../../assets/KTG-Header.svg';
import checkLogo from '../assets/Check.svg';
import waLogo from '../assets/WhatsApp.svg';
import crossLogo from '../assets/Cross.svg';

function OnAlreadyVerfied(waLink) {
  return(
    <div className="Box">
      <div className="CheckLogo">
        <img src={checkLogo} alt="" id="image"/>
      </div>
    
      <h3 id="title">ALREADY VERIFIED</h3>

      <p id="desc">Kamu sudah terverifikasi, silahkan gabung ke grup WhatsApp untuk info lebih lanjut</p>

      <a href={waLink} target={'_blank'} rel="noreferrer" id="whatsappBtn">
        <img src={waLogo} alt="" id="image"/>
        <p id="text">WhatsApp</p>
      </a>
    </div>
  );
}

function OnExpired({ userId, resendToken, email }) {
  // Static Data
  const SITE_KEY = "6LcOO2kiAAAAALkcSRRv44yqaS1GVPn6d6m7HwoJ";

  // Hook Route
  const navigate = useNavigate();

  // Hook State
  const [captchaToken, setCaptchaToken] = useState('');
  const [buttonDisable, setButtonDisable] = useState(true);
  
  // Handler
  const onSuccessCaptcha = (token) => {
    setButtonDisable(false);
    setCaptchaToken(token);
  }

  const resendOnClicked = () => {
    axios.post('https://pemrograman.me/api/v1/members/resend', {
      userId,
      resendToken,
    }, {
      headers: { captcha: captchaToken }
    }).then((res) => {
      if(res.status === 200) {
        navigate({
          pathname: '/registration/verifySent',
          search: `?userId=${userId}&resendToken=${resendToken}&email=${email}`,
        });
      }
    });

    window.grecaptcha.reset();
    setButtonDisable(true);
  }


  // Render
  return(
    <div className="Box">
      <div className="CheckLogo">
        <img src={crossLogo} alt="" id="image"/>
      </div>

      <h3 id="title">EXPIRED VERIFICATION</h3>

      <p id="desc" style={{marginBottom: '33px'}}>Data verifikasi kamu sudah expired, kamu masih dapat mengirim verifikasi lagi dengan klik tombol kirim di bawah.</p>

      <div id="captcha-box">
        <ReCAPTCHA
          id="captcha-box"
          sitekey={SITE_KEY}
          onChange={onSuccessCaptcha}
          onExpired={() => setButtonDisable(true)}
          onErrored={() => setButtonDisable(true)}
          theme="light"
        />
      </div>

      <div className="ResendVerification">
        <button
          type="button"
          disabled={buttonDisable}
          id={buttonDisable ? 'resendBtnDisable' : 'resendBtn'}
          onClick={resendOnClicked}
        > Kirim </button>
      </div>
    </div>
  );
}

function OnInvalid() {
  return(
    <div className="Box">
      <div className="CheckLogo">
        <img src={crossLogo} alt="" id="image"/>
      </div>

      <h3 id="title">INVALID VERIFICATION</h3>

      <p id="desc" style={{marginBottom: '33px'}}>Terdapat keselahan dalam data verifikasi</p>
    </div>
  );
}

function ResCondition({resMessage, userId, resendToken, email, waLink}) {
  if (resMessage === 'Member is already verified') {
    return (<OnAlreadyVerfied waLink={waLink} />);
  } else if (resMessage === 'Token is expired') {
    return (<OnExpired userId={userId} resendToken={resendToken} email={email} />);
  } else  {
    return (<OnInvalid />);
  }
}

function Main({resMessage, userId, resendToken, email, waLink}) {

  return (
    <div className="RegistrationVerifValidate">
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
        <ResCondition 
          resMessage={resMessage}
          userId={userId}
          resendToken={resendToken}
          email={email}
          waLink={waLink}
        />
      </div>
    </div>
  );
}

export default Main;
