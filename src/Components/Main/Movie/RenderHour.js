import { Link } from "react-router-dom"

function RenderHour({ showtimes, setLastPage, movieId }) {
    return (
        <div>
            {
                showtimes.map((showtime) => {
                    return (
                        <Link key={showtime.id} to={"/select-seats/" + showtime.id} onClick = {()=>setLastPage(`/movie-schedule/${movieId}`)}>
                            <button>{showtime.name}</button>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default RenderHour