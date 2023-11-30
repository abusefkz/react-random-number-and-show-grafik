import React, { useEffect } from "react";
import { useState } from "react";

const Number = ({ value, setValue,value2,setValue2 }) => {
  const [minNumber, setMinNumber] = useState(0);
  const [maxNumber, setMaxNumber] = useState(10);

  const [stop,setStop] = useState([])
  const [second, setSecond] = useState([]);
  const [show, setShow] = useState(true);

  //OnClick İşlemleri Start and Stop

  const getRandomNumber = () => {
    if (minNumber == [] || maxNumber == [] || second == []) {
      return false;
    } else if (minNumber < 0 || maxNumber < 0) {
      return false;
    } else {
     let interval = setInterval(() => {
        let random = Math.floor(
          Math.random() * (maxNumber - minNumber + 1) + minNumber
        );
        setValue((value) => [...value, random]);
        let random2 = Math.floor(
          Math.random() * (maxNumber - minNumber + 1) + minNumber
        );
        setValue2((value2) => [...value2, random2]);
        
      }, second * 1000);
      
      setStop(interval)
      setShow(false);
    }
  };

  const stopRandom = () => {
    clearInterval(stop)
    setShow(true);
  };

  //OnClick İşlemleri Start and Stop ---END

  return (
    <div className="label-input ">
      <div className="inputs mt-2">
        <p>Min:</p>
        <input
          type="number"
          placeholder="0,1,5,8..."
          onChange={(e) => setMinNumber(+e.target.value)}
        />
        <br />

        <br />
        <p>Max:</p>
        <input
          type="number"
          placeholder="1,3,9,10..."
          onChange={(e) => setMaxNumber(+e.target.value)}
        />
      </div>

      <div className="random-second">
        <p>Kaç Saniyede Random Sayı Atsın:</p>
        <input
          onChange={(e) => setSecond(+e.target.value)}
          type="number"
          placeholder="Birşeyler Yazın"
        />
      </div>
        
      <div className="buttons">
         {
            <button className="btn btn-success btn-sm" disabled={!show} onClick={getRandomNumber}>
            Start
            </button>
         }

         {
          <button
          className="btn btn-danger btn-sm"
          disabled={show}
          onClick={stopRandom}
        >
          Stop
        </button>
         }

      </div>
    </div>
  );
};

export default Number;
