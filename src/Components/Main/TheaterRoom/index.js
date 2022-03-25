import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"

import RenderFooter from "../../Footer"
import "../../Footer/style.css"
import "./style.css"

function RenderTheatherRoom() {
    const [seats, setSeats] = useState([]);
    const [seatId, setSeatId] = useState([]);
    const { showtimeId } = useParams();

    useEffect(() => {
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
                            const { id, name, isAvailable } = seat;
                            return isAvailable === true ? (
                                <RenderSeat key={id} id = {id} name={name} seatId = {seatId} setSeatId = {setSeatId}/>
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

                <RenderButton seatId = {seatId}/>

            </section>
            <RenderFooter />
        </>
    )
}

function RenderSeat(props) {
    const [seatClick, setSeatClick] = useState(false);
    const [chosenId, setChosenId] = useState();
    const { name, id, setSeatId, seatId } = props;

    function checkSeatStoreId(chosen){
        if(seatClick === true){
            setSeatClick(false)

            if(seatId.length !== 0){
                setSeatId(seatId.filter((id)=>{
                    return id !== chosen
                }))
            }

        }else{
            setSeatClick(true)
            setSeatId(seatId.concat(id))
        }
    }

    let cssClass = seatClick === true ? "seat selected" : "seat available";
    return <div className={cssClass} onClick={()=>{ setChosenId(id); checkSeatStoreId(chosenId) } }>{name}</div>
}

function RenderButton({seatId}) {
    const [buyerName, setBuyerName] = useState("");
    const [buyerCPF, setBuyerCPF] = useState("");

    function sendData(ids, name, cpf){
        const data = {
            ids: ids,
            name: name,
            cpf: cpf
        }
        axios.post('https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many', data)
    }

    function emptyInput(){
        if(buyerName === "" || buyerCPF === ""){
            alert("Insira seu nome e seu CPF");
        }
    }


    return (
        <article>
            <section>
                <p>Nome do comprador:</p>
                <input placeholder="Digite seu nome..." onChange={(event) => {setBuyerName(event.target.value)}}></input>
            </section>

            <section>
                <p>CPF do comprador:</p>
                <input placeholder="Digite seu CPF..." onChange={(event) => {setBuyerCPF(event.target.value)}}></input>
            </section>

            <Link to={buyerName === "" || buyerCPF === "" ? "" :"/success"} >
                <button onClick={() => {emptyInput(); sendData(seatId, buyerName, buyerCPF)}}>Reservar assento(s)</button>
            </Link>
        </article>
    )
}

export default RenderTheatherRoom