import './PageFooter.scss';

import { RrssTop } from '../RrssTop/RrssTop';
import { NavFooter } from '../NavFooter/NavFooter';

export const PageFooter = () => {
    return(
        <footer className= "pageFooter">
            <NavFooter />
            <RrssTop />
            <p className="copyRinght">
                Copyright Estudios Bogota, desarollado <a href=" www.algorit.co">Algorit.co</a>
            </p>
        </footer>
    )
}