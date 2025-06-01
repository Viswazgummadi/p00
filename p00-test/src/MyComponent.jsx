import React, { useState } from "react";

function MyComponent()
{

    const [food, setFood] = useState(["apple","orange","banana"]);

    function handleaddfood()
    {
        const newfood = document.getElementById("fooditem").value.trim();
        document.getElementById("fooditem").value = "";
        
        if (newfood !== "")
        {
            setFood(f => [...f, newfood]);
        }
    }
    function handleremfood(index)
    {
        setFood(food.filter((_ , i) => i!== index))
    }

    return (
      <>
        <ul>
          {food.map((food, index) => (
            <li
              key={index}
              onClick={() => handleremfood(index)}
              style={{ backgroundColor: "yellow", padding: "4px", width: "10%" }}
            >
              {food}
            </li>
          ))}
          <input type="text" id="fooditem" placeholder="enter new item" />
          <button onClick={handleaddfood}>add</button>
        </ul>
      </>
    );
}

export default MyComponent;        <h2>list of food</h2>
