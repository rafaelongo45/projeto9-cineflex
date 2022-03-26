import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

import RenderFooter from "../../Footer"
import RenderSchedule from "./RenderSchedule"
import "../../Footer/style.css"
import "./style.css"

function RenderMovie({setLastPage}) {
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
                            <RenderSchedule key={id} weekday={weekday} date={date} showtimes={showtimes} setLastPage = {setLastPage} movieId ={movieId}/>
                        )
                    })}
                </section>
            </section>
            <RenderFooter title = {movieTitle} posterURL = {movieImg}/>
        </>
    )
}
export default RenderMovie;