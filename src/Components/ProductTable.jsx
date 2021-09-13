import { useState } from "react";
import Product from "./Product";
import Products from "./Products.json";

const ProductTable = () => {
    console.log("Products: ", Products);
    return (
        <>
            {
            // Products.map(product => <Product key={product.brand + " : " + product.colour} {...product}/>)
            Products.map(({brand, nm, colour}) => <Product key={brand + " : " + colour} brand={brand} nm={nm} colour={colour}/>)
            }
        </>
    )
}

export default ProductTable;