import RenderHour from "./RenderHour";

function RenderSchedule({ weekday, date, showtimes, setLastPage, movieId }) {
    return (<>
        <p>{weekday} - {date}</p>
        <RenderHour showtimes={showtimes} setLastPage ={setLastPage} movieId = {movieId}/>
    </>
    )
}

export default RenderSchedule;