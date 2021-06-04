import React from 'react'
import "./styles/Header.css"

export default function Header() {
    return (
        <div>
            <header >
                <nav>
                <ul className="nav-right-section">
                    <li>
                    <a href="https://mail.google.com/mail/u/0/?ogbl#inbox">Gmail</a>
                    </li>
                    <li>
                    <a href="https://www.google.com.bo/imghp?hl=es-419&tab=ri&ogbl">Imagenes</a>
                    </li>
                    <li className="menu-icon">
                    <a href="">
                    </a>
                    </li>
                    <li>
                    <a href="">
                        <img  src="https://lh3.googleusercontent.com/ogw/ADGmqu9bOanDPtMya-JZKHqum8A-shdBxF_X10G9VTGd=s32-c-mo" alt="image profile" />
                    </a>
                    </li>
                </ul>
                </nav>
            </header>
        </div>
        
    )
}
