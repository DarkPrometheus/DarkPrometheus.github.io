import githubIcon from "../img/github.png";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { TrabajosPortafolio } from "../data/Trabajos";
import Photo from "../img/photo.jpg"

interface trabajos {
    id: string;
    posicion: number;
    nombre: string;
    img: string;
    des: string;
    github: string;
}

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

    const SetMejoresTrabajos = function (): JSX.Element[] {
        let bloques: JSX.Element[] = [];

        let Generados: number[] = [];

        for (let i = 0; i < 3; i++) {
            while (bloques.length != i + 1) {
                let number: number = Math.floor(Math.random() * (3 - 0)) + 0;
                let { trabajos, id: idSeccion } = TrabajosPortafolio[number];
                let max: number = trabajos.length;
                let number2: number = Math.floor(Math.random() * (max - 0)) + 0;
                if (!Generados.includes(number * 100 + number2)) {
                    Generados.push(number * 100 + number2)
                    let { id: idTrabajo, img, des, nombre } = trabajos[number2];

                    bloques.push(
                        <>
                            <Link className="Home__Trabajo" to={
                                "Portafolio/" + idSeccion + "/" + idTrabajo
                            }>
                                <div className={"Trabajo Trabajo" + (i + 1)}>
                                    <h3>{nombre}</h3>
                                    <div>
                                        <img src={img} alt="" />
                                        <p>{des}</p>
                                    </div>
                                </div>
                            </Link>
                        </>
                    )
                }
            }
        }
        return bloques;
    }

    return (
        <div className="Home">
            <div className="Home__container">
                <div className="Home__links">
                    <img onClick={HideMenu} src="https://img.icons8.com/material-outlined/24/ffffff/menu--v1.png" alt="img" className="MenuBoton" />
                    <div className={Hide}>
                        <div className="Home__link">
                            <hr />
                            <Link to="/Portafolio">Portafolio</Link>
                        </div>
                        {/* <div className="Home__link">
                            <hr />
                            <Link to="/Blog">Blog</Link>
                        </div> */}
                        {/* <div className="Home__link">
                            <hr />
                            <Link to="/SobreMi">Sobre mi</Link>
                        </div> */}
                        <div className="Home__link">
                            <hr />
                            <Link to="/Contacto">Contacto</Link>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="Home__contentMain">
                    <div className="Home__contentHeader">
                        <a target="_blank" rel="noreferrer" href="https://github.com/DarkPrometheus" className="Title1 Title"><img src={githubIcon} alt="" /> Dark prometheus</a>
                        <h4 className="Title2 Title">Frias Aviña Emmanuel</h4>
                    </div>
                    <hr />
                    <div className="Home__contentContainer">
                        <div className="Home__contentAbout">
                            <h4 className="Title">Sobre mi</h4>
                            <img src={Photo} alt="" />
                            <p>Desde que era apenas un niño me he visto atraido por las computadoras, por las cosas que aparecian en esas enormes cajas con una pantalla. He convivido con una computadora desde que tengo memoria y siempre busque entender como es que funcionaban esas magnificas cajas.</p>
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
                                {
                                    SetMejoresTrabajos()
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
