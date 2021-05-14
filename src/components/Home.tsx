import React from 'react'

export const Home = () => {
    return (
        <div className="Home__container">
            <a className="Home__desktop Home__content" href="/Desktop">
                <h3>Desktop</h3>
            </a>
            <a className="Home__web Home__content" href="/Web">
                <h3>Web</h3>
            </a>
            <a className="Home__mobile Home__content" href="/Mobile">
                <h3>Mobile</h3>
            </a>
        </div>
    )
}
