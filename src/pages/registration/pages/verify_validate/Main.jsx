// Library
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

// Styles
import './styles/Phone.css';
import './styles/Tab.css';
import './styles/Desktop.css';

// Assets
import ktgLogo from '../../assets/KTG-Header.svg';
import checkLogo from './assets/Check.svg';
import crossLogo from './assets/Cross.svg';
import waLogo from './assets/WhatsApp.svg';

const useQuery = () => {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
};

function Main() {
  // Hook Query
  const query = useQuery();

  // Hook State
  const [waLink, setWaLink] = useState('')
  const [resVerifData, setResVerifData] = useState(false);
  const [resMessage, setResMesage] = useState('');

  // Handler
  useEffect(() => {
    if (query.get('userId') && query.get('verifyToken')) {
      axios.post('https://pemrograman.me/api/v1/members/verify', {
        userId: query.get('userId'),
        verifyToken: query.get('verifyToken'),
      }, { timeout: 10000 }).then((res) => {
        if (res.status === 200) {
          if (res.data.success === true) {
            setResVerifData('success');
            setWaLink(res.data.data.link);
          }
        }
      }).catch((err) => {
        if (err.code === 'ERR_NETWORK') {
          setResVerifData('bad');
        } else if (err.code === 'ECONNABORTED') {
          setResVerifData('bad');
        } else if (err.response.data.success === false) {
          setResVerifData('invalid');
          setResMesage(err.response.data.message)
          if(err.response.data.message === "Member is already verified") {
            setWaLink(err.response.data.data.link);
          }
        } else if (err.response.status === 400) {
          setResVerifData('bad');
        }
      });
    } else {
      setResVerifData('bad');
    }
  }, []);

  if (resVerifData === 'success') {
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
  
            <a href="https://whatsapp.com" target={'_blank'} rel="noreferrer"  id="whatsappBtn">
              <img src={waLogo} alt="" id="image"/>
              <p id="text">WhatsApp</p>
            </a>
          </div>
        </div>
      </div>
    );
  } else if (resVerifData === 'invalid') {
    const boxCondition = () => {
      if(resMessage === "Member is already verified")
      return(
        <div className="Box">
          <div className="CheckLogo">
            <img src={crossLogo} alt="" id="image"/>
          </div>

          <h3 id="title">ALREADY VERIFIED</h3>

          <p id="desc">Kamu sudah terverifikasi, silahkan gabung ke grup WhatsApp untuk info lebih lanjut</p>

          <a href={waLink} target={'_blank'} rel="noreferrer" id="whatsappBtn">
            <img src={waLogo} alt="" id="image"/>
            <p id="text">WhatsApp</p>
          </a>
        </div>
      );
    };

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
              <img src={crossLogo} alt="" id="image"/>
            </div>

            {boxCondition}
          </div>
        </div>
      </div>
    );
  } else if(resVerifData === 'bad') {
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
  
}

export default Main;
