import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header className="Header">
            <ul>
                <Link to="/Home">Home</Link>
                <Link to="/Portafolio">Portafolio</Link>
                <Link to="/Blog">Blog</Link>
                <Link to="/SobreMi">Sobre mi</Link>
            </ul>
        </header>
    )
}
