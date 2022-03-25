import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import axios from "axios";

import "./style.css"

function RenderRoot() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const promise = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies/');

        promise.then((answer) => {
            setMovies(answer.data);
        })
    }, [])
    return (
        <>
            <section className="Route">
                <header>
                    <h1> Selecione o filme</h1>
                </header>
                <section>
                    {movies.map((movie) => {
                        const { id, title, posterURL } = movie;
                        return (
                            <Link key={id} to={`/movie-schedule/` + id}>
                                <img src={posterURL} alt={title} />
                            </Link>
                        )
                    })}
                </section>
            </section>
        </>
    )
}

export default RenderRoot;