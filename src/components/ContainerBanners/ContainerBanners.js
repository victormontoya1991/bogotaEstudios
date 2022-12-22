import './ContainerBanner.scss';
/*Llamado de imagenes*/
import banner1 from '../../assets/img/2465-[Convertido].png';
import banner2 from '../../assets/img/sed.png'
import banner3 from '../../assets/img/DSC01818.jpg'

export const ContainerBanners = () => {
    return(
        <section class="banners" id="nosotros">
			<div class="tituloB">
				<h1>Estudios Fotográficos & Videográficos</h1>
				<h2>Bogotá </h2>
			</div>
			<div class="iconoB1">
				<div class="tist1">
					<i class="fas fa-camera fa-2x icono"></i>
					<h3>Estudio para Fotografía</h3>
				</div>
				<p class="text1">Áreas y equipos adecuados para producciones fotográficas, desarrollo de pautas dirigidas a las redes sociales, e-commerce, catálogos y páginas web.</p>
			</div>
			<div class="iconoB2">
				<div class="tist2">
					<i class="fas fa-video  fa-2x icono"></i>
					<h3>Estudios de produción de video</h3>
				</div>
				<p class="text2" >Espacios perfectos para el desarrollo de producciones videográficas en espacios cerrados o para la construcción de set grabación de acuerdo a la necesidad de cada producción.</p>
			</div>
			<div class="textBanners">
				<div class="tist3">
					<i class="fas fa-photo-video fa-2x icono"></i>
					<h3>Grabación de Reels</h3>
				</div>
				<p class="text3">Contamos con los espacios ideales para que generes contenidos en redes sociales de tu cuenta como creador o marca. Genera la variedad que necesitas para tu cuenta con diferentes ambientes en cada uno de nuestros escenarios.</p>
			</div>
			<div class="imagenBanners">
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
			<div class="tituloB1">
				<div class="titB1">
					<h2>Espacios acordes para tu producción</h2>
					<p>Comunícate con nosotros, tenemos los espacios adecuados para la construcción o uso en todas tus grabaciones o producciones. Nos adecuamos a tus necesidades y presupuestos, acompañamos con nuestro equipo de profesionales en cada uno de los pasos de tu producción.
					Escribenos & conversa con nosotros, seguro tenemos una solución adecuada para ti. </p>
				</div>
				<div class="button">
                    <a href="https://api.whatsapp.com/send?phone=+573224164520&text=Hola,%20como%20estas%20estoy%20interesado%20en%20los%20servicios%20de%20estudio%20fotografico."> <i class="fa fa-whatsapp"></i> Whatsapp</a>
                </div>
			</div>
		</section>
    )
}

