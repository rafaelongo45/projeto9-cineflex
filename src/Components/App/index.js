import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react"

import RenderHeader from "../Header";
import RenderRoot from "../Main/Root";
import RenderMovie from "../Main/Movie";
import RenderTheatherRoom from "../Main/TheaterRoom";
import RenderSuccess from "../Main/Success";

function App() {
    const [lastPage, setLastPage] = useState();
    const [enableButton, setEnableButton] = useState(false);

    return (
        <BrowserRouter>
            <RenderHeader lastPage = {lastPage} enableButton ={enableButton} setEnableButton = {setEnableButton}  />
            <Routes>
                <Route path = "/" element = {<RenderRoot setLastPage = {setLastPage} setEnableButton = {setEnableButton}/>}/>
                <Route path = "/movie-schedule/:movieId" element = {<RenderMovie setLastPage = {setLastPage}/>}/>
                <Route path = "/select-seats/:showtimeId" element = {<RenderTheatherRoom setLastPage = {setLastPage}/>}/>
                <Route path = "/success" element = {<RenderSuccess />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;