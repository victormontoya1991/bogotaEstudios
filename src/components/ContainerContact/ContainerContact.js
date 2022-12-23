import './ContainerContact.scss'
/*Import de componentes*/
import { FormContact } from '../FormContact/FormContact';
import { InfoContact } from '../InfoContact/InfoContact';

export const ContainerContact = () => {
    return (
        <section className="ContainerContact">
            <InfoContact />
            <FormContact />
        </section>
    )
}