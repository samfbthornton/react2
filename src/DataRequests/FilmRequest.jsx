import { useState } from "react";
import axios from "axios";

const FilmRequest = () => {
    const [data, setData] = useState("");
    const [filmTitle, setFilmTitle] = useState("");
    const apiKey = "140a3585";

const getTitle = (e) => {
    e.preventDefault(); 
    setFilmTitle(e.target.value);
}

const sendRequest = (e) => {
    axios.get("http://www.omdbapi.com/?apikey=" + apiKey + "&t=" + filmTitle)
    .then(response => {
        console.log(response.data);
        setData(response.data);
    });
};

return (
    <>
    <h3>Film Request</h3>
    <input type="text" 
        onChange={(e)=>getTitle(e)}
        placeholder="Enter Film Title"/>
    <button onClick={(e) =>sendRequest(e)}>Click here!</button>
    <br/>
    <h4>{data.Title}</h4>
    <h4>{data.Year}</h4>
    <h4>{data.Plot}</h4>
    <h4>{data.Runtime}</h4>
    <img src={data.Poster} alt="Poster"></img>
    </>
);
}

export default FilmRequest