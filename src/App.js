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
                    <Route path="/sessoes/:movieId" element={<Schedules />}></Route>
                    <Route path="/sessoes/:movieId/assentos/:sessionId" element={<TicketSeatMap />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
