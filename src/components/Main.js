import React from 'react'
import "./styles/Main.css"

export default function Main() {
    return (
        <div>
            <main>
                <section className="main-logo">
                    <img src="" alt="" />
                </section>
                <section className="main-input" >
                    <div className="main-input-container">
                        <span className="search-icon" >
                             
                        </span>
                        <input type="text" />
                        <a className="micro-icon" href=""></a>
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
        </div>
    )
}
