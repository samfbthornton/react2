import { useState } from "react";

const Car = () => {
    const [brand, setBrand] = useState("Honda");
    const [model, setModel] = useState("Civic");
    const [colour, setColour] = useState("Grey");
    const [year, setYear] = useState(1991);

    return (
        <>
            <h1>{brand} {model}</h1>
            <p>{colour} {year}</p>

            <form>
                <label>Brand:</label>
                <input name="brand"
                    type="text"
                    value={brand}
                    onChange={e => setBrand(e.target.value)} />

                <label> Model:</label>
                <input name="model"
                    type="text"
                    value={model}
                    onChange={e => setModel(e.target.value)} />

                <label> Colour:</label>
                <input name="colour"
                    type="text"
                    value={colour}
                    onChange={e => setColour(e.target.value)} />

                <label> Year:</label>
                <input name="year"
                    type="text"
                    value={year}
                    onChange={e => setYear(e.target.value)} />
                <br />
            </form>

        </>
    )

}

export default Car;