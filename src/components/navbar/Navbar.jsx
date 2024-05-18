import './navbar.scss'
import {useState} from "react";

function Navbar() {

    const [open, setOpen] = useState(false);

    return (
        <nav>
            <div className="left">
                <a className="logo">
                    <img src="logo.png" alt="Logo"/>
                    <span>LamaEstate</span>
                </a>
                <a>Home</a>
                <a>About</a>
                <a>Contact</a>
                <a>Agents</a>
            </div>
            <div className="right">
                <a>Sign In</a>
                <a className="register">Sign Up</a>

                <div className="menuIcon">
                    <img src="menu.png" alt="Menu Icon" onClick={() => setOpen(!open)}/>
                </div>
                <div className={open ? "menu active" : "menu"}>
                    <a>Home</a>
                    <a>About</a>
                    <a>Contact</a>
                    <a>Agents</a>
                    <a>Sigh In</a>
                    <a>Sigh Up</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar