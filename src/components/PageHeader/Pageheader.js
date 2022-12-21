import './Pageheader.scss';
/*Llamado de componentes */
import { NavBar } from '../Navbar/Navbar';
import { RrssTop } from '../RrssTop/RrssTop';
/*Llamado de imagenes*/
import logoBrand from '../../assets/img/Bogota-estudios-video-y-fotografia.png';
import iconBrand from '../../assets/img/Bogota-estudios-icon.png';


export const PageHeader = () => {
    return(
        <header className="pageHeader">
            <div className="logoBrand" >
                <img className='logo' alt="Logo" src= { logoBrand }/> 
                <img className='icon' alt="Icon Logo" src= {iconBrand} />
            </div>
            <span className="material-icons hamburguesaMenu md-70">menu</span>
            <NavBar />
            <RrssTop />
        </header>
    )
}