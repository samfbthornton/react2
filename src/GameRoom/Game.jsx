import { useState } from "react";
import AddGamers from "./AddGamers";
import GameRoom from "./GameRoom";

const Game = () => {
    const [gamerName, setGamerName] = useState("");
    const [gamers, setGamers] = useState([]);

const newGamer = ({target}) =>
    setGamerName(target.value);
const submitForm = (e) => e.preventDefault();
const handleAdd = () => setGamers(gamers => [...gamers, gamerName]);


return(
    <>
    <AddGamers newGamer={newGamer} submitHandler={submitForm} handleAdd={handleAdd}/>
    <GameRoom gamers={gamers}/>
    </>
);
}
export default Game;