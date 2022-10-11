// Assets
import ktgLogo from '../../../assets/KTG-Header.svg';
import checkLogo from '../assets/Check.svg';
import waLogo from '../assets/WhatsApp.svg';

function Main({waLink}) {

  
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
          <div className="Box">
            <div className="CheckLogo">
              <img src={checkLogo} alt="" id="image"/>
            </div>
  
            <h3 id="title">EMAIL VERIFIED</h3>
  
            <p id="desc">Silahkan gabung ke grup WhatsApp untuk info lebih lanjut</p>
  
            <a href={waLink} target={'_blank'} rel="noreferrer"  id="whatsappBtn">
              <img src={waLogo} alt="" id="image"/>
              <p id="text">WhatsApp</p>
            </a>
          </div>
        </div>
      </div>
  );
}

export default Main;