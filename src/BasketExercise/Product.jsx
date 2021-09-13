import PropTypes from "prop-types";

const Product = ({ nm }) => {

    return (
        <>
            <h4>{nm}</h4>
            <button>Add to Basket</button>
        </>
    );

}

Product.propTypes = {
    nm: PropTypes.string.isRequired,
}

export default Product;