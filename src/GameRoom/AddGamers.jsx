const AddGamers = ({ newGamer, submitHandler, handleAdd }) =>
    <form onSubmit={submitHandler}>
        <input type="text"
            onChange={newGamer}
            placeholder="Enter name:"
        />
        <button type="button"
            onClick={handleAdd}
        >
            Add Player
        </button>
    </form>

export default AddGamers;