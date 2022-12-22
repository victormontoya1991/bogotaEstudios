import './ButtonWhatsapp.scss'
/*Llamado Icono*/
import iconWhatsapp from '../../assets/icon/icono_whatsapp_linea.svg'

export const ButtonWhatsapp = () => {
    return (
        <div className="button">
            <a href="https://api.whatsapp.com/send?phone=+573224164520&text=Hola,%20como%20estas%20estoy%20interesado%20en%20los%20servicios%20de%20estudio%20fotografico.">
            <img alt="Whatsapp" src= { iconWhatsapp }/> Cotizar</a>
        </div>
    )
}