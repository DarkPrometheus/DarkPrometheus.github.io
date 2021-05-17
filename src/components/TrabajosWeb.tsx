import { Link } from 'react-router-dom'
import { Header } from './Header'
import { useParams } from 'react-router';
import { TrabajosWebData } from '../data/TrabajosWebData';

interface RouteParams {
    trabajo: string;
}

export const TrabajosWeb = () => {
    const { trabajo } = useParams<RouteParams>();
    console.log(trabajo);

    let trabajos = TrabajosWebData;

    return (
        <div className="Trabajo__container">
            <Header />
            <div className="Trabajo__main">
                {
                    trabajos.map(item => {
                        if (item.id === trabajo) {
                            return <>
                                <h3>{item.name}</h3>
                                <div className="Trabajo__top">
                                    <div className="Trabajo__imagenes">
                                        <div className="Trabajo__pc">
                                            <img className="Trabajo__monitor" src={item.imgpc} alt="" />
                                            <div className="Trabajo__base"></div>
                                        </div>
                                        <div className="Trabajo__mobile">
                                            <img className="Trabajo__monitor" src={item.imgmobile} alt="" />
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
                                    <Link to="/Portafolio/Web">Volver</Link>
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