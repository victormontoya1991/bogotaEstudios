import './Navbar.scss';

export const NavBar = () => {
    return(
        <nav className="callHome">
            <a href="#Home" >Home</a>
            <a href="#Services" >Servicios</a>
            <a href="#Espace" >Espacios</a>
            <a href="#Photo" >Foto Producto</a>
            <a href="#Contact" >Contacto</a>
        </nav>
    )
}