function RenderSeats({seats, key}) {
    return (
        <>
            {seats.map((seat) => {
                return (
                    <p key = {key + seat}> Assento {seat}</p>
                )
            })}
        </>
    )
}

export default RenderSeats