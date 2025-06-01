import React, { useState } from "react";

function Comp1()
{
    const [cars, setcars] = useState([]);
    const [caryr, setcaryr] = useState(new Date().getFullYear());
    const [carmk, setcarmk] = useState("");
    const [carmodel, setcarmodel] = useState("");

    function handleaddcar()
    {
        const newcar = {
            year: caryr,
            make: carmk,
            model: carmodel
        };

        setcars(c => [...c, newcar]);
        setcaryr(new Date().getFullYear());
        setcarmk("");
        setcarmodel("");
    }

    function handleremcar(index)
    {
        setcars(c => c.filter((_, i) => i !== index))
    }

    function handledate(event)
    {
        setcaryr(event.target.value);
    }

    function handlemodel(event)
    {
        setcarmodel(event.target.value);
    }
    

    function handlemake(event)
    {
        setcarmk(event.target.value);
    }

    return (
      <>
        <div>
          <h2>list of car objs:</h2>
        </div>

            <ul>
                {cars.map((cardetaills, index) => (
                <li key={index} onClick={() => handleremcar(index)}>
                    {cardetaills.year} { cardetaills.make} {cardetaills.model}
                </li>
                ))}    
            </ul>
        <input
          type="number"
          id="caryr"
          value={caryr}
          placeholder="car yr"
          onChange={handledate}
        />
        <input
          type="text"
          id="carmake"
          value={carmk}
          placeholder="car make"
          onChange={handlemake}
        />
        <input
          type="text"
          id="carmodel"
          value={carmodel}
          placeholder="car model"
          onChange={handlemodel}
        />
            <button onClick={handleaddcar}>
                add
        </button>
      </>
    );
}

export default Comp1;