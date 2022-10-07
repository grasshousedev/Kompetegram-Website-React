import React, { createRef } from 'react';

function FirstFormRow({
  gender,
  setGender,
  alerts,
  setAlerts,
  setFullName,
}) {
  const refMan = createRef();
  const refWoman = createRef();

  // Event Handler
  const manClicked = () => {
    const genderSelected = document.getElementById('genderSelected');
    const manDOM = refMan.current;
    const womanDOM = refWoman.current;

    if (!gender.man) {
      genderSelected.style.marginLeft = '0';

      womanDOM.style.color = '#FFFFFF';
      womanDOM.style.fontWeight = '400';

      manDOM.style.color = '#150E3A';
      manDOM.style.fontWeight = '700';

      setGender({
        man: true,
        woman: false,
      });
    }
  };

  const womanClicked = () => {
    const genderSelected = document.getElementById('genderSelected');
    const manDOM = refMan.current;
    const womanDOM = refWoman.current;

    if (!gender.woman) {
      genderSelected.style.marginLeft = '161px';

      manDOM.style.color = 'white';
      manDOM.style.fontWeight = '400';

      womanDOM.style.color = '#150E3A';
      womanDOM.style.fontWeight = '700';

      setGender({
        man: false,
        woman: true,
      });
    }
  };

  const nameOnChange = (e) => {
    if (!e.target.value.match(/^[a-zA-Z\s]*$/g)) {
      setAlerts({ ...alerts, fullName: '⚠️ Kamu hanya dapat input alfebet dan spasi' });
    } else if (e.target.value === '') {
      setAlerts({ ...alerts, fullName: '⚠️ Tidak boleh kosong' });
    } else {
      setAlerts({ ...alerts, fullName: '' });
      setFullName(e.target.value);
    }
  };

  // Render
  return (
    <div className="First">
      <div className="FullName">
        <div className="Title">
          <p id="text">Nama Lengkap</p>
          <p id="requirement">(required)</p>
        </div>
        <input type="text" name="" id="inpName" placeholder="Azka Syawal Syambara" onChange={nameOnChange} />
        <p id="alert">{alerts.fullName}</p>
      </div>

      <div className="JenisKelamin">
        <div className="Title">
          <p id="text">Jenis Kelamin</p>
          <p id="requirement">(required)</p>
        </div>

        <div className="Box">
          <div id="genderSelected" />
          <div
            id="man"
            ref={refMan}
            role="presentation"
            onClick={() => manClicked()}
          >
            Laki-Laki
          </div>
          <div
            id="woman"
            ref={refWoman}
            role="presentation"
            onClick={() => womanClicked()}
          >
            Perempuan
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstFormRow;
