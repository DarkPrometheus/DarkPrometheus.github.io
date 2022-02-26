import React from 'react';
import GithubSVG from '../sgv/GithubSVG';
import LinkedinSVG from '../sgv/LinkedinSVG';

export const Presentacion = () => {
    return (
        <div className="Presentacion__container">
            <h1 className="animate__animated animate__fadeInUp">
                Emmanuel Frias Aviña
            </h1>
            <h2 className="animate__animated animate__fadeInUp animate__delay-1s">
                Desarrollador web - Desarrollador .Net
            </h2>
            <div className="redes">
                <a
                    href="https://github.com/DarkPrometheus"
                    className="animate__animated animate__zoomIn animate__delay-2s"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <GithubSVG />
                    <p>Github</p>
                </a>
                <a
                    href="https://www.linkedin.com/in/emmanuel-frias-aviña-741184196/"
                    className="animate__animated animate__zoomIn animate__delay-3s linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <LinkedinSVG />
                    <p>Linkedin</p>
                </a>
            </div>
            {/*             <ul class="menu" data-animation="diagonal">
                <li className="animate__animated animate__fadeInUp animate__delay-4s">
                    <a href="#about">Sobre mi</a>
                </li>
            </ul> */}
        </div>
    );
};
