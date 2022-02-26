import React from 'react';
import { Trabajos } from './Trabajos';
import { About } from './About';
import { Presentacion } from './Presentacion';
import { Skills } from './Skills';
import { Proyectos } from './Proyectos';
import { Contacto } from './Contacto';

export const Home = () => {
    return (
        <div className="Home__container">
            <Presentacion />
            <About />
            <Skills />
            <Trabajos />
            <Proyectos />
            <Contacto />
        </div>
    );
};
