const SearchProduct = ({result, setResult}) => {
    return (
        <>
            <label>
                Search:
                <input onChange={e => setResult(e.target.value)} value={result} />
            </label>
        </>
    );
}

export default SearchProduct;