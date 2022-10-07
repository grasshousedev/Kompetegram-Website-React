// Library
import Select from "react-select";

const FourthFormRow = () => {

    return (
        <div className="Fourth">
            <div className="WaNum">
                <div className="Title">
                    <p id="text">Nomor WA</p>
                    <p id="requirement">(required)</p>
                </div>
                <input type="text" id="inpWaNum" placeholder="081234567890"/>
                <p id="alert">alert</p>
            </div>
            
            <div className="Major">
                <div className="Title">
                    <p id="text">Program Studi</p>
                    <p id="requirement">(required)</p>
                </div>
                <Select id="inpMajor" options={[]} placeholder="Pilih prodi..." isClearable isDisabled={true}/>
                <p id="alert">alert</p>
            </div>
        </div>
    );
}

export default FourthFormRow;