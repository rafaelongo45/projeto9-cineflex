import { useState, useEffect} from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"

import RenderFooter from "../../Footer"
import "../../Footer/style.css"
import "./style.css"

function RenderTheatherRoom() {
    const [seats, setSeats] = useState([]);
        const [seatClick, setSeatClick] = useState(false);

    const {showtimeId} = useParams();

    useEffect ( () => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${showtimeId}/seats`);
        promise.then((answer) => {
            setSeats(answer.data.seats)
        })
    }, [])


    console.log(seats)

    return (
        <>
            <section className="Theater-room">
                <header>
                    <h1>Selecione o(s) assento(s)</h1>
                </header>

                <section className="seats">
                    {
                        seats.map((seat) => {
                            const {id, name, isAvailable} = seat;
                            let cssClass = seatClick === true? "seat selected" : "seat available"
                            return isAvailable === true ? (
                                <div key = {id} className = {cssClass} onClick = {()=>{seatClick === true ? setSeatClick(false) : setSeatClick(true)}}>{name}</div>
                            ) :
                                <div key = {id} className = "seat unavailable" onClick = { () => {alert("Esse assento está indisponível!")}}>{name}</div>
                        })
                    }

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

                    <Link to="/success">
                        <button>Reservar assento(s)</button>
                    </Link>
                </article>
            </section>
            <RenderFooter />
        </>
    )
}

export default RenderTheatherRoom