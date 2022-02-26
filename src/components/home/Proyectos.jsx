import React from 'react';
import GithubSVG from '../sgv/GithubSVG';
import WebSVG from '../sgv/WebSVG';
import pagina from '../img/PaginaPrincipal.png';

export const Proyectos = () => {
    let trabajos = [
        {
            title: 'GifExpertApp',
            img: 'https://github.com/DarkPrometheus/GifExpertApp/raw/main/img-pc.png',
            desc: [
                'Pagina web hecha en React la cual a través de una api se conecta a los servicios de Giphy para mostrar gifs relacionados a tu búsqueda',
            ],
            tecnologias: ['ReactJS', 'HTML5', 'CSS3', 'JavaScript'],
            github: 'https://github.com/DarkPrometheus/GifExpertApp',
            pagina: 'https://emmanuelfrias.com/GifExpertApp/',
        },
        {
            title: 'Proyecto JavaScript',
            img: 'https://github.com/DarkPrometheus/curso-platzi-js/raw/master/img-pc.png',
            desc: [
                'Esta pagina es parte del JS Challenge de platzi, en donde se realizo una pagina web con JavaScript de varios temas para reforzar conocimientos basicos de JavaScript',
            ],
            tecnologias: ['ReactJS', 'HTML5', 'SASS', 'JavaScript'],
            github: 'https://github.com/DarkPrometheus/curso-platzi-js',
            pagina: 'https://emmanuelfrias.com/curso-platzi-js/#/',
        },
        {
            title: 'Mi pagina web',
            img: pagina,
            desc: [
                'Esta pagina misma pagina fue creada por mi desde cero con mis conocimiento de ReactJs y SASS',
            ],
            tecnologias: ['ReactJS', 'HTML5', 'SASS', 'JavaScript'],
            github: 'https://github.com/DarkPrometheus/DarkPrometheus.github.io',
            pagina: 'https://emmanuelfrias.com',
        },
    ];

    return (
        <div className="Trabajos__container">
            <h3>Mis proyectos</h3>
            <div className="Trabajos__content">
                {trabajos.map((trabajo) => {
                    return (
                        <div className="Trabajo__container">
                            <h1>{trabajo.title}</h1>
                            <img src={trabajo.img} alt="imagen" />
                            <div className="descripcion">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    width="50"
                                    height="50"
                                    viewBox="0 0 172 172"
                                >
                                    <g
                                        fill="none"
                                        fill-rule="nonzero"
                                        stroke="none"
                                        stroke-width="1"
                                        stroke-linecap="butt"
                                        stroke-linejoin="miter"
                                        stroke-miterlimit="10"
                                        stroke-dasharray=""
                                        stroke-dashoffset="0"
                                        font-family="none"
                                        font-weight="none"
                                        font-size="none"
                                        text-anchor="none"
                                    >
                                        <path
                                            d="M0,172v-172h172v172z"
                                            fill="none"
                                        ></path>
                                        <g fill="#95a5a6">
                                            <path d="M55.04,17.2c-26.5525,0 -48.16,21.6075 -48.16,48.16v75.68h68.8v-68.8h-37.84v-6.88c0,-13.27625 7.71313,-24.08 17.2,-24.08h3.44v-24.08zM144.48,17.2c-26.5525,0 -48.16,21.6075 -48.16,48.16v75.68h68.8v-68.8h-37.84v-6.88c0,-13.27625 7.71313,-24.08 17.2,-24.08h3.44v-24.08z"></path>
                                        </g>
                                    </g>
                                </svg>

                                {trabajo.desc.map((des) => {
                                    return <p>{des}</p>;
                                })}

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    width="50"
                                    height="50"
                                    viewBox="0 0 172 172"
                                >
                                    <g
                                        fill="none"
                                        fill-rule="nonzero"
                                        stroke="none"
                                        stroke-width="1"
                                        stroke-linecap="butt"
                                        stroke-linejoin="miter"
                                        stroke-miterlimit="10"
                                        stroke-dasharray=""
                                        stroke-dashoffset="0"
                                        font-family="none"
                                        font-weight="none"
                                        font-size="none"
                                        text-anchor="none"
                                    >
                                        <path
                                            d="M0,172v-172h172v172z"
                                            fill="none"
                                        ></path>
                                        <g fill="#95a5a6">
                                            <path d="M6.88,30.96v68.8h37.84v6.88c0,13.27625 -7.71312,24.08 -17.2,24.08h-3.44v24.08h3.44c26.5525,0 48.16,-21.6075 48.16,-48.16v-75.68zM96.32,30.96v68.8h37.84v6.88c0,13.27625 -7.71312,24.08 -17.2,24.08h-3.44v24.08h3.44c26.5525,0 48.16,-21.6075 48.16,-48.16v-75.68z"></path>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <h2>Tecnologias</h2>
                            <ul>
                                {trabajo.tecnologias.map((tecnologia) => {
                                    return <li>{tecnologia}</li>;
                                })}
                            </ul>
                            <div className="links">
                                <a
                                    href={trabajo.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <GithubSVG />
                                    Github
                                </a>
                                <a
                                    href={trabajo.pagina}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <WebSVG />
                                    Demo
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
