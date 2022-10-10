// Library
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import React from 'react';
import axios from 'axios';

function ThirdFormRow({
  setEmail,
  departmentsData,
  isLoadingData,
  setLoadingData,
  setDepartment,
  alerts,
  setAlerts,
  setMajorsData,
  setDisabledInp,
}) {
  // Handler
  const emailOnChange = (e) => {
    const email = e.currentTarget.value.toLowerCase();

    if (email.length === "") {
      setAlerts({ ...alerts, email: '⚠️ Tidak boleh kosong' });
    } else if (email[0] === '.' || email[email.length - 1] === '.' || email[0] === '_' || email[email.length - 1] === '_') {
      setAlerts({ ...alerts, email: '⚠️ Terdapat karakter tidak valid' });
    } else if (!email.match(/^[a-z_.0-9]+$/g)) {
      setAlerts({ ...alerts, email: '⚠️ Terdapat karakter tidak valid' });
    } else {
      setAlerts({ ...alerts, email: '' });
    }

    setEmail(email);
  };

  const fetchMajorsData = async (data) => {
    const url = `https://pemrograman.me/api/v1/departments/${data.value}`;

    axios.get(url).then((res) => {
      const tempData = [];
      res.data.data.majors.forEach((val) => {
        tempData.push({ value: val._id, label: val.name });
      });

      setLoadingData({ ...isLoadingData, majors: false });
      setMajorsData(tempData);
    });
  };

  const departmentsOnChange = (e) => {
    if (e === null || e === undefined) {
      setAlerts({ ...alerts, departments: '⚠️ Tidak boleh kosong' });
      setLoadingData({ ...isLoadingData, majors: false });
      setDisabledInp((data) => ({ ...data, majors: true }));
    } else {
      setAlerts({ ...alerts, departments: '' });
      setMajorsData([]);
      fetchMajorsData(e);
      setLoadingData({ ...isLoadingData, majors: true });
      setDisabledInp((data) => ({ ...data, majors: false }));
    }

    setDepartment(e);
  };

  // Render
  return (
    <div className="Third">
      <div className="Email">
        <div className="Title">
          <p id="text">Email</p>
          <p id="requirement">(required)</p>
        </div>
        <div className="InputEmail">
          <input type="text" name="" id="inpEmail" placeholder="azka.syawal" onChange={emailOnChange} />
          <p id="mailDomain">@upi.edu</p>
        </div>
        <p id="alert">{alerts.email}</p>
      </div>

      <div className="Departments">
        <div className="Title">
          <p id="text">Fakultas</p>
          <p id="requirement">(required)</p>
        </div>

        <Select
          id="inpDepartment"
          options={departmentsData}
          placeholder="Pilih fakultas..."
          onChange={departmentsOnChange}
          components={makeAnimated()}
          isClearable
          isLoading={isLoadingData.departments}
        />
        <p id="alert">{alerts.departments}</p>
      </div>
    </div>
  );
}

export default ThirdFormRow;
