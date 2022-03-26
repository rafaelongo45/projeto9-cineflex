import { Link } from "react-router-dom"

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

export default RenderHour