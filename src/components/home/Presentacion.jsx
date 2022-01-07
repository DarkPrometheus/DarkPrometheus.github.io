import React from 'react';
import GithubSVG from '../sgv/GithubSVG';

export const Presentacion = () => {
    return (
        <div className="Presentacion__container">
            <h1 className="animate__animated animate__fadeInUp">
                Emmanuel Frias Aviña
            </h1>
            <h2 className="animate__animated animate__rotateInDownLeft animate__delay-1s">
                Desarrollador web - Desarrollador .Net
            </h2>
            <div className="redes">
                <div className="animate__animated animate__zoomIn animate__delay-2s">
                    <GithubSVG />
                    <p>Github</p>
                </div>
                <div className="animate__animated animate__zoomIn animate__delay-3s">
                    <GithubSVG />
                    <p>Github</p>
                </div>
                <div className="animate__animated animate__zoomIn animate__delay-4s">
                    <GithubSVG />
                    <p>Github</p>
                </div>
            </div>
            <ul class="menu" data-animation="diagonal">
                <li className="animate__animated animate__fadeInUp animate__delay-5s">
                    <a href="#about">
                        Sobre mi
                        <span class="border border-top"></span>
                        <span class="border border-right"></span>
                        <span class="border border-bottom"></span>
                        <span class="border border-left"></span>
                    </a>
                </li>
            </ul>
        </div>
    );
};
