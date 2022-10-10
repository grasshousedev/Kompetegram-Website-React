// Library
import { useNavigate } from 'react-router-dom';

// Assets
import ktgLogo from '../../../assets/KTG-Header.svg';
import checkLogo from '../assets/Check.svg';
import waLogo from '../assets/WhatsApp.svg';
import crossLogo from '../assets/Cross.svg';

function onAlreadyVerfied(waLink) {
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

function onInvalid() {
  return(
    <div className="Box">
      <div className="CheckLogo">
        <img src={crossLogo} alt="" id="image"/>
      </div>

      <h3 id="title">INVALID</h3>

      <p id="desc" style={{marginBottom: '33px'}}>Terdapat keselahan dalam data verifikasi</p>
    </div>
  );
}

function resCondition(navigate, resMessage, userId, resendToken, email, waLink) {
  if (resMessage === 'Member is already verified') {
    return onAlreadyVerfied(waLink);
  } else if (resMessage === 'Token is expired') {
    navigate({
      pathname: '/registration/verifySent',
      search: `?userId=${userId}&resendToken=${resendToken}&email=${email}`,
    });
  } else  {
    return onInvalid();
  }
}

function Main({resMessage, userId, resendToken, email, waLink}) {
  const navigate = useNavigate();
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
        {resCondition(navigate, resMessage, userId, resendToken, email, waLink)}
      </div>
    </div>
  );
}

export default Main;
