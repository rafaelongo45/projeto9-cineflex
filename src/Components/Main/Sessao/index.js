import "./style.css"

function RenderSessao() {
    return (
        <section className="Sessao">
            <header>
                <h1>Selecione o(s) assento(s)</h1>
            </header>

            <section className="assentos">
                <div className="assento">01</div>
                <div className="assento">01</div>
                <div className="assento">01</div>
                <div className="assento">01</div>
                <div className="assento">01</div>
                <div className="assento">01</div>
                <div className="assento">01</div>
                <div className="assento">01</div>
                <div className="assento">01</div>
                <div className="assento">01</div>
                <div className="assento">01</div>
                <div className="assento">01</div>
                <div className="assento">01</div>
                <div className="assento">01</div>
                <div className="assento">01</div>
                <div className="assento">01</div>
                <div className="assento">01</div>
                <div className="assento">01</div>
                <div className="assento">01</div>
                <div className="assento">01</div>

                <section className="legenda">
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

                <button>Reservar assento(s)</button>
            </article>
        </section>
    )
}

export default RenderSessao