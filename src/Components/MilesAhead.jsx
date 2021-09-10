import {useState} from "react";

const MilesAhead = () => {

    const [steps, setSteps] = useState(0);

return (
    <>
    <p>Today you've taken {steps} steps!</p>
    <br/>
    <button onClick={() => setSteps(prev => prev + 1)}>I took another step</button>
    </>
);
}

export default MilesAhead;