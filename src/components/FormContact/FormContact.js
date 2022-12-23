import './FormContact.scss';

export const FormContact = () => {
    return (
        <form className="FormContact">
            <div className="input-group">
                <input type="text" id="nombre" name="Nombre"></input>
                <label className="label" for=" nombre ">Nombre</label>
            </div>
            <div className="input-group">
                <input type="email" id="email" name="Email"></input>
                <label className="label" for="email">Correo Electronico</label>
            </div>
            <div className="input-group">
                <input type="tel" id="phone" name="Teléfono" minlength="7" maxlength="10"></input>
                <label className="label" for="phone">Teléfono Movil</label>
            </div>
            <div className="input-group">
				<textarea name="Mensaje" id="mensaje"></textarea>
				<label className="label" for="mensaje">Mensaje</label>
			</div>
			<button type="submit" value="Contactar">Contactar</button>
        </form>
    )
}