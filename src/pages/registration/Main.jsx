import React, { useState, useEffect } from 'react';
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
  const [portfolio, setPortfolio] = useState('')
  const [isLoadingData, setLoadingData] = useState({ deparments: true, majors: false });
  const [isDisabledInp, setDisabledInp] = useState({ majors: true });

  // On First Mount
  useEffect(() => {
    axios.get('https://pemrograman.me/api/v1/departments').then((res) => {
      const tempData = [];
      res.data.data.forEach((val) => {
        tempData.push({ value: val._id, label: val.name });
      });

      setDepartmentsData(tempData);
      setLoadingData((data) => ({ ...data, deparments: false }));
    });
  }, []);
  
  // Hanlder
  const portoOnChanged = (e) => {
    setPortfolio(e.currentTarget.value)
  }
  console.log(
    "\nName:",
    fullName,
    "\nGend:",
    gender,
    "\nNIM:",
    nim,
    "\nInterest:",
    interest,
    "\nEmail:",
    email,
    "\nDepart:",
    department,
    "\nWA:",
    waNum,
    "\nMajor:",
    major,
    "\nPorto:",
    portfolio
  );
  
  // Render
  document.title = 'Kompetegram - Registration';
  return (
    <div className="Main">
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

      <div className="Section-1">

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

        <div className="Submit">
          <div id="submitBtn">I&lsquo;M READY</div>
        </div>
      </div>
    </div>
  );
}

export default Main;
