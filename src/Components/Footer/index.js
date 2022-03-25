import "./style.css"

function RenderFooter({title, posterURL, hour, day}) {
    return (
        <footer className="Footer">
            <div className = "movie-poster">
                <img src={posterURL} alt = {title}/>
            </div>
            <section className = "movie-info">
                <h1>{title}</h1>
                {day === undefined ? <p></p> :<p> {day} - {hour}</p>}
            </section>
        </footer>
    )
}

export default RenderFooter;