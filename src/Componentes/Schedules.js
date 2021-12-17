import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

export default function Schedules() {
    const { movieId } = useParams()
    const [sessions, setSession] = useState(null);

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${movieId}/showtimes`);
        promisse.then(answer => {
            setSession(answer.data);
        });
    }, []);

    if (!sessions) {
        return <h2>carregando</h2>;
    }


    return (
        <Container>
            <h2>Selecione o horário</h2>
            {sessions.days.map(session => <MovieSessions session={session} />)}
            <Footer />
        </Container>
    )
}

function MovieSessions({ session }) {
    return (
        <MovieSession>
            <When>{session.weekday} - {session.date}</When>
            <Schedule>
                {session.showtimes.map((showtime) => <Link to={"/assentos/" + showtime.id}><Time>{showtime.name}</Time></Link>)}
            </Schedule>
        </MovieSession>
    )
}

function Footer() {
    return ("ff")
}

const Schedule = styled.div`
    display: flex;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const MovieSession = styled.div`
    width:90vw;
    display: flex;
    flex-direction: column;
`
const Time = styled.p`
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    background: #E8833A;
    border-radius: 3px;
    width: 83px;
    height: 43px;
    margin: 0 8px 25px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`
const When = styled.p`
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.02em;
    color: #293845;
    margin-bottom: 25px;
`