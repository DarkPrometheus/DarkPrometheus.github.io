import githubIcon from "./img/github.png";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div className="Home">
            <div className="Home__container">
                <div className="Home__links">
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
                <hr />
                <div className="Home__contentMain">
                    <div className="Home__contentHeader">
                        <h4 className="Title1 Title TitleOver"><img src={githubIcon} alt="" /> Dark prometheus</h4>
                        <h4 className="Title2 Title TitleOver">Frias Aviña Emmanuel</h4>
                    </div>
                    <hr />
                    <div className="Home__contentTitles">
                        <h4 className="Title1 Title TitleUnder">Sobre mi</h4>
                        <h4 className="Title2 Title TitleUnder">Algunos de mis trabajos</h4>
                    </div>
                    <div className="Home__content">
                        <div className="Home__contentAbout">
                            <img src="https://scontent.ftij5-1.fna.fbcdn.net/v/t31.18172-8/19944483_1390934837680437_1433172004419710248_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=nVYXjYbks_wAX-lzAzu&_nc_ht=scontent.ftij5-1.fna&oh=b3f1165bf98e2bd5418a7de19ee5ebec&oe=60C4AAA1" alt="" />
                            <h4>Mis habilidades</h4>
                            <ul>
                                <li>Aplicaciones de escritorio con <b>C#</b></li>
                                <li><b>SQLite</b></li>
                                <li>Proyectos usando <b>React</b></li>
                                <li><b>React native</b></li>
                                <li><b>Markdown</b></li>
                                <li><b>Git</b> y <b>github</b></li>
                            </ul>
                        </div>
                        <div className="Home__contentTrabajos">
                            <a className="Home__Trabajo Trabajo1" href="#">
                                <div className="Trabajo">
                                    <img src="https://fondosmil.com/fondo/11756.jpg" alt="" />
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatem debitis porro expedita dolore doloremque, consequatur itaque deleniti excepturi totam pariatur cum, officia esse fugiat, recusandae accusantium. Enim, veritatis id!</p>
                                </div>
                            </a>
                            <a className="Home__Trabajo Trabajo2" href="#">
                                <div className="Trabajo">
                                    <img src="https://fondosmil.com/fondo/11756.jpg" alt="" />
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatem debitis porro expedita dolore doloremque, consequatur itaque deleniti excepturi totam pariatur cum, officia esse fugiat, recusandae accusantium. Enim, veritatis id!</p>
                                </div>
                            </a>
                            <a className="Home__Trabajo Trabajo3" href="#">
                                <div className="Trabajo">
                                    <img src="https://fondosmil.com/fondo/11756.jpg" alt="" />
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatem debitis porro expedita dolore doloremque, consequatur itaque deleniti excepturi totam pariatur cum, officia esse fugiat, recusandae accusantium. Enim, veritatis id!</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
