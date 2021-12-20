import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import styled from 'styled-components';
import axios from 'axios';
import Loading from "./Loading"

export default function TicketSeatMap() {
    const navigate = useNavigate();
    const [movieSeats, setMovieSeats] = useState(null);
    const { sessionId } = useParams();
    const [idsSeatsSelected, setIdsSeatsSelected] = useState([]);
    const [nameSeatsSelected, setNameSeatsSelected] = useState([]);
    const [buyerCpf, setBuyerCpf] = useState("");
    const [buyerName, setBuyerName] = useState("");


    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${sessionId}/seats`);
        promisse.then(answer => {
            setMovieSeats(answer.data);
        });
    }, []);
    if (!movieSeats) {
        return <Loading></Loading>;
    }
    function toggleSeatSelected(e, id, name) {
        if (!idsSeatsSelected.includes(id)) {
            e.target.classList.add("selected");
            setIdsSeatsSelected([...idsSeatsSelected, id])
            setNameSeatsSelected([...nameSeatsSelected, name])
        } else {
            e.target.classList.remove("selected");
            setIdsSeatsSelected(idsSeatsSelected.filter((seat) => seat !== id))
            setNameSeatsSelected(nameSeatsSelected.filter((seat) => seat !== name))
        }
    }
    function sendToServer() {
        if (idsSeatsSelected.length !== 0) {
            const promisse = axios.post("https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many", { ids: idsSeatsSelected, name: buyerName, cpf: buyerCpf });
            promisse.then(navigate("/sucesso", {
                state: {
                    title: movieSeats.movie.title,
                    weekday: movieSeats.day.weekday,
                    date: movieSeats.day.date,
                    showtime: movieSeats.name,
                    buyerName: buyerName,
                    buyerCpf: buyerCpf,
                    seats: nameSeatsSelected,
                }
            }))
            setIdsSeatsSelected([])
            setNameSeatsSelected([])
            setBuyerCpf("")
            setBuyerName("")
        } else {
            alert("Escolha um assento")
        }
    }
    return (
        <Container>
            <h2>Selecione o(s) assento(s)</h2>
            <Seats>
                {movieSeats.seats.map((seat) => seat.isAvailable ? <Seat className={"avaliable"} key={seat.id} onClick={(e) => toggleSeatSelected(e, seat.id, seat.name)}>{seat.name}</Seat> :
                    <Unavailable key={seat.id} onClick={() => alert("Esse assento não está disponível")}>{seat.name}</Unavailable>)}
            </Seats>
            <DisplayButtons>
                <ExempleButtonContainer>
                    <SeatSelected></SeatSelected>
                    <p>Selecionado</p>
                </ExempleButtonContainer>
                <ExempleButtonContainer>
                    <Seat className="avaliable"></Seat>
                    <p>Disponível</p>
                </ExempleButtonContainer>
                <ExempleButtonContainer>
                    <Unavailable></Unavailable>
                    <p>Indisponível</p>
                </ExempleButtonContainer>
            </DisplayButtons>
            <InputContainer>
                <p>Nome do comprador:</p>
                <Input value={buyerName} placeholder="Digite seu nome..." onChange={e => setBuyerName(e.target.value)}></Input>
                <p>CPF do comprador:</p>
                <Input value={buyerCpf} placeholder="Digite seu CPF..." onChange={e => setBuyerCpf(e.target.value)}></Input>
            </InputContainer>
            <Button onClick={() => sendToServer()}>Reservar assento(s)</Button>
            <Footer posterURL={movieSeats.movie.posterURL} title={movieSeats.movie.title}
                weekday={movieSeats.day.weekday} name={movieSeats.name} />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 117px;
`

const Seats = styled.div`
    width: 90vw;
    margin-left: 4px;
    display: flex;
    flex-wrap: wrap;
`
const Seat = styled.div`
    width: 26px;
    height: 26px;
    font-size: 11px;
    line-height: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 0.04em;
    border-radius: 12px;
    margin: 0 3.5px 18px 3.5px;
`


const SeatSelected = styled(Seat)`
    background: #8DD7CF;
    border: 1px solid #1AAE9E;
`
const Unavailable = styled(Seat)`
    background: #FBE192;
    border: 1px solid #F7C52B;
`
const DisplayButtons = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 90vw;
`
const ExempleButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 13px;
    line-height: 15px;
    color: #4E5A65;
    p{
        margin-top:-10px;
    }
`
const InputContainer = styled.div`
    margin-top:40px;
    width : 90vw;
    p{
        color: #293845;
        font-size: 18px;
        line-height: 21px;
    }
`

const Input = styled.input`
    border: 1px solid #D5D5D5;
    border-radius: 3px;
    width: 327px;
    height: 51px;
    padding-left: 18px;
    margin-bottom: 7px;
`

const Button = styled.div`
    margin:50px 0 20px;
    background: #E8833A;
    width: 225px;
    height: 42px;
    border-radius: 3px;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
`
