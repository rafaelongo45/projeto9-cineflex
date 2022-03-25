import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"

import RenderFooter from "../../Footer"
import "../../Footer/style.css"
import "./style.css"

function RenderMovie() {
    const [movieTitle, setMovieTitle] = useState();
    const [movieImg, setmovieImg] = useState();
    const [movieDays, setMovieDays] = useState([]);

    const { movieId } = useParams();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieId}/showtimes`);

        promise.then((answer) => {
            setMovieTitle(answer.data.title)
            setmovieImg(answer.data.posterURL)
            setMovieDays(answer.data.days)
        })
    }, []);

    return (
        <>
            <section className="Movie">
                <header>
                    <h1>Selecione o horário</h1>
                </header>
                <section>
                    {movieDays.map((movieDay) => {
                        const { id, weekday, date, showtimes } = movieDay
                        return (
                            <RenderSchedule key={id} weekday={weekday} date={date} showtimes={showtimes} />
                        )
                    })}
                </section>
            </section>
            <RenderFooter title = {movieTitle} posterURL = {movieImg}/>
        </>
    )
}

function RenderSchedule({ weekday, date, showtimes }) {
    return (<>
        <p>{weekday} - {date}</p>
        <RenderHour showtimes={showtimes} />
    </>
    )
}

function RenderHour({ showtimes }) {
    return (
        <div>
            {
                showtimes.map((showtime) => {
                    return (
                        <Link key={showtime.id} to={"/select-seats/" + showtime.id}>
                            <button>{showtime.name}</button>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default RenderMovie;