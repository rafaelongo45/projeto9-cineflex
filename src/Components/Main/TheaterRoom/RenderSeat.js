import {useState} from "react"

function RenderSeat(props) {
    const [seatClick, setSeatClick] = useState(false);
    const [chosenId, setChosenId] = useState();
    const { name, id, setSeatId, seatId, seatsNumbers, setSeatsNumbers, setUserSeats, userSeats } = props;
    

    function checkSeatStoreId(chosen, name) {
        if (seatClick === true) {
            setSeatClick(false)

            if (seatId.length !== 0) {
                setSeatId(seatId.filter((id) => {
                    return id !== chosen;
                }))
            }

            if (setSeatsNumbers.length !== 0) {
                setSeatsNumbers(seatsNumbers.filter((number) => {
                    return number !== name;
                }))
            }

        } else {
            setSeatClick(true);
            setSeatsNumbers(seatsNumbers.concat(name))
            setSeatId(seatId.concat(id));
        }
    }

    function removeInput(){
        if(cssClass === 'seat selected'){
            array.pop();
            array.pop();

        }

        console.log(userSeats)
    }

    let array = [...userSeats.number];

    function addToArray(){
        array.push(seatId)
    }

    let cssClass = seatClick === true ? "seat selected" : "seat available";
    return <div className={cssClass} onClick={() => {addToArray(); removeInput(); setChosenId(id); checkSeatStoreId(chosenId, name); setUserSeats({click: true, number: array}) } }>{name}</div>
}

export default RenderSeat