import "./css/reset.css";
import "./css/styles.css";
import Header from "./Componentes/Header.js"
import MainPage from "./Componentes/MainPage.js"
import Schedules from "./Componentes/Schedules.js"
import TicketSeatMap from "./Componentes/TicketSeatMap.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {

    return (
        <>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />}></Route>
                    <Route path="/filme/:movieId" element={<Schedules />}></Route>
                    <Route path="/sessao/:movieId" element={<TicketSeatMap />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
