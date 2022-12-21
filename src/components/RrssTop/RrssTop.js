import './RrssTop.scss';
/*Llamado Iconos */
import iconfacebook from '../../assets/icon/icono_facebook.svg';
import iconInstagram from '../../assets/icon/icono_instagram.svg';
import iconWhatsapp from '../../assets/icon/icono_whatsapp.svg';

export const RrssTop = () => {
    return (
        <div class="topRedes">
            <a href="https://www.facebook.com/bogota.estudios01">
                <img alt="Logo" src= {iconfacebook}/>
            </a>
            <a href="https://www.instagram.com/bogota.estudios/">
                <img alt="Logo" src= {iconInstagram}/>
            </a>
            <a href="https://api.whatsapp.com/send?phone=+573224164520&text=Hola,%20como%20estas%20estoy%20interesado%20en%20los%20servicios%20de%20estudio%20fotografico.">
                <img alt="Logo" src= {iconWhatsapp}/>
            </a>
        </div>
    );
}
