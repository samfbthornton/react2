import Products from "./Products.json";
import Product from "./Product";
import Basket from "./Basket";
import { useState } from "react";

const ProductManager = () => {
    console.log("Products: ", Products);
    const [basket, setBasket] = useState();

    return (<>
        {
            Products.map(({ nm }) => <Product key={nm + " : "} nm={nm} />)
        }
        <Basket />
    </>);
}

export default ProductManager;