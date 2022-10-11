import React, { useState, useEffect, createRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';

// Styles
import './styles/Phone.css';
import './styles/Tab.css';
import './styles/Desktop.css';

// Assets
import headerLogo from './assets/KTG-Header.svg';

// Components
import {
  FirstFormRow,
  SecondFormRow,
  ThirdFormRow,
  FourthFormRow,
} from './components';

function Main() {
  // Static Data
  const interestData = [
    { value: '0', label: 'Android Developer' },
    { value: '1', label: 'Artificial Intelligence' },
    { value: '2', label: 'Back-End Developer' },
    { value: '3', label: 'Cybersecurity' },
    { value: '4', label: 'Data Analyst' },
    { value: '5', label: 'Data Scientist' },
    { value: '6', label: 'Front-End Developer' },
    { value: '7', label: 'Game Designer' },
    { value: '8', label: 'Game Developer' },
    { value: '9', label: 'IOS Developer' },
    { value: '10', label: 'IoT Developer' },
    { value: '11', label: 'Machine Learning' },
    { value: '12', label: 'UI/UX' },
    { value: '13', label: 'Web Developer' },
    { value: '14', label: 'Database Designer' },
  ];

  // Hook State Data
  const [alerts, setAlerts] = useState({
    fullName: '',
    nim: '',
    interest: '',
    email: '',
    departments: '',
    waNum: '',
    majors: '',
  });
  const [fullName, setFullName] = useState('');
  const [gender, setGender] = useState({ man: true, woman: false });
  const [nim, setNim] = useState('');
  const [interest, setInterest] = useState([]);
  const [email, setEmail] = useState('');
  const [departmentsData, setDepartmentsData] = useState([]);
  const [department, setDepartment] = useState();
  const [waNum, setWaNum] = useState('');
  const [majorsData, setMajorsData] = useState([]);
  const [major, setMajor] = useState();
  const [portfolio, setPortfolio] = useState('');
  const [isLoadingData, setLoadingData] = useState({ departments: true, majors: false });
  const [isDisabledInp, setDisabledInp] = useState({ majors: true });

  const [buttonDisable, setButtonDisable] = useState(true);
  const [captchaToken, setCaptchaToken] = useState('');

  // Hook Ref
  const popUpBlockRef = createRef();
  const alertResponseRef = createRef();
  const section1Ref = createRef();
  const submitBtnRef = createRef();
  const loadingRef = createRef();

  // Navigation
  const navigate = useNavigate();

  // CAPCTHA SiteKey
  const SITE_KEY = '6LcOO2kiAAAAALkcSRRv44yqaS1GVPn6d6m7HwoJ';

  // On First Mount
  useEffect(() => {
    axios.get('https://pemrograman.me/api/v1/departments', { timeout: 10000 }).then((res) => {
      if (res.status === 200) {
        const tempData = [];

        res.data.data.forEach((val) => {
          tempData.push({ value: val._id, label: val.name });
        });

        setDepartmentsData(tempData);
        setLoadingData((data) => ({ ...data, departments: false }));
      }
    }).catch((err) => {
      if (err.code === 'ERR_NETWORK') {
        alertResponseRef.current.innerHTML = '<p style="color: white">Tidak ada koneksi. Harap periksa jaringan anda lalu refresh halaman ini</p>';
        alertResponseRef.current.style.display = 'block';
        popUpBlockRef.current.style.display = 'block';
        alertResponseRef.current.scrollIntoView();
      } else if (err.code === 'ECONNABORTED') {
        alertResponseRef.current.innerHTML = '<p style="color: white">Koneksi timeout. Harap periksa jaringan anda lalu refresh halaman ini</p>';
        alertResponseRef.current.style.display = 'block';
        popUpBlockRef.current.style.display = 'block';
        alertResponseRef.current.scrollIntoView();
      } else if (err.response.status >= 400 && err.response.status < 500) {
        alertResponseRef.current.innerHTML = `<p style="color: white">Error ${err.response.status}. Harap periksa jaringan anda lalu refresh halaman ini</p>`;
        alertResponseRef.current.style.display = 'block';
        popUpBlockRef.current.style.display = 'block';
        alertResponseRef.current.scrollIntoView();
      }
    });
  }, []);

  // Hanlder
  const portoOnChanged = (e) => {
    setPortfolio(e.currentTarget.value);
  };

  const onSuccessCaptcha = (token) => {
    setButtonDisable(false);
    setCaptchaToken(token);
    console.log(token);
  };

  const submitOnClicked = () => {
    let isFormValid = true;
    let genderStr = '';
    const tempAlerts = {
      fullName: '',
      nim: '',
      interest: '',
      email: '',
      departments: '',
      waNum: '',
      majors: '',
    };

    if (!fullName.match(/^[a-zA-Z\s]+$/g)) {
      isFormValid = false;
      tempAlerts.fullName = '⚠️ Kamu hanya dapat input alfebet dan spasi';
    } else if (fullName === '') {
      isFormValid = false;
      tempAlerts.fullName = '⚠️ Tidak boleh kosong';
    }

    if (gender.man === true) {
      genderStr = 'Man';
    } else if (gender.woman === true) {
      genderStr = 'Woman';
    }

    if (nim === '') {
      isFormValid = false;
      tempAlerts.nim = '⚠️ Tidak boleh kosong';
    } else if (!nim.match(/^[0-9]+$/g)) {
      isFormValid = false;
      tempAlerts.nim = '⚠️ Kamu hanya dapat masukan angka';
    } else if (nim.length !== 7) {
      isFormValid = false;
      tempAlerts.nim = '⚠️ Panjang NIM tidak valid';
    }

    if (interest.length < 1) {
      isFormValid = false;
      tempAlerts.interest = '⚠️ Tidak boleh kosong';
    }

    if (email === '') {
      isFormValid = false;
      tempAlerts.email = '⚠️ Tidak boleh kosong';
    } else if (email[0] === '.' || email[email.length - 1] === '.' || email[0] === '_' || email[email.length - 1] === '_') {
      isFormValid = false;
      tempAlerts.email = '⚠️ Terdapat karakter tidak valid';
    } else if (!email.match(/^[a-z_.0-9]+$/g)) {
      isFormValid = false;
      tempAlerts.email = '⚠️ Terdapat karakter tidak valid';
    }

    if (department === null || department === undefined) {
      isFormValid = false;
      tempAlerts.departments = '⚠️ Tidak boleh kosong';
    }

    if (waNum === '') {
      isFormValid = false;
      tempAlerts.waNum = '⚠️ Tidak boleh kosong';
    } else if (!waNum.match(/^[0-9]+$/g)) {
      isFormValid = false;
      tempAlerts.waNum = '⚠️ Input harus berupa angka';
    } else if (waNum.length < 10) {
      isFormValid = false;
      tempAlerts.waNum = '⚠️ Panjang nomor tidak valid';
    }

    if (major === undefined || major === null) {
      tempAlerts.majors = '⚠️ Tidak boleh kosong';
    }

    if (isFormValid === false) {
      setAlerts(tempAlerts);
      section1Ref.current.scrollIntoView();
    } else {
      submitBtnRef.current.style.display = 'none';
      loadingRef.current.style.display = 'block';
      popUpBlockRef.current.style.display = 'block';

      const data = {
        name: fullName,
        nim,
        email: `${email}@upi.edu`,
        gender: genderStr,
        major: major.label,
        department: department.label,
        phone: waNum,
        interests: interest.map((val) => val.label),
        portfolio,
      };

      axios.post(
        'https://pemrograman.me/api/v1/members',
        data,
        {
          timeout: 10000,
          headers: {
            captcha: captchaToken,
          },
        },
      ).then((res) => {
        if (res.status === 200) {
          navigate({
            pathname: '/registration/verifySent',
            search: `?userId=${res.data.data.userId}&resendToken=${res.data.data.resendToken}&email=${email}`,
          });
        }
      }).catch((err) => {
        if (err.code === 'ERR_NETWORK') {
          alertResponseRef.current.innerHTML = '<p style="color: white">Tidak ada koneksi. Harap periksa jaringan anda lalu refresh halaman ini</p>';
          alertResponseRef.current.style.display = 'block';
          popUpBlockRef.current.style.display = 'block';
          alertResponseRef.current.scrollIntoView();
          
          submitBtnRef.current.style.display = 'block';
          loadingRef.current.style.display = 'none';
          popUpBlockRef.current.style.display = 'none';
        } else if (err.code === 'ECONNABORTED') {
          alertResponseRef.current.innerHTML = '<p style="color: white">Koneksi timeout. Harap periksa jaringan anda lalu refresh halaman ini</p>';
          alertResponseRef.current.style.display = 'block*=';
          popUpBlockRef.current.style.display = 'block';
          alertResponseRef.current.scrollIntoView();
          
          submitBtnRef.current.style.display = 'block';
          loadingRef.current.style.display = 'none';
          popUpBlockRef.current.style.display = 'none';
        } else if (err.response.data.success === false) {
          if (err.response.data.message.length > 0) {
            const existsDataAlerts = {
              nim: '',
              email: '',
              waNum: '',
            };

            if (err.response.data.message.includes('NIM already registered')) {
              existsDataAlerts.nim = '⚠️ NIM sudah pernah terdaftar';
            }
            if (err.response.data.message.includes('Email already registered')) {
              existsDataAlerts.email = '⚠️ Email sudah pernah terdaftar';
            }
            if (err.response.data.message.includes('Phone already registered')) {
              existsDataAlerts.waNum = '⚠️ Nomor sudah pernah terdaftar';
            }

            setAlerts({ ...alerts, ...existsDataAlerts });
            alertResponseRef.current.innerHTML = '<p style="color: white">Data diri yang kamu input sudah terdaftar. Jika ini merupakan suatu kesalahan harap hubungi Contact Person: <a style="color: #3120E0" href="https://wa.me/6289661287927">Adrian</a> | <a style="color: #3120E0" href="https://wa.me/6281381168928">Vano</a></p>';
            alertResponseRef.current.style.display = 'block';
            alertResponseRef.current.scrollIntoView();
          
            submitBtnRef.current.style.display = 'block';
            loadingRef.current.style.display = 'none';
            popUpBlockRef.current.style.display = 'none';
          }
        } else if (err.response.status === 400) {
          alertResponseRef.current.innerHTML = '<p style="color: white">Error Bad Request. Harap periksa inputan anda dengan teliti, periksa jaringan anda, atau refresh halaman ini</p>';
          alertResponseRef.current.style.display = 'block';
          alertResponseRef.current.scrollIntoView();
          
          submitBtnRef.current.style.display = 'block';
          loadingRef.current.style.display = 'none';
          popUpBlockRef.current.style.display = 'none';
        }

        window.grecaptcha.reset();
        setButtonDisable(true);
      });
    }
  };

  // Render
  document.title = 'Kompetegram - Registration';
  return (
    <div className="Main">
      <div className="popUpBlock" ref={popUpBlockRef} />

      <div className="Header">
        <div className="image">
          <img src={headerLogo} alt="" id="headerLogo" />
        </div>
        <div id="line" />
        <div className="Title">
          <h1 id="header">OPEN REGISTRATION</h1>
          <h3 id="desc">BATCH 3</h3>
        </div>
      </div>

      <div className="Section-1" ref={section1Ref}>
        <div className="alertResponse" ref={alertResponseRef} />

        <div className="Box-Form">

          <FirstFormRow
            fullName={fullName}
            setFullName={setFullName}
            alerts={alerts}
            setAlerts={setAlerts}
            gender={gender}
            setGender={setGender}
          />

          <SecondFormRow
            nim={nim}
            setNim={setNim}
            interest={interest}
            setInterest={setInterest}
            alerts={alerts}
            setAlerts={setAlerts}
            interestData={interestData}
          />

          <ThirdFormRow
            email={email}
            setEmail={setEmail}
            departmentsData={departmentsData}
            isLoadingData={isLoadingData}
            setLoadingData={setLoadingData}
            setDepartment={setDepartment}
            alerts={alerts}
            setAlerts={setAlerts}
            setMajorsData={setMajorsData}
            setDisabledInp={setDisabledInp}
          />

          <FourthFormRow
            setWaNum={setWaNum}
            isLoadingData={isLoadingData}
            isDisabledInp={isDisabledInp}
            majorsData={majorsData}
            setMajor={setMajor}
            alerts={alerts}
            setAlerts={setAlerts}
          />

          <div className="Fifth">
            <div className="Portfolio">
              <div className="Title">
                <p id="text">Portfolio</p>
                <p id="requirement">(optional)</p>
              </div>
              <input
                type="text"
                name=""
                id="inpPortfolio"
                placeholder="GitHub, LinkedIn, dll."
                onChange={portoOnChanged}
              />
            </div>
          </div>
        </div>

        <div id="captcha-box">
          <ReCAPTCHA
            sitekey={SITE_KEY}
            onChange={onSuccessCaptcha}
            onExpired={() => setButtonDisable(true)}
            onErrored={() => setButtonDisable(true)}
            theme="light"
          />
        </div>

        <div className="Submit">
          <button
            disabled={buttonDisable}
            type="button"
            id={buttonDisable ? 'submitBtnDisable' : 'submitBtn'}
            ref={submitBtnRef}
            onClick={submitOnClicked}
          >
            I&lsquo;M READY
          </button>
          <div className="loading" ref={loadingRef}>
            <div className="lds-roller">
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
