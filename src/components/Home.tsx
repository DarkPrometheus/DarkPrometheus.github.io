import githubIcon from "./img/github.png";
import { Link } from "react-router-dom";
import { useState } from 'react';

export const Home = () => {
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
        <div className="Home">
            <div className="Home__container">
                <div className="Home__links">
                    <img onClick={HideMenu} src="https://www.jbconnect.co/assets/icons/Menu_Burger.png" alt="img" className="MenuBoton" />
                    <div className={Hide}>
                        <div className="Home__link">
                            <hr />
                            <Link to="/Portafolio">Portafolio</Link>
                        </div>
                        <div className="Home__link">
                            <hr />
                            <Link to="/Blog">Blog</Link>
                        </div>
                        <div className="Home__link">
                            <hr />
                            <Link to="/SobreMi">Sobre mi</Link>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="Home__contentMain">
                    <div className="Home__contentHeader">
                        <h4 className="Title1 Title"><img src={githubIcon} alt="" /> Dark prometheus</h4>
                        <h4 className="Title2 Title">Frias Aviña Emmanuel</h4>
                    </div>
                    <hr />
                    <div className="Home__contentContainer">
                        <div className="Home__contentAbout">
                            <h4 className="Title">Sobre mi</h4>
                            <img src="https://scontent.ftij5-1.fna.fbcdn.net/v/t31.18172-8/19944483_1390934837680437_1433172004419710248_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=nVYXjYbks_wAX-lzAzu&_nc_ht=scontent.ftij5-1.fna&oh=b3f1165bf98e2bd5418a7de19ee5ebec&oe=60C4AAA1" alt="" />
                            <p>Desde que era apenas un niño me he visto atraido por las computadoas, por las cosas que aparecian en esas enormes cajas con una pantalla. He convivido con una computadora desde que tengo memoria y siempre busque entender como es que funcionaban esas magnificas cajas.</p>
                            <h4 className="Title">Mis habilidades</h4>
                            <ul>
                                <li>Aplicaciones de escritorio con <b>C#</b></li>
                                <li><b>SQLite</b></li>
                                <li><b>React</b></li>
                                <li><b>Markdown</b></li>
                                <li><b>Git</b> y <b>github</b></li>
                            </ul>
                        </div>
                        <hr />
                        <div className="Home__content">
                            <h4 className="Title">Algunos de mis trabajos</h4>
                            <div className="Home__contentTrabajos">
                                <Link className="Home__Trabajo" to="#">
                                    <div className="Trabajo Trabajo1">
                                        <img src="https://fondosmil.com/fondo/11756.jpg" alt="" />
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatem debitis porro expedita dolore doloremque, consequatur itaque deleniti excepturi totam pariatur cum, officia esse fugiat, recusandae accusantium. Enim, veritatis id!</p>
                                    </div>
                                </Link>
                                <Link className="Home__Trabajo" to="#">
                                    <div className="Trabajo Trabajo2">
                                        <img src="https://fondosmil.com/fondo/11756.jpg" alt="" />
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatem debitis porro expedita dolore doloremque, consequatur itaque deleniti excepturi totam pariatur cum, officia esse fugiat, recusandae accusantium. Enim, veritatis id!</p>
                                    </div>
                                </Link>
                                <Link className="Home__Trabajo" to="#">
                                    <div className="Trabajo Trabajo3">
                                        <img src="https://fondosmil.com/fondo/11756.jpg" alt="" />
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatem debitis porro expedita dolore doloremque, consequatur itaque deleniti excepturi totam pariatur cum, officia esse fugiat, recusandae accusantium. Enim, veritatis id!</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
