import { Link } from "react-router-dom";

const Nav = () => {
    return (
    <>
    <Link to="/">
        Home
    </Link>
    {" "}
    <Link to="/users">
        Users
    </Link>
    {" "}
    <Link to="/contact">
        Contact
    </Link>
    {" "}
    <Link to="/404">
        Not Found
    </Link>
    </>
    );
}

export default Nav;