import { useState } from "react";

function Effect1()
{

    const [count, setcount] = useState(0);

    function addcount()
    {
        setcount((c) => c - 1);
    }
    return (
      <>
        <p>
          count : {count}
          <br />
          <button onClick={addcount}>-</button>
          <button onClick={() => setcount((c) => c + 1)}>+</button>
        </p>
      </>
    );
}

export default Effect1;