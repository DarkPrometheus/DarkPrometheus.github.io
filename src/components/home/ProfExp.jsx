import GithubSVG from '../sgv/GithubSVG';
import WebSVG from '../sgv/WebSVG';
import pagina from '../img/PaginaPrincipal.png';

export const ProfExp = () => {
    let trabajos = [
        {
            title: 'Desarrollador web en BG Group',
            desc: 'Al terminar mi residencia fui contratado como desarrollador web, dando mantenimiento a un sistema ya creado en Web Forms y desarrollando uno nuevo en Blazor.',
            fecha: 'May. 2022 - Actualidad'
        },
        {
            title: 'Residente en BG Group',
            desc: 'Durante estos meses estuve como residente en BG Group desarrollando una SPA en Blazor a partir de un programa de escritorio ya desarrollado',
            fecha: 'Feb. 2022 - May. 2022'
        },
        {
            title: 'Desarrollador Freelance',
            desc: 'Desarrolle software para una empresa de manera independenete durante estos meses, hice programas de escritorio desarrollados en Windows Forms con C#.',
            fecha: 'Oct. 2021 - Ene. 2022'
        },
    ];
    
    return (
      <div className="Trabajos__container">
          <h3>Experiencia profecional</h3>
          <div className="Trabajos__content">   
          {trabajos.map((trabajo) => {
                    return (
                        <div className="ProfExp__container">
                            <h1>{trabajo.title}</h1>
                            <div className="descripcion">
                                <p>{trabajo.desc}</p>
                                <p>{trabajo.fecha}</p>
                            </div>
                        </div>
                    );
                })}
          </div>
      </div>
    )
}
