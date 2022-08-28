import React from 'react';
import { Trabajos } from './Trabajos';
import { About } from './About';
import { Presentacion } from './Presentacion';
import { Skills } from './Skills';
import { Proyectos } from './Proyectos';
import { Contacto } from './Contacto';
import { ProfExp } from './ProfExp';

export const Home = () => {
    return (
        <div className="Home__container">
            <Presentacion />
            <About />
            <Skills />
            <ProfExp />
            <Trabajos />
            <Proyectos />
            <Contacto />
        </div>
    );
};
