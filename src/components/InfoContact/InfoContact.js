import './InfoContact.scss';

export const InfoContact = () => {
    return(
        <div className="Infocontainer">
			<div className="blurb">
				<div>
					<a target="_blank" href="mailto:elcorreoquequieres@correo.com?Subject=Hola%20para%20una%20cotizacion%20email" class="logo">
						{/* <img src="img/iconemail.png" alt=""> */}
					</a>
				</div>
					<div>
						<h3>Email</h3>
						<p>info@estudiosbogota.com</p>
					</div>
				</div>
			<div className="blurb">
				<div>
					<a className="logo">
						{/* <img src="img/iconmap.png" alt=""> */}
					</a>
				</div>
				<div>
					<h3>Localización</h3>
					<p>Bogotá-Colombia Engativá, Carrera 94 #66a-43</p>
				</div>
			</div>
			<div className="blurb">
				<div>
					<a  target="_blank" href="https://api.whatsapp.com/send?phone=+573224164520&text=Hola,%20como%20estas%20estoy%20interesado%20en%20los%20servicios%20de%20estudio%20fotografico." class="logo">
						{/* <img src="img/iconwhatsapp.png" alt=""> */}
					</a>
				</div>
				<div>
					<h3>Whatsapp</h3>
					<p>+57(322)4164520</p>
				</div>
			</div>
        </div>
    )
}