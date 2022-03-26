import RenderSeat from "./RenderSeat";


function RenderSeats({ seatId, setSeatId, seats, seatsNumbers, setSeatsNumbers }) {
    return (
        <section className="seats">
            {
                seats.map((seat) => {
                    const { id, name, isAvailable } = seat;
                    return isAvailable === true ? (
                        <RenderSeat key={id} id={id} name={name} seatId={seatId} setSeatId={setSeatId} setSeatsNumbers={setSeatsNumbers} seatsNumbers={seatsNumbers} />
                    ) :
                        <div key={id} className="seat unavailable" onClick={() => { alert("Esse assento está indisponível!") }}>{name}</div>
                })
            }

            <section className="captions">
                <section>
                    <div className="selected"></div>
                    <p>Selecionado</p>
                </section>

                <section>
                    <div className="available"></div>
                    <p>Disponível</p>
                </section>

                <section>
                    <div className="unavailable"></div>
                    <p>Indisponível</p></section>
            </section>
        </section>

    )
}

export default RenderSeats