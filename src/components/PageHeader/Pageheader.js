import './Pageheader.scss';
/*Llamado de componentes */
import { NavBar } from '../Navbar/Navbar';
import { CarWidget } from '../CarWidget/CarWidget';
/*Llamado de imagenes*/
import logoBrand from '../../assets/img/Bogota-estudios-video-y-fotografia.png';

export const PageHeader = () => {
    return(
        <header className="pageHeader">
            <span className="material-icons hamburguesaMenu md-70">menu</span>
            <div className="logoBrand" >
                <img alt="Logo" src= { logoBrand }/> 
            </div>
            <NavBar />
            <CarWidget />
        </header>
    )
}