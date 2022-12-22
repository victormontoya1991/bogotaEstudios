import './ItemListContainer.scss';
/*Llamado de componentes */
import { ContainerBanners } from '../ContainerBanners/ContainerBanners';

export const ItemListContainer = () => {
    return(
        <main className="ItemListContainer">
            <ContainerBanners />
        </main>
    )
}