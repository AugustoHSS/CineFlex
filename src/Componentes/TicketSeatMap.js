import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from './Footer';
import styled from 'styled-components';
import axios from 'axios';

export default function TicketSeatMap() {
    const [movieSeats, setMovieSeats] = useState(null);
    const { sessionId } = useParams();
    const [toggle, setToggle] = useState(true);

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${sessionId}/seats`);
        promisse.then(answer => {
            setMovieSeats(answer.data);
        });
    }, []);
    if (!movieSeats) {
        return <h2>carregando</h2>;
    }
    return (
        <Container>
            <h2>Selecione o(s) assento(s)</h2>
            <Seats>
                {movieSeats.seats.map((seat) => seat.isAvailable ? <Seat key={seat.id} onClick={e => setToggle(state => !state)}>{seat.name}</Seat> :
                    <Unavailable>{seat.name}</Unavailable>)}
            </Seats>
            <DisplayButtons>
                <ExempleButtonContainer>
                    <Selected></Selected>
                    <p>Selecionado</p>
                </ExempleButtonContainer>
                <ExempleButtonContainer>
                    <Seat></Seat>
                    <p>Disponível</p>
                </ExempleButtonContainer>
                <ExempleButtonContainer>
                    <Unavailable></Unavailable>
                    <p>Indisponível</p>
                </ExempleButtonContainer>
            </DisplayButtons>

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

    background: ${props => props.toggle ? "#C3CFD9" : "#8DD7CF"};
    border: 1px solid #7B8B99; 
`
const Selected = styled(Seat)`
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
`
