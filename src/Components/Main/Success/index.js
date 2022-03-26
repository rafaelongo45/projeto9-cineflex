import { Link, useLocation } from "react-router-dom"

import RenderSeats from "./RenderSeats";
import "./style.css"

function RenderSuccess() {
    const location = useLocation();
    
    let arrSeats = [...location.state.seatsNumbers]
    arrSeats = arrSeats.sort((a,b) => a-b)
    return (
        <article className="Success">
            <header>
                <h1>Pedido feito com sucesso!</h1>
            </header>

            <section>
                <h1>Filmes e sessão</h1>
                <p>{location.state.movieTitle}</p>
                <p> {location.state.date} {location.state.hour}</p>
            </section>

            <section >
                <h1>Ingressos</h1>
                <RenderSeats seats = {arrSeats}/>
            </section>

            <section>
                <h1>Comprador</h1>
                <p>Nome: {location.state.buyerName}</p>
                <p>CPF: {location.state.buyerCPF}</p>
            </section>

            <Link to="/">
                <button>Voltar pra Home</button>
            </Link>
        </article>
    )
}

export default RenderSuccess