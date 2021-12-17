import { Link } from "react-router-dom";

export default function Poster({ urlPoster, movieName, idMovie }) {
    return (
        <Link to={"/sessoes/" + idMovie}>
            <div className="poster-container">
                <img src={urlPoster} alt={movieName} />
            </div>
        </Link>
    )
}
