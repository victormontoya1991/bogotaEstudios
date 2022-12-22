import './LogoNavbar.scss';
/*Llamado de imagenes*/
import logoBrand from '../../assets/img/Bogota-estudios-video-y-fotografia.png';
import iconBrand from '../../assets/img/Bogota-estudios-icon.png';

export const LogoNavbar = () => {
    return(
        <div className="logoBrand" >
                <img className='logo' alt="Logo" src= { logoBrand }/> 
                <img className='icon' alt="Icon Logo" src= {iconBrand} />
        </div>
    )
}