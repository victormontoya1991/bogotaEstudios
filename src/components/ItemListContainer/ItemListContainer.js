import './ItemListContainer.scss';
/*Llamado de componentes */
import { ContainerBanners } from '../ContainerBanners/ContainerBanners';
import { ContainerContact } from '../ContainerContact/ContainerContact';

export const ItemListContainer = () => {
    return(
        <main className="ItemListContainer">
            <ContainerBanners />
            <ContainerContact />
        </main>
    )
}