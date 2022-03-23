import { Link } from "react-router-dom"

import RenderFooter from "../../Footer"
import "../../Footer/style.css"
import "./style.css"
function RenderMovie() {
    return (
        <>
            <section className="Movie">
                <header>
                    <h1>Selecione o horário</h1>
                </header>
                <section>
                    <p>Quinta-feira - 24/06/2021</p>
                    <div>
                        <Link to="/select-seats">
                            <button>15:00</button>
                        </Link>
                        <Link to="/select-seats">
                            <button>15:00</button>
                        </Link>
                    </div>

                    <p>Sexta-feira - 25/06/2021</p>
                    <div>
                        <Link to="/select-seats">
                            <button>15:00</button>
                        </Link>
                        <Link to="/select-seats">
                            <button>15:00</button>
                        </Link>
                    </div>

                    <RenderFooter />
                </section>
            </section>
        </>
    )
}

export default RenderMovie;