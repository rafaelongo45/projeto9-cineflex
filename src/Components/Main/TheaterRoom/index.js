import { Link } from "react-router-dom"

import "./style.css"

function RenderTheatherRoom() {
    return (
        <section className="Theater-room">
            <header>
                <h1>Selecione o(s) assento(s)</h1>
            </header>

            <section className="seats">
                <div className="seat">01</div>
                <div className="seat">01</div>
                <div className="seat">01</div>
                <div className="seat">01</div>
                <div className="seat">01</div>
                <div className="seat">01</div>
                <div className="seat">01</div>
                <div className="seat">01</div>
                <div className="seat">01</div>
                <div className="seat">01</div>
                <div className="seat">01</div>
                <div className="seat">01</div>
                <div className="seat">01</div>
                <div className="seat">01</div>
                <div className="seat">01</div>
                <div className="seat">01</div>
                <div className="seat">01</div>
                <div className="seat">01</div>
                <div className="seat">01</div>
                <div className="seat">01</div>

                <section className="captions">
                    <section>
                        <div className="selected"></div>
                        <p>Selecionado</p>
                    </section>

                    <section>
                        <div className="available"></div>
                        <p>Disponível</p>
                    </section>

                    <section>
                        <div className="unavailable"></div>
                        <p>Indisponível</p></section>
                </section>

            </section>

            <article>
                <section>
                    <p>Nome do comprador:</p>
                    <input placeholder="Digite seu nome..."></input>
                </section>

                <section>
                    <p>CPF do comprador:</p>
                    <input placeholder="Digite seu CPF..."></input>
                </section>

                <Link to ="/success">
                    <button>Reservar assento(s)</button>
                </Link>
            </article>
        </section>
    )
}

export default RenderTheatherRoom