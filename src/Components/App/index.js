import { BrowserRouter, Routes, Route } from "react-router-dom";

import RenderHeader from "../Header";
import RenderRoot from "../Main/Root";
import RenderMovie from "../Main/Movie";
import RenderTheatherRoom from "../Main/TheaterRoom";
import RenderSuccess from "../Main/Success";

function App() {
    return (
        <BrowserRouter>
            <RenderHeader />
            <Routes>
                <Route path = "/" element = {<RenderRoot />}/>
                <Route path = "/movie-schedule" element = {<RenderMovie />}/>
                <Route path = "/select-seats" element = {<RenderTheatherRoom />}/>
                <Route path = "/success" element = {<RenderSuccess />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;