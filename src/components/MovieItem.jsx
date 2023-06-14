import './MovieItem.css'
import { Link } from 'react-router-dom';

const MovieItem = (props) => {
    return ( 
        <article>
            <h2>{props.movie.title}</h2>
            <p>{props.movie.year}</p>
            <p>{props.movie.director}</p>
            <p>{props.movie.duration}</p>
            <p>{props.movie.rate}</p>
            {props.movie.genre.map((genre, index) => <h5 key={index}>{genre}</h5>)}
            <Link to={`/movies/${props.movie.title}`} ><button>Read more</button></Link>
        </article>
     );
}

export default MovieItem;