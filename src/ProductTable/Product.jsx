import PropTypes from "prop-types";

const Product = ({brand, nm, colour}) => {
    return (
        <>
            <h3>{brand}</h3>
            <h4>{nm}</h4>
            <p>Colour: {colour}</p>
        </>
    );
}

Product.propTypes = {
    brand: PropTypes.string.isRequired,
    nm: PropTypes.string.isRequired,
    colour: PropTypes.string.isRequired,
}

export default Product;