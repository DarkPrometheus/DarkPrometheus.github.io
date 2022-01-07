import React from 'react';

export const Skills = () => {
    var skillsDatos = [
        {
            title: 'Lenguajes de programacion',
            datos: ['JavaScript', 'C#', 'Python', 'LINQ'],
            url:[
                'https://img.icons8.com/color/48/000000/javascript--v1.png',
            ]
        },
        {
            title: 'Frontend',
            datos: ['ReactJS', 'HTML 5', 'CSS 3', 'SASS'],
        },
        {
            title: 'Bases de datos',
            datos: ['SQL', 'SQLite'],
        },
        {
            title: 'Tecnologias',
            datos: ['.NET Framework', 'Redux'],
        },
        {
            title: 'Mis herramientas',
            datos: ['Visual Studio Code', 'Visual Studio'],
        },
        {
            title: 'Otras herramientas',
            datos: ['Git', 'GitHub', 'Firebase', 'Markdown', 'Notion'],
        },
    ];

    return (
        <div className="Skills__container">
            <h3>Skills</h3>
            <div className="Container__content">
                {skillsDatos.map((a) => {
                    return (
                        <div className="content__seccion">
                            <h1>{a.title}</h1>
                            <div className="seccion__tecnologiasContainer">
                                {a.datos.map((b) => {
                                    return (
                                        <div className="tecnologia">
                                            <img src="" alt="" />
                                            <p>{b}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
