import RenderHour from "./RenderHour";

function RenderSchedule({ weekday, date, showtimes }) {
    return (<>
        <p>{weekday} - {date}</p>
        <RenderHour showtimes={showtimes} />
    </>
    )
}

export default RenderSchedule;