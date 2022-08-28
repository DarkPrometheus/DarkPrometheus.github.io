import React from 'react';
import CSharpSVG from '../sgv/CSharpSVG';
import CssSVG from '../sgv/CssSVG';
import FirebaseSVG from '../sgv/FirebaseSVG';
import GithubSVG from '../sgv/GithubSVG';
import GitSVG from '../sgv/GitSVG';
import HMTLSVG from '../sgv/HTMLSVG';
import JsSVG from '../sgv/JsSVG';
import MarkdownSVG from '../sgv/MarkdownSVG';
import NotionSVG from '../sgv/NotionSVG';
import ReactSVG from '../sgv/ReactSVG';
import ReduxSVG from '../sgv/ReduxSVG';
import SassSVG from '../sgv/SassSVG';
import Blazor from '../sgv/Blazor';
import SQLiteSVG from '../sgv/SQLiteSVG';
import SqlSVG from '../sgv/SqlSVG';
import VisualCodeSVG from '../sgv/VisualCodeSVG';
import VisualStudioSVG from '../sgv/VisualStudioSVG';

export const Skills = () => {
    var skillsDatos = [
        {
            title: 'Lenguajes de programación principales',
            datos: ['JavaScript', 'C#'],
            url: ['https://img.icons8.com/color/48/000000/javascript--v1.png'],
            sgv: [<JsSVG />, <CSharpSVG />],
        },
        {
            title: 'Frontend / Web',
            datos: ['ReactJS', 'HTML 5', 'CSS 3', 'SASS', 'Blazor'],
            sgv: [<ReactSVG />, <HMTLSVG />, <CssSVG />, <SassSVG />, <Blazor />],
        },
        {
            title: 'Bases de datos',
            datos: ['SQL Server', 'SQLite'],
            sgv: [<SqlSVG />, <SQLiteSVG />],
        },
        {
            title: 'Tecnologías',
            datos: ['.NET Framework', 'Redux'],
            sgv: [<VisualStudioSVG />, <ReduxSVG />],
        },
        {
            title: 'Mis herramientas',
            datos: ['VS Code', 'Visual Studio'],
            sgv: [<VisualCodeSVG />, <VisualStudioSVG />],
        },
        {
            title: 'Otras herramientas',
            datos: ['Git', 'GitHub', 'Firebase', 'Markdown', 'Notion'],
            sgv: [
                <GitSVG />,
                <GithubSVG />,
                <FirebaseSVG />,
                <MarkdownSVG />,
                <NotionSVG />,
            ],
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
                                            {
                                                a.sgv[
                                                    a.datos.findIndex(
                                                        (element) =>
                                                            element === b
                                                    )
                                                ]
                                            }
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
