import { Link } from "react-router-dom";
import { useState } from 'react';

export const NavBar = () => {
    const [Hide, setHide] = useState("Hide");

    const HideMenu = () => {
        if (Hide === "Hide") {
            setHide("NoHide")
        }
        else {
            setHide("Hide")
        }
    }

    return (
        <header className="NavBar">
            <img onClick={HideMenu} src="https://img.icons8.com/material-outlined/24/ffffff/menu--v1.png" alt="img" className="MenuBoton" />
            <ul className={Hide}>
                <Link to="/Home">Home</Link>
                <Link to="/Portafolio">Portafolio</Link>
                {/* <Link to="/Blog">Blog</Link> */}
                {/* <Link to="/SobreMi">Sobre mi</Link> */}
                <Link to="/Contacto">Contacto</Link>
            </ul>
        </header>
    )
}