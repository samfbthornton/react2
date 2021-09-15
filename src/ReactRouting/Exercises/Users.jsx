import { Link, useParams } from "react-router-dom";

const Users = () => {
    const {id} = useParams();
    return(
        <>
            <h1>Users</h1>
            <strong>Select a user:</strong>
                <p>
                    <Link to="/users/1">User 1</Link>
                </p>
                <p>
                    <Link to="/users/2">User 2</Link>
                </p>
                <p>
                    <Link to="/users/3">User 3</Link>
                </p>
            <p>User Selected: {id}</p>
        </>
    );
}

export default Users;