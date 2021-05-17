import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from './Header'

export const TrabajoDesktop = () => {
    return (
        <div className="Trabajo__container">
            <Header />
            <div className="Trabajo__main">
                <div className="Trabajo__top">
                    <div className="Trabajo__imagenes">
                        <div className="Trabajo__pc">
                            <img className="Trabajo__monitor" src="https://fondosmil.com/fondo/11756.jpg" alt="" />
                            <div className="Trabajo__base"></div>
                        </div>
                        <div className="Trabajo__mobile">
                            <img className="Trabajo__monitor" src="https://fondosmil.com/fondo/11756.jpg" alt="" />
                        </div>
                    </div>
                    <div className="Trabajo__tecnologias">
                        <h4>Tecnologias usadas:</h4>
                        <ul>
                            <li>Lista</li>
                            <li>Lista</li>
                            <li>Lista</li>
                        </ul>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos accusamus vero, illo beatae nostrum nulla minima quo officia aspernatur impedit fuga rerum commodi voluptatum, sequi fugiat, deserunt debitis odit. Tenetur.</p>
                <div className="Trabajo__botones">
                    <Link to="/">Mas detalles</Link>
                    <Link to="/">Proyecto en github</Link>
                </div>
            </div>
        </div>
    )
}
