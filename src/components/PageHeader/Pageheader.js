import './Pageheader.scss';
/*Llamado de componentes */
import { LogoNavbar } from '../LogoNavbar/LogoNavbar';
import { MovileBurger } from '../MovilBurger/MovileBurger';
import { NavBar } from '../Navbar/Navbar';
import { RrssTop } from '../RrssTop/RrssTop';

export const PageHeader = () => {
    return(
        <header className="pageHeader">
            <LogoNavbar />
            <MovileBurger />
            <NavBar />
            <RrssTop />
        </header>
    )
}