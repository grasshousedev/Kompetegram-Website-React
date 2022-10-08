import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Styles
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
    { value: '10', label: 'Internet of Things' },
    { value: '11', label: 'Machine Learning' },
    { value: '12', label: 'UI/UX' },
    { value: '13', label: 'Web Developer' },
    { value: '14', label: 'Database Designer' },
  ];

  // Hook State Data
  const [alerts, setAlerts] = useState({
    fullName: '', nim: '', interest: '', email: '', departments: '',
  });
  const [fullName, setFullName] = useState('');
  const [gender, setGender] = useState({ man: true, woman: false });
  const [nim, setNim] = useState('');
  const [interest, setInterest] = useState([]);
  const [email, setEmail] = useState('');
  const [departmentsData, setDepartmentsData] = useState([]);
  const [department, setDepartment] = useState(undefined);
  const [isLoadingData, setLoadingData] = useState({ deparments: true, major: true });

  // On First Mount
  useEffect(() => {
    axios.get('https://pemrograman.me/api/v1/departments').then((res) => {
      const tempData = [];
      res.data.data.forEach((val) => {
        tempData.push({ value: val._id, label: val.name });
      });

      setDepartmentsData(tempData);
      setLoadingData({ deparments: false });
    });
  }, []);

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
            department={department}
            setDepartment={setDepartment}
            alerts={alerts}
            setAlerts={setAlerts}
          />

          <FourthFormRow />
        </div>

        <div className="button">
          <div className="Ready-Btn">I&lsquo;M READY</div>
        </div>
      </div>
    </div>
  );
}

export default Main;
