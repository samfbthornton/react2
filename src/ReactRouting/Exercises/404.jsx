import { useParams } from "react-router-dom";

const NotFound = () => {
    const {badRoute} = useParams();

    return (
        <>
        <h2>Page Not Found</h2>
        <h3>http://localhost:3000/{badRoute}</h3>
        </>
    );
}

export default NotFound;