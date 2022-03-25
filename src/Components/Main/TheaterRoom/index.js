import { useState, useEffect } from "react"
import { Link, useParams, useLocation } from "react-router-dom"
import axios from "axios"

import RenderFooter from "../../Footer"
import "../../Footer/style.css"
import "./style.css"

function RenderTheatherRoom() {
    const [seats, setSeats] = useState([]);
    const [seatId, setSeatId] = useState([]);
    const [movieTitle, setMovieTitle] = useState();
    const [movieImg, setmovieImg] = useState();
    const [hour, setHour] = useState();
    const [date, setDate] = useState();
    const [day, setDay] = useState();
    const [seatsNumbers, setSeatsNumbers] = useState([]);
    const { showtimeId } = useParams();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${showtimeId}/seats`);
        promise.then((answer) => {
            setSeats(answer.data.seats);
            setMovieTitle(answer.data.movie.title);
            setmovieImg(answer.data.movie.posterURL);
            setHour(answer.data.name)
            setDay(answer.data.day.weekday)
            setDate(answer.data.day.date);
            console.log(answer.data);
        })
    }, [])



    return (
        <>
            <section className="Theater-room">
                <header>
                    <h1>Selecione o(s) assento(s)</h1>
                </header>

                <section className="seats">
                    {
                        seats.map((seat) => {
                            const { id, name, isAvailable } = seat;
                            return isAvailable === true ? (
                                <RenderSeat key={id} id={id} name={name} seatId={seatId} setSeatId={setSeatId} setSeatsNumbers={setSeatsNumbers} seatsNumbers={seatsNumbers} />
                            ) :
                                <div key={id} className="seat unavailable" onClick={() => { alert("Esse assento está indisponível!") }}>{name}</div>
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

                <RenderButton seatId={seatId} movieTitle={movieTitle} hour={hour} day={day} seatsNumbers={seatsNumbers} date = {date} />

            </section>
            <RenderFooter title={movieTitle} posterURL={movieImg} hour={hour} day={day} />
        </>
    )
}

function RenderSeat(props) {
    const [seatClick, setSeatClick] = useState(false);
    const [chosenId, setChosenId] = useState();
    const { name, id, setSeatId, seatId, seatsNumbers, setSeatsNumbers } = props;

    function checkSeatStoreId(chosen, name) {
        if (seatClick === true) {
            setSeatClick(false)

            if (seatId.length !== 0) {
                setSeatId(seatId.filter((id) => {
                    return id !== chosen;
                }))
            }

            if (setSeatsNumbers.length !== 0) {
                setSeatsNumbers(seatsNumbers.filter((number) => {
                    return number !== name;
                }))
            }

        } else {
            setSeatClick(true);
            setSeatsNumbers(seatsNumbers.concat(name))
            setSeatId(seatId.concat(id));
        }
    }

    let cssClass = seatClick === true ? "seat selected" : "seat available";
    return <div className={cssClass} onClick={() => { setChosenId(id); checkSeatStoreId(chosenId, name) }}>{name}</div>
}

function RenderButton({ seatId, movieTitle, hour, day, seatsNumbers, date }) {
    const [buyerName, setBuyerName] = useState("");
    const [buyerCPF, setBuyerCPF] = useState("");

    function sendData(ids, name, cpf) {
        const data = {
            ids: ids,
            name: name,
            cpf: cpf
        }
        axios.post('https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many', data)
    }

    function emptyInput() {
        if (buyerName === "" || buyerCPF === "") {
            alert("Insira seu nome e seu CPF");
        }
    }

    return (
        <article>
            <section>
                <p>Nome do comprador:</p>
                <input placeholder="Digite seu nome..." onChange={(event) => { setBuyerName(event.target.value) }}></input>
            </section>

            <section>
                <p>CPF do comprador:</p>
                <input placeholder="Digite seu CPF..." onChange={(event) => { setBuyerCPF(event.target.value) }}></input>
            </section>

            <Link to= {buyerName === "" || buyerCPF === "" ? "" : "/success" } state = {{buyerCPF: buyerCPF, buyerName, movieTitle:movieTitle, hour:hour, day:day, seatsNumbers:seatsNumbers, date:date }}>
                <button onClick={() => { emptyInput(); sendData(seatId, buyerName, buyerCPF) }}>Reservar assento(s)</button>
            </Link>
        </article>
    )
}
/**{buyerName === "" || buyerCPF === "" ? "" : {pathname:"/success", state: {fromDashboard: true}}} */

export default RenderTheatherRoom