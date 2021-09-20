import { useState } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";

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
            <div style={{
                color: "hotpink",
                backgroundColor: "lightblue",
                borderStyle: "inset",
                borderWidth: "thick"
            }}>
                <h3>Film Request</h3>
                <input type="text"
                    onChange={(e) => getTitle(e)}
                    style={{
                        float: "left",
                        backgroundColor: "slateblue",
                        color: "hotpink"
                    }}
                    placeholder="Enter Film Title" />
                <button onClick={(e) => sendRequest(e)}
                    style={{
                        color: "hotpink",
                        float: "left" 
                        }}>Click here!</button>
                <br/>
                <Card>
                <Card.Title>{data.Title}</Card.Title>
                <Card.Subtitle>{data.Year}</Card.Subtitle>
                <Card.Text style={{float:"left"}}>{data.Plot}</Card.Text>
                <Card.Text>{data.Runtime}</Card.Text>
                <img src={data.Poster} alt="Poster"></img>
                </Card>
            </div>
        </>
    );
}

export default FilmRequest