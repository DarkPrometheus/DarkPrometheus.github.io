import React from 'react';
import img1 from '../img/Screenshot Lector de facutas con datos.png';
import img2 from '../img/Cotizador.png';

export const Trabajos = () => {
    let trabajos = [
        {
            title: 'Lector de facturas',
            img: img1,
            desc: [
                'Este programa escrito en C#, .Net Framework lee de una carpeta archivos de texto con información de facturas las cuales su información esta dividida por el carácter "|". Estas facturas tienen en el nombre un número, el cual es usado para buscar la factura que se quiere leer, una vez se ingresa el número de la factura y se da a buscar, el programa lee esa factura y un archivo .xlsx para obtener los datos necesarios y desplegarlos en una tabla donde al darle clic a un campo, se copia su contenido al portapapeles.',
            ],
            tecnologias: ['.NET Framework', 'C#'],
            video: 'https://www.youtube.com/embed/ELg77rSwE1E',
        },
        {
            title: 'Generador de cotizaciones',
            img: img2,
            desc: [
                'Este programa escrito en C#, .Net Framework tiene el objetivo de generar cotizaciones con los datos de productos de bases de datos .dbf que contiene la información de los productos, clientes, etc.',
                /* 'Para entrar al programa se debe iniciar sesion, una vez dentro, en el campo de "No. de cliente" se ingresa el numero de cliente a quien se le va a cotizar y se da enter, lo cual carga los datos de ese cliente si existe, posteriormente en la tabla del medio en el campo de "Codigo de producto", se ingresa el codigo del producto que se va a cotizar, al dar enter se cargan los datos del producto y se calculan las celdas de "Subtotal", "Profit" y "Margin", al cambiar la cantidad, el precio de costo o precio de venta se vuelven a calcular los campos. El programa tambien puede guardar la cotizacion actual dando en el boton "Guardar" de la parte inferior, asi cuando se vuelva a abrir el programa, se cargara la ultima cotizacion gurdada. Se puede elegir entre las cotizaciones guardadas en la parte superior de la seccion "Ordenes". Ademas en la parte inferior hay un boton para convertir los precios a dolares y se muestra el total de la cotizacion.',
                'Los usuarios tambien pueden generar un reporte de la base de datos el cual es generado en un pdf. Tambien, si el usuario es un usuario administrador, se le mostrara en la barra de herramientas superior una seccion para administrar los usuarios.' */
            ],
            tecnologias: ['.NET Framework', 'C#', ' LINQ', '.dfb'],
            video: '',
        },
    ];

    return (
        <div className="Trabajos__container">
            <h3>Mis trabajos Freelance</h3>
            <div className="Trabajos__content">
                {trabajos.map((trabajo) => {
                    return (
                        <div className="Trabajo__container">
                            <h1>{trabajo.title}</h1>
                            <div>
                                <img src={trabajo.img} alt="imagen" />
                            </div>
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
                            {trabajo.video !== '' ? (
                                <iframe
                                    title="video"
                                    src={trabajo.video}
                                ></iframe>
                            ) : (
                                <></>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
