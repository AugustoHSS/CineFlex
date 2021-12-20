import { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from "./Loading"

import Poster from './Poster.js'

export default function MainPage() {
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        const promisse = axios.get("https://mock-api.driven.com.br/api/v4/cineflex/movies");
        promisse.then(answer => {
            setMovies(answer.data);
        });
    }, []);

    if (!movies) {
        return <Loading></Loading>;
    }

    return (
        <>
            <h2>Selecione o filme</h2>
            <main>
                {movies.map(movie => <Poster key={movie.id} urlPoster={movie.posterURL} movieName={movie.title} idMovie={movie.id} />)}
            </main>
        </>

    )
}