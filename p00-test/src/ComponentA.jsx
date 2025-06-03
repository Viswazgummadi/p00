import ComponentB from "./ComponentB";

import React, { useEffect, useState} from "react";



function ComponentA()
{

    const [user, setUser] = useState("bro code");
    return (
        <div className="box">
            component A
            <h2>{ `Hello ${user} `}</h2>
            <ComponentB/>
        </div>
    );
}


export default ComponentA