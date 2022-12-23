import './ContainerBanner.scss';
/*Llamado de componentes*/
import { ButtonWhatsapp } from '../ButtonWhatsapp/ButtonWhatsapp';
/*Llamado de imagenes*/
import banner1 from '../../assets/img/2465-[Convertido].png';
import banner2 from '../../assets/img/sed.png'
import banner3 from '../../assets/img/DSC01818.jpg'

export const ContainerBanners = () => {
    return(
        <section className="banners" id="nosotros">
			<div className="tituloB">
				<h1>Estudios Fotográficos & Videográficos</h1>
				<h2>Bogotá </h2>
			</div>
			<div className="iconoB1">
				<div className="tist1">
					<i className="fas fa-camera fa-2x icono"></i>
					<h3>Estudio para Fotografía</h3>
				</div>
				<p className="text1">Áreas y equipos adecuados para producciones fotográficas, desarrollo de pautas dirigidas a las redes sociales, e-commerce, catálogos y páginas web.</p>
			</div>
			<div className="iconoB2">
				<div className="tist2">
					<i className="fas fa-video  fa-2x icono"></i>
					<h3>Estudios de produción de video</h3>
				</div>
				<p className="text2" >Espacios perfectos para el desarrollo de producciones videográficas en espacios cerrados o para la construcción de set grabación de acuerdo a la necesidad de cada producción.</p>
			</div>
			<div className="textBanners">
				<div className="tist3">
					<i className="fas fa-photo-video fa-2x icono"></i>
					<h3>Grabación de Reels</h3>
				</div>
				<p className="text3">Contamos con los espacios ideales para que generes contenidos en redes sociales de tu cuenta como creador o marca. Genera la variedad que necesitas para tu cuenta con diferentes ambientes en cada uno de nuestros escenarios.</p>
			</div>
			<div className="imagenBanners">
				<div className="img" >
                    <img alt="Bogota Estudios" src= { banner1 }/> 
                </div>
                <div className="img2" >
                    <img alt="Bogota Estudios" src= { banner2 }/> 
                </div>
                <div className="img3" >
                    <img alt="Bogota Estudios" src= { banner3 }/> 
                </div>
			</div> 
			<div className="tituloB1">
				<div className="titB1">
					<h2>Espacios acordes para tu producción</h2>
					<p>Comunícate con nosotros, tenemos los espacios adecuados para la construcción o uso en todas tus grabaciones o producciones. Nos adecuamos a tus necesidades y presupuestos, acompañamos con nuestro equipo de profesionales en cada uno de los pasos de tu producción.
					Escribenos & conversa con nosotros, seguro tenemos una solución adecuada para ti. </p>
				</div>
				<ButtonWhatsapp />
			</div>
		</section>
    )
}

