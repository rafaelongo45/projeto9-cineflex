import "./style.css"

function RenderSuccess() {
    return (
        <article className="Success">
            <header>
                <h1>Pedido feito com sucesso!</h1>
            </header>

            <section>
                <h1>Filmes e sessão</h1>
                <p>Enola Holmes</p>
                <p> 24/06/2021 15:00</p>
            </section>

            <section >
                <h1>Ingressos</h1>
                <p>Assento 15</p>
                <p>Assento 16</p>
            </section>

            <section>
                <h1>Comprador</h1>
                <p>Nome: João da Silva Sauro</p>
                <p>CPF: 123.456.789-10</p>
            </section>

            <button>Voltar pra Home</button>

        </article>
    )
}

export default RenderSuccess