import React from 'react'
import { About } from './About'
import { Presentacion } from './Presentacion'
import { Skills } from './Skills'

export const Home = () => {
    return (
        <div className="Home__container">
            <Presentacion/>
            <About/>
            <Skills/>
        </div>
    )
}
