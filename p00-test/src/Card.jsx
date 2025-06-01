import profilepic from "./assets/1o1.png"

function Card()
{
    return (
        <div className="card">
            <img src={ profilepic} alt="this is my dp :)" />
            <h2 className="card-title">bro code</h2>
            <p className="card-text">
                i am bro code this is a good tutorial... 
            </p>
        </div>
    );
}

export default Card