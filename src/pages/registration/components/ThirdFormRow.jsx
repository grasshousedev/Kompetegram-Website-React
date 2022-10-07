// Library
import Select from "react-select";
import makeAnimated from 'react-select/animated';

const ThirdFormRow = ({email, setEmail, departmentsData, isLoadingData, department, setDepartment, alerts, setAlerts}) => {

    const emailOnChange = (e) => {

        let email = e.currentTarget.value;
        
        if(email.length < 0) {

            setAlerts({...alerts, email: "⚠️ Tidak boleh kosong"});

        } else if(email[0] === "." || email[email.length] === ".") {

            setAlerts({...alerts, email: "⚠️ Email tidak valid"});

        } else if(!email.match(/[a-z.0-9]/g)) {

            setAlerts({...alerts, email: "⚠️ Email tidak valid"});

        } else {

            setAlerts({...alerts, email: ""});

        }

        setEmail(email);

    }

    const departmentsOnChange = (e) => {

        if(e === null || e === undefined) {

            setAlerts({...alerts, deparments: "⚠️ Tidak boleh kosong"});

        } else {

            setAlerts({...alerts, departments: ""});

        }

        setDepartment(e);

    }

    return (
        <div className="Third">
            <div className="Email">
                <div className="Title">
                    <p id="text">Email</p>
                    <p id="requirement">(required)</p>
                </div>
                <div className="InputEmail">
                    <input type="text" name="" id="inpEmail" placeholder="azka.syawal" onChange={emailOnChange}/>
                    <p id="mailDomain">@upi.edu</p>
                </div>
                <p id="alert">{alerts.email}</p>
            </div>

            <div className="Departments">
                <div className="Title">
                    <p id="text">Fakultas</p>
                    <p id="requirement">(required)</p>
                </div>
                <Select id="inpDepartment" options={departmentsData} placeholder="Pilih fakultas..." onChange={departmentsOnChange} components={makeAnimated()} isClearable isLoading={isLoadingData.deparments}/>
                <p id="alert">{alerts.deparments}</p>
            </div>
        </div>
    );
}

export default ThirdFormRow;