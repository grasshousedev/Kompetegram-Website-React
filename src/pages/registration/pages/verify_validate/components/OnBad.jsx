// Assets
import ktgLogo from '../../../assets/KTG-Header.svg';

function Main() {

  // Render
  return(
    <div className="RegistrationVerifValidate">
      <div className="Header">
        <div className="HeaderLogo">
          <img src={ktgLogo} alt="" id="image" />
        </div>

        <div className="Title">
          <h3 id="desc">Terjadi kesalahan, harap periksa kembali jaringan anda </h3>
        </div>
      </div>
    </div>
  );
}

export default Main;