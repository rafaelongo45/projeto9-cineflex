import img from "../../Assets/img/image3.png"
import "./style.css"

function RenderFooter() {
    return (
        <footer className="Footer">
            <div>
                <img src={img} alt = "movie-poster"/>
            </div>
            <section>
                <h1>Movie title</h1>
                <p>Quinta-feira - 15:00</p>
            </section>
        </footer>
    )
}

export default RenderFooter;