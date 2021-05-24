import { useParams } from 'react-router';
import { NavBar } from './NavBar';
import { TrabajosPortafolio } from "../data/Trabajos"
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface RouteParams {
    seccion: string;
}

interface trabajos {
    id: string;
    posicion: number;
    nombre: string;
    img: string;
    des: string;
    github: string;
}

export const Trabajos = () => {
    const { seccion } = useParams<RouteParams>();
    let trabajos: trabajos[];

    switch (seccion) {
        case "Web":
            trabajos = TrabajosPortafolio[0].trabajos;
            break;
        case "Desktop":
            trabajos = TrabajosPortafolio[1].trabajos;
            break;
        case "Mobile":
            trabajos = TrabajosPortafolio[2].trabajos;
            break;
        default:
            trabajos = [];
            break;
    }
    const [Actual, setActual] = useState<trabajos>(trabajos[0])

    const CambiarTrabajo = (trabajo: number) => {
        console.log(Actual)
        setActual(trabajos[trabajo])
    }

    return (
        <div className="Trabajos__container">
            <NavBar />
            <div className="Trabajos__main">
                <div className="Trabajos__opciones">
                    {
                        trabajos.map(item => {
                            return <div key={item.id} onClick={() => CambiarTrabajo(item.posicion)} className="Trabajos__opcion">{item.nombre}</div>
                        })
                    }
                </div>
                <hr />
                <div className="Trabajos__desc">
                    <h2>{Actual.nombre}</h2>
                    <img src={Actual.img} alt="" />
                    <p>{Actual.des}</p>
                    <div>
                        <Link to={seccion + "/" + Actual.id}>Mas detalles</Link>
                        <a href={Actual.github}>Proyecto en github</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

