import "./style.css"

function RenderFilme() {
    return (
        <>
            <section className = "Filme">
                <header>
                    <h1>Selecione o horário</h1>
                </header>
                <section>
                    <p>Quinta-feira - 24/06/2021</p>
                    <div>
                        <button>15:00</button>
                        <button>15:00</button>
                    </div>

                    <p>Sexta-feira - 25/06/2021</p>
                    <div>
                        <button>15:00</button>
                        <button>15:00</button>
                    </div>
                </section>
            </section>
        </>
    )
}

export default RenderFilme;