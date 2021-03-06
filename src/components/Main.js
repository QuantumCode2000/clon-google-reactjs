import React from 'react'
import "./styles/Main.css"
import logo from "../images/google-logo.png"

export default function Main() {
    return (
        <React.Fragment>
            <main>
                <section className="main-logo">
                    <img src={logo} alt="google logo"/>
                </section>
                <section className="main-input" >
                    <div className="main-input-container">
                        <span className="search-icon" >
                        </span>
                        <input type="text" />
                        <a className="micro-icon" href="/">
                            <span></span>
                        </a>
                    </div>
                </section>
                <section className="main-buttons">
                    <div>
                        <button>Buscar con Google</button>
                    </div>
                    <div>
                        <button>Me siento con Suerte</button>
                    </div>
                </section>
            </main>
        </React.Fragment>
    )
}
