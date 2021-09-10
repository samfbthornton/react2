import PropTypes from "prop-types";

const ComponentWithProps = ({ header, content, number, nonexistent }) =>
    <>
        <h1>{header}</h1>
        <p>{content}</p>
        <p>{number}</p>
        <p>{nonexistent}</p>
    </>;


ComponentWithProps.propTypes = {

    header: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    nonexistent: PropTypes.bool.isRequired

};

export default ComponentWithProps;