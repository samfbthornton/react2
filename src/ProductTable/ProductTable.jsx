import { useState } from "react";
import Products from "./Products.json";
import SearchProduct from "./SearchProduct";

const ProductTable = () => {
    console.log("Products: ", Products);
    const [filter, setFilter] = useState("");
    return (
        <>
       <SearchProduct result={filter} setResult={setFilter}/>
            {
                Products.filter(({nm}) => nm.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase()))
                .map(({nm}) => <p key={nm}>{nm}</p>)
            }
            {/* {
            Products.map(product => <Product key={product.brand + " : " + product.colour} {...product}/>)
            Products.map(({brand, nm, colour}) => <Product key={brand + " : " + colour} brand={brand} nm={nm} colour={colour}/>)
            } */}
        </>
    )
}

export default ProductTable;