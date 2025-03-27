import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav style={{ backgroundColor: "#282c34", padding: "10px" }}>
            <Link to="/" style={{ color: "white", margin: "10px" }}>Login</Link>
            <Link to="/signup" style={{ color: "white", margin: "10px" }}>Signup</Link>
            <Link to="/profile" style={{ color: "white", margin: "10px" }}>Profile</Link>
            <Link to="/chat" style={{ color: "white", margin: "10px" }}>Chat</Link>
        </nav>
    );
};

export default Navbar;
