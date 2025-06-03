import React, { useState, useEffect, useCallback } from "react";

function Clocker() {


    const [time, setTime] = useState(new Date());

    useEffect(
        () => { 
            const intervalid = setInterval(() => {
                setTime(new Date());
            }, 1000);


            return () => { 
                clearInterval(intervalid)
            }
        }
        , []
    );

    function formatTime() { 
        let hours = time.getHours();
        let min = time.getMinutes();
        let sec = time.getSeconds();

        const meridiam = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;
        hours = padzero(hours);
        min = padzero(min);
        sec = padzero(sec);
        return `${hours} : ${min} : ${sec} ${meridiam}`
    }

    function padzero(number)
    {
        return number - 10 > 0 ? `${number}` : `0${number}`;  
    }
    return (
      <div className="clock-container">
        <div className="clock">
          <span>{formatTime()}</span>
        </div>
      </div>
    );
}

export default Clocker;
