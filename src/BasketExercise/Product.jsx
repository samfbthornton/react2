const AddProduct = ({ newProduct, submitHandler, productAdd }) =>
    <form onSubmit={submitHandler}>
        <input type="text"
            onChange={newProduct}
            placeholder="Enter Product:"
        />
        <button type="submit">
            Add Product
        </button>
    </form>

export default AddProduct;