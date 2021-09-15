import { Link} from 'react-router-dom';

const Nav = () => {
    return (
    <>
    <Link to="/">
        Home
    </Link>
    <Link to="/about">
        About Us
    </Link>
    <Link to="/shop">
        Shop Now
    </Link>
    </>
    );
}
export default Nav;