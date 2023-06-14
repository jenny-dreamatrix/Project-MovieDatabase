import { useParams, Link } from "react-router-dom";
import MovieData from '../data/MovieData'
import './DetailMovie.css'

const DetailMovie = () => {
    const params = useParams()

    const detailData = MovieData.filter((movie) => {
        return movie.title === params.title
    })

    return ( 
        <section className="detail-sec">
            <h1>{detailData[0].title}</h1>
            <h2>{detailData[0].director}</h2>
            <p>{detailData[0].year}</p>
            <p>Duration: {detailData[0].duration}</p>
            <p>Rate: {detailData[0].rate}</p>
            <Link to='/' ><button>Go back</button></Link>
        </section>
     );
}
 
export default DetailMovie;