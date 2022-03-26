import { useNavigate } from "react-router-dom";
import { IoIosArrowDropleftCircle } from "react-icons/io";

import "./style.css"

function RenderHeader({ lastPage, enableButton, setEnableButton }) {
    const navigate = useNavigate();
    
    function checkFirstPage(){
        if(lastPage === '/'){
            setEnableButton(false);
        }
    }

    {
        return (
            enableButton === true ? 
            <header className="Header" >
                <button onClick={() => {navigate(lastPage) ; checkFirstPage()}}>{<IoIosArrowDropleftCircle />}</button>
                <h1>CINEFLEX</h1>
            </header >
            :
            < header className="Header" >
                <h1>CINEFLEX</h1>
            </header >
        )
    }


}

export default RenderHeader;