import { useState } from "react";
import Basket from "./Basket";
import AddProduct from "./Product";

const ProductManager = () => {
    const [productName, setProductName] = useState("");
    const [products, setProducts] = useState([]);

    const newProduct = ({ target }) => setProductName(target.value);
    const productAdd = (e) => {
        e.preventDefault();
        setProducts([...products, productName]);
    }
    const productDelete = (i) => {
        const _products = [...products];
        _products.splice(i);
        debugger;
        setProducts(_products);
    };
    console.log(products);;

    return (
        <>
            <AddProduct newProduct={newProduct} submitHandler={productAdd} />
            <Basket products={products} productDelete={productDelete} />
        </>
    );
}
export default ProductManager;