import emailjs from "emailjs-com"
import { NavBar } from "./NavBar";
import Swal from 'sweetalert2';

export const Contacto = () => {

    function EnviarCorreo(e: any) {
        e.preventDefault();

        emailjs.sendForm('service_el2pig3', 'template_r02znbb', e.target, 'user_RCMYO9tr6e8RPfhPb2bAT')
            .then((result) => {
                Swal.fire({
                    icon: 'success',
                    title: '¡Correo enviado!',
                    text: 'Respondere tu correo lo antes posible'
                })
            }, (error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Hubo un error :(',
                    text: 'Algo salio mal al enviar tu correo'
                })
            });
        e.target.reset();
    }

    return (
        <>
            <NavBar />
            <div className="Contacto__container" >
                <h1>Contacto</h1>
                <form onSubmit={EnviarCorreo}>
                    <div>
                        <p>Tu nombre:</p>
                        <input type="text" required placeholder="Nombre" name="nombre" />
                    </div>
                    <div>
                        <p>Tu correo:</p>
                        <input type="email" required placeholder="Correo" name="correo" />
                    </div>
                    <div>
                        <p>¿Para que me necesitas?</p>
                        <input type="text" required placeholder="Asunto" name="subject" />
                    </div>
                    <div>
                        <p>Tu mensaje:</p>
                        <textarea required id="" cols={30} rows={10} placeholder="Tu mensaje" name="mensaje" ></textarea>
                    </div>
                    <div>
                        <input type="submit" value="Enviar mensaje" className="btn" />
                    </div>
                </form>
            </div>
        </>
    )
}
