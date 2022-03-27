import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

import RenderSeats from "./RenderSeats"
import RenderButton from "./RenderButton"
import RenderFooter from "../../Footer"
import "./style.css"

function RenderTheatherRoom({setLastPage, lastPage}) {
    const [seats, setSeats] = useState([]);
    const [seatId, setSeatId] = useState([]);
    const [movieTitle, setMovieTitle] = useState();
    const [movieImg, setmovieImg] = useState();
    const [hour, setHour] = useState();
    const [date, setDate] = useState();
    const [day, setDay] = useState();
    const [seatsNumbers, setSeatsNumbers] = useState([]);
    const [userSeats, setUserSeats] = useState({click: false, number: []});
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

                <RenderSeats setUserSeats = {setUserSeats} userSeats = {userSeats} seatId={seatId} setSeatId={setSeatId} seats={seats} seatsNumbers={seatsNumbers} setSeatsNumbers={setSeatsNumbers} />
                <RenderButton setUserSeats = {setUserSeats} userSeats = {userSeats} seatId={seatId} movieTitle={movieTitle} hour={hour} day={day} seatsNumbers={seatsNumbers} date={date} setLastPage = {setLastPage} showtimeId = {showtimeId} />

            </section>
            <RenderFooter title={movieTitle} posterURL={movieImg} hour={hour} day={day} />
        </>
    )
}

export default RenderTheatherRoom