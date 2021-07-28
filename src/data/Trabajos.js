import inProgress from "../img/inProgress.jpg";

export const TrabajosPortafolio = [
    {
        id: "Web",
        trabajos: [
            {
                id: "JuegoDeTrivias",
                posicion: 0,
                nombre: "Juego de trivias",
                img: inProgress,
                des: "Juego de preguntas por categorias con inicio de sesion de usuarios y tabla de las mejores puntuaciones",
                github: "https://github.com/DarkPrometheus/Trivias"
            },
            {
                id: "GifExpertApp",
                posicion: 1,
                nombre: "Gif expert app",
                img: "https://github.com/DarkPrometheus/GifExpertApp/blob/main/ejemplo-programacion.png?raw=true",
                des: "Pagina web hecha en React la cual a través de una api se conecta a los servicios de Giphy para mostrar gifs relacionados a tu búsqueda",
                github: "https://github.com/DarkPrometheus/GifExpertApp"
            }
        ]
    },
    {
        id: "Desktop",
        trabajos: [
            {
                id: "MessagesFinder",
                posicion: 0,
                nombre: "Messages Finder",
                img: "https://github.com/DarkPrometheus/MessagesFinder/raw/master/ejemplo.png",
                des: "Programa escrito en c# para analizar y ver tus mensajes de Facebook Messenger a partir de la copia de la información que te permite descargar Facebook",
                github: "https://github.com/DarkPrometheus/MessagesFinder",
            },
            {
                id: "EjerciciosEnCSharp",
                posicion: 1,
                nombre: "Ejercicios en C#",
                img: inProgress,
                des: "Ejercicios varios de programación en C#",
                github: "https://github.com/DarkPrometheus/Ejercicios",
            },
        ]
    },
    {
        id: "Mobile",
        trabajos: [
            {
                id: "Calculadora",
                posicion: 0,
                nombre: "Calculadora IOS",
                img: inProgress,
                des: "Clon de la calculadora de IOS",
                github: "https://github.com/DarkPrometheus",
            },
        ]
    },
]