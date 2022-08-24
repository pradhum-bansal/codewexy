import React, {useState} from 'react';
import Select  from 'react-select';

const options = [
    { value: 'H', label: 'Head' },
    { value: 'T', label: 'Tail' },
  ];

const Game = (props) =>{
const [value, setValue] = useState([]);
const [show, setShow] = useState(false);
const [showPlace, setShowPlace] = useState(false);
const [showValue, setShowValue] = useState("");
const selectOptions = (e) => {
    setShowPlace(false);
    setShowValue(e);
};
const showTable = () =>{
    setShow(true);
    setShowPlace(true);
    if(!!showValue && showValue!==''){
    let tempArray = [...value];
    let l = tempArray.length;
    if (l >= 1 && tempArray[l - 1]) {
      let lastArray = tempArray[l - 1];
      let lastArrayLength = lastArray.length;
      if (lastArrayLength >= 1 && lastArray[lastArrayLength - 1] === showValue.value) {
        lastArray.push(showValue.value);
      } else {
        tempArray.push([showValue.value]);
      }
    } else {
      tempArray.push([showValue.value]);
    }
    setValue(tempArray);
    }
}
    return(
       <div className='row container'>
            <div className='col-12 d-flex align-items-center justify-content-center my-5'>
                <Select options={options} className='custom-select mx-2' value = {showPlace ? null : showValue} onChange={(e) => selectOptions(e)} placeholder='Select Value'></Select>
                <button className="btn btn-primary"onClick={()=> showTable()}>Submit</button> 
            </div> 
            {value.length === 0  && show === true ?     
                <div className="col-12 d-flex align-items-center justify-content-center"><span>Please select value from dropdown</span></div> : <></>} 
    <div>
        { !!show && show === true ?
        <div className="gparent">
        {!!value ? value.map((item, index) => (
          <div className="text" key={index}>
            <div className="parent">
              {!!item && item.map((data ,i) => <span key={i}>{data}</span>)}
            </div>
          </div>
        )):<></>}
        </div> : <></>}
       </div> 
    </div>
    )
}
export default Game;