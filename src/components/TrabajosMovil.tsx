import { useParams } from 'react-router';
import { TrabajosMovilData } from '../data/TrabajosMovilData';
import { NavBar } from './NavBar';
import { Link } from 'react-router-dom';

interface RouteParams {
    trabajo: string;
}

export const TrabajosMovil = () => {
    const { trabajo } = useParams<RouteParams>();
    console.log(trabajo);

    let trabajos = TrabajosMovilData;

    return (
        <div className="Trabajo__container">
            <NavBar />
            <div className="Trabajo__main">
                {
                    trabajos.map(item => {
                        if (item.id === trabajo) {
                            return <>
                                <h3>{item.name}</h3>
                                <div className="Trabajo__top">
                                    <div className="Trabajo__imagenes Trabajo__pcEscritorio">
                                        <div className="Trabajo__mobile">
                                            <img className="Trabajo__monitor" src={item.img} alt="" />
                                        </div>
                                    </div>
                                    <div className="Trabajo__tecnologias">
                                        <h4>Tecnologias usadas:</h4>
                                        <ul>
                                            {
                                                item.tecnologias.map(item2 => {
                                                    return <>
                                                        <li>{item2}</li>
                                                    </>
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                                <p>{item.des}</p>
                                <div className="Trabajo__botones">
                                    <Link to="/Portafolio/Movil">Volver</Link>
                                    <Link to={item.github} target="_blank">Proyecto en github</Link>
                                </div>
                            </>
                        }
                    })
                }
            </div>
        </div>
    )
}