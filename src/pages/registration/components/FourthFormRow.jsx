import React from 'react';
import Select from 'react-select';

function FourthFormRow({
  setWaNum,
  isLoadingData,
  isDisabledInp,
  majorsData,
  setMajor,
  alerts,
  setAlerts,
}) {
  // Handler
  const waNumOnChanged = (e) => {
    const data = e.currentTarget.value;

    if (data === '') {
      setAlerts({ ...alerts, waNum: '⚠️ Tidak boleh kosong' });
    } else if (Number.isNaN(Number(data))) {
      setAlerts({ ...alerts, waNum: '⚠️ Input harus berupa angka' });
    } else if (data.length < 10) {
      setAlerts({ ...alerts, waNum: '⚠️ Panjang nomor tidak valid' });
    } else {
      setAlerts({ ...alerts, waNum: '' });
    }

    setWaNum(data);
  };

  const majorsOnChanged = (e) => {
    if (e === undefined || e === null) {
      setAlerts({ ...alerts, majors: '⚠️ Tidak boleh kosong' });
    } else {
      setAlerts({ ...alerts, majors: '' });
    }
    console.log(e);
    setMajor(e);
  };

  // Render
  return (
    <div className="Fourth">
      <div className="WaNum">
        <div className="Title">
          <p id="text">Nomor WA</p>
          <p id="requirement">(required)</p>
        </div>
        <input type="text" id="inpWaNum" placeholder="081234567890" onChange={waNumOnChanged} />
        <p id="alert">{alerts.waNum}</p>
      </div>

      <div className="Majors">
        <div className="Title">
          <p id="text">Program Studi</p>
          <p id="requirement">(required)</p>
        </div>

        <Select
          id="inpMajor"
          options={majorsData}
          placeholder="Pilih prodi..."
          onChange={majorsOnChanged}
          isClearable
          isDisabled={isDisabledInp.majors}
          isLoading={isLoadingData.majors}
        />
        <p id="alert">{alerts.majors}</p>
      </div>
    </div>
  );
}

export default FourthFormRow;
