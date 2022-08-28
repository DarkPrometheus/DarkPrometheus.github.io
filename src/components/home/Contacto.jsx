import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import GithubSVG from '../sgv/GithubSVG';
import LinkedinSVG from '../sgv/LinkedinSVG';
import MailSVG from '../sgv/MailSVG';

export const Contacto = () => {
    function EnviarCorreo(e) {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_el2pig3',
                'template_r02znbb',
                e.target,
                'user_RCMYO9tr6e8RPfhPb2bAT'
            )
            .then(
                () => {
                    Swal.fire({
                        icon: 'success',
                        title: '¡Correo enviado!',
                        text: 'Respondere tu correo lo antes posible',
                    });
                },
                () => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Hubo un error :(',
                        text: 'Algo salio mal al enviar tu correo',
                    });
                }
            );
        e.target.reset();
    }

    return (
        <>
            <div className="Contacto__container">
                <h1>Contacto</h1>
                <div className="Contacto__content">
                    <h2>Sigamos en contacto</h2>
                    <div className="Redes__container">
                        <form onSubmit={EnviarCorreo}>
                            <div>
                                <input
                                    type="text"
                                    required
                                    placeholder="Tu nombre"
                                    name="nombre"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    required
                                    placeholder="Tu correo"
                                    name="correo"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    required
                                    placeholder="¿Como te puedo ayudar?"
                                    name="subject"
                                />
                            </div>
                            <div>
                                <textarea
                                    required
                                    id=""
                                    cols={30}
                                    rows={10}
                                    placeholder="Tu mensaje"
                                    name="mensaje"
                                ></textarea>
                            </div>
                            <div>
                                <input
                                    type="submit"
                                    value="Enviar mensaje"
                                    className="btn"
                                />
                            </div>
                        </form>
                        <div className="redes">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.linkedin.com/in/emmanuel-frias-aviña-741184196/"
                            >
                                <LinkedinSVG className="Linkedin" />
                                <p>Linkedin</p>
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://github.com/DarkPrometheus"
                            >
                                <GithubSVG className="Github" />
                                <p>Github</p>
                            </a>

                            <div
                                onClick={() => {
                                    navigator.clipboard.writeText(
                                        'emmanuelfriasdev@gmail.com'
                                    );
                                }}
                            >
                                <MailSVG className="Mail" />
                                <p>emmanuelfriasdev@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
