// Library
import CreatableSelect from 'react-select/creatable';
import makeAnimated from 'react-select/animated';
import React from 'react';

function SecondFormRow({
  setNim, setInterest, alerts, setAlerts, interestData,
}) {
  // Handler
  const nimOnChange = (e) => {
    const nim = e.currentTarget.value;

    if (nim === '') {
      setAlerts({ ...alerts, nim: '⚠️ Tidak boleh kosong' });
    } else if (!nim.match(/^[0-9]+$/g)) {
      setAlerts({ ...alerts, nim: '⚠️ Kamu hanya dapat masukan angka' });
    } else if (nim.length !== 7) {
      setAlerts({ ...alerts, nim: '⚠️ Panjang NIM tidak valid' });
    } else {
      setAlerts({ ...alerts, nim: '' });
    }

    setNim(nim);
  };

  const interestOnChange = (e) => {
    if (e.length < 1) {
      setAlerts({ ...alerts, interest: '⚠️ Tidak boleh kosong' });
    } else {
      setAlerts({ ...alerts, interest: '' });
    }

    setInterest(e);
  };

  // Render
  return (
    <div className="Second">
      <div className="NIM">
        <div className="Title">
          <p id="text">NIM</p>
          <p id="requirement">(required)</p>
        </div>
        <input type="text" name="" id="inpNim" onChange={nimOnChange} placeholder="1234567" />
        <p id="alert">{alerts.nim}</p>
      </div>

      <div className="Interest">
        <div className="Title">
          <p id="text">Minat</p>
          <p id="requirement">(required)</p>
        </div>
        <CreatableSelect
          id="inpInterest"
          options={interestData}
          placeholder="Ketik minat..."
          onChange={interestOnChange}
          components={makeAnimated()}
          isMulti
          isClearable={false}
          formatCreateLabel={(str) => `➕ Add "${str}"`}
        />
        <p id="alert">{alerts.interest}</p>
      </div>
    </div>
  );
}

export default SecondFormRow;
