import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Schedules() {
    const { movieId } = useParams()
    console.log(movieId)
    const promisse = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${movieId}/showtimes`);
    return <h2>teste</h2>
}