import { Link } from "react-router-dom";

import "./style.css"
import img from "../../../Assets/img/image3.png"

function RenderRoot() {
    return (
        <>
            <section className="Route">
                <header>
                    <h1> Selecione o filme</h1>
                </header>
                <section>
                    <Link to = "/movie-schedule">
                        <img src={img} alt = "movie-poster"/>
                    </Link>
                    <Link to = "/movie-schedule">
                        <img src={img} alt = "movie-poster"/>
                    </Link>
                    <Link to = "/movie-schedule">
                        <img src={img} alt = "movie-poster"/>
                    </Link>
                    <Link to = "/movie-schedule">
                        <img src={img} alt = "movie-poster"/>
                    </Link>
                    <Link to = "/movie-schedule">
                        <img src={img} alt = "movie-poster"/>
                    </Link>
                    <Link to = "/movie-schedule">
                        <img src={img} alt = "movie-poster"/>
                    </Link>
                    <Link to = "/movie-schedule">
                        <img src={img} alt = "movie-poster"/>
                    </Link>
                    <Link to = "/movie-schedule">
                        <img src={img} alt = "movie-poster"/>
                    </Link>
                    <Link to = "/movie-schedule">
                        <img src={img} alt = "movie-poster"/>
                    </Link>
                    <Link to = "/movie-schedule">
                        <img src={img} alt = "movie-poster"/>
                    </Link>

                    <Link to = "/movie-schedule">
                        <img src={img} alt = "movie-poster"/>
                    </Link>
                    <Link to = "/movie-schedule">
                        <img src={img} alt = "movie-poster"/>
                    </Link>
                    <Link to = "/movie-schedule">
                        <img src={img} alt = "movie-poster"/>
                    </Link>
                    <Link to = "/movie-schedule">
                        <img src={img} alt = "movie-poster"/>
                    </Link>
                    
                </section>
            </section>
        </>
    )
}

export default RenderRoot;