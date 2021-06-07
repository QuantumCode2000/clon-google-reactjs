import React from 'react';
import './styles/Footer.css'
const Footer = () => {
    return (
        <React.Fragment>
            <footer>
                <ul className="footer-left" >
                    <li>
                        Publicidad
                    </li>
                    <li>
                        Negocios
                    </li>
                    <li>
                        Acerda de
                    </li>
                    <li>
                        Como funciona la busqueda
                    </li>
                </ul>
                <ul className="footer-right">
                    <li>
                        Privacidad
                    </li>
                    <li>
                        Condiciones
                    </li>
                    <li>Preferencias</li>
                </ul>
            </footer>
        </React.Fragment>
    );
};

export default Footer;