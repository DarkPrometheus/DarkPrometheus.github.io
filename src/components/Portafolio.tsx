import { Link } from "react-router-dom";

export const Portafolio = () => {
    return (
        <div className="Portafolio__container">
            <Link className="Portafolio__desktop Portafolio__content" to="/Portafolio/Desktop">
                <h3>Desktop</h3>
            </Link>
            <Link className="Portafolio__web Portafolio__content" to="/Portafolio/Web">
                <h3>Web</h3>
            </Link>
            <Link className="Portafolio__mobile Portafolio__content" to="/Portafolio/Mobile">
                <h3>Mobile</h3>
            </Link>
        </div>
    )
}
