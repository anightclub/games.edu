import { useState, useEffect } from "react";
import './test.css';


const Test = () => {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(1);
    const [value3, setValue3] = useState(2);
    useEffect(() => {
      alert(2)
    }, [value2, value1])
    
    return(
      <>
        <div className="test">
          <button className="tm-main-button" onClick={() => {setValue1(value1 +1)}}>button1</button>
          <button className="tm-main-button" onClick={() => {setValue2(value2 +1)}}>button2</button>
          <button className="tm-main-button" onClick={() => {setValue3(value3 +1)}}>button3</button>
        </div>
        <h3 style={{textAlign:"center", marginTop:"40px"}}>value1 : {value1} value2 : {value2} value3 : {value3}</h3>
      </>
      )
}
export default Test;