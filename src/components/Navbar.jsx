import "./Navbar.css"
import { useNavigate, NavLink, Link, useLocation } from "react-router-dom";
// import logo from './h_logo.png'

function ActivePage() {

    // try using navlink
}

function Navbar() {

    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <>
            <div className="navbar-cont">
                <div className="navbar-item-cont">
                    {/* <img src={logo} alt="Logo" className="navbar-logo" /> */}
                    <button onClick={() => navigate("/")} className={(isActive("/")) ? "active" : "inactive"}>Work</button>
                    <button onClick={() => navigate("/page1")} className={(isActive("/page1")) ? "active" : "inactive"}>Play</button >
                    <button onClick={() => navigate("/page2")} className={(isActive("/page2")) ? "active" : "inactive"}>About</button >
                </div>
            </div>
        </>

    )

} export default Navbar;