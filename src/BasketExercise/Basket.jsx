const Basket = ({ products, productDelete }) => {
    const ShowBasket = ({ productName, index}) =>
        <li> {productName}
            <button onClick ={ () => productDelete(index)}>
                Delete
            </button>
        </li>

    return (
        <>
            {products.map((productName, i) => (
                <ShowBasket
                    productName={productName}
                    key={i}
                    index={i}
                />
            ))}
        </>
    );
}
export default Basket;