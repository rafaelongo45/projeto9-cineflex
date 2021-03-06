import { useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'


function RenderButton({ seatId, movieTitle, hour, day, seatsNumbers, date, setLastPage, showtimeId, userSeats }) {
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
        if (buyerName === "" || buyerCPF === "" || seatId.length === 0) {
            alert("Insira seu nome, seu CPF e escolha o(s) assento(s)");
        }
    }

    {
        return (
            userSeats.number.length !== 0?
                <article>
                    {
                        userSeats.number.map((str, index) => {
                            return (
                                <RenderUserInput key={str + index} setBuyerName={setBuyerName} setBuyerCPF={setBuyerCPF} />
                            )
                        })
                    }

                    <Link to={buyerName === "" || buyerCPF === "" || seatId.length === 0 ? "" : "/success"} onClick={() => setLastPage(`select-seats/${showtimeId}`)} state={{ buyerCPF: buyerCPF, buyerName: buyerName, movieTitle: movieTitle, hour: hour, day: day, seatsNumbers: seatsNumbers, date: date }}>
                        <button onClick={() => { emptyInput(); sendData(seatId, buyerName, buyerCPF); console.log(userSeats) }}>Reservar assento(s)</button>
                    </Link>
                </article>

                :

                <></>
        )
    }
}

function RenderUserInput({ setBuyerName, setBuyerCPF }) {
    return (
        <>
            <section>
                <p>Nome do comprador:</p>
                <input placeholder="Digite seu nome..." onChange={(event) => { setBuyerName(event.target.value) }}></input>
            </section>

            <section>
                <p>CPF do comprador:</p>
                <input placeholder="Digite seu CPF..." onChange={(event) => { setBuyerCPF(event.target.value) }}></input>
            </section>
        </>
    )
}

export default RenderButton