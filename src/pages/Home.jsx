import { useEffect, useState } from 'react';
import MovieItem from '../components/MovieItem';
import MovieData from '../data/MovieData'
import './Home.css'

const Home = () => {
    const [data, setData] = useState(MovieData)
    const [ascendingDate, setAscendingDate] = useState(false)
    const [descendingDate, setDescendingDate] = useState(false)
    const [AZ, setAZ] = useState(false)
    const [ZA, setZA] = useState(false)
    const [bestRate, setBestRate] = useState(false)
    const [genre, setGenre] = useState()
    const [keyword, setKeyword] = useState()

    // Datum aufsteigend sortieren
    useEffect(() => {
        let newData = data.sort(function(a, b){return a.year - b.year})
        setData(newData)
        setAscendingDate(false)
    },[ascendingDate])

    // Datum absteigend sortieren
    useEffect(() => {
        let newData = data.sort(function(a, b){return b.year - a.year})
        setData(newData)
        setDescendingDate(false)
    },[descendingDate])

    // A-Z sortieren
    useEffect(() => {
        let newData = data.sort(function(a, b){
            let x = a.title.toLowerCase();
            let y = b.title.toLowerCase();
            if (x < y) {return -1}
            if (x > y) {return 1}
            return 0;
        })
        setData(newData)
        setAZ(false)
    },[AZ])

    // Z-A sortieren
    useEffect(() => {
        let newData = data.sort(function(a, b){
            let x = a.title.toLowerCase();
            let y = b.title.toLowerCase();
            if (y < x) {return -1}
            if (y > x) {return 1}
            return 0;
        })
        setData(newData)
        setZA(false)
    },[ZA])

    // Beste Bewertung sortieren
    useEffect(() => {
        let newData = data.sort(function(a, b){return b.rate - a.rate})
        setData(newData)
        setBestRate(false)
    },[bestRate])

    // nach Genre filtern
    let key;

    useEffect(() => {
        if(genre == "" || genre == undefined){
            return
        } else {
            let newData = data.filter(function(movie){
                for(key in movie){
                  if(movie[key].includes(genre)){
                    return movie;
                    }
                   }
                  });
            // console.log(newData);
            setData(newData)
        }
    },[genre])

    // nach Suchwort filtern
    const searchKeyword = () => {
        event.preventDefault()
        setData(MovieData);
        setKeyword(document.querySelector("#keywordInput").value)
        console.log(keyword);
    }

    useEffect(() => {
        if(keyword == "" || keyword == undefined){
            return
        } else {
        let newData = data.filter(function(movie){
            for(key in movie){
              if(movie[key].includes(keyword)){
                return movie;
                }
               }
              });
        // console.log(newData);
        setData(newData)
            }
    },[keyword])

    return ( 
        <>
        <section className='search-sec'>
            <button onClick={() => setAscendingDate(true)}>Sort by Date Ascending</button>
            <button onClick={() => setDescendingDate(true)}>Sort by Date Descending</button>
            <button onClick={() => setBestRate(true)}>Best Rate</button>
            <button onClick={() => setAZ(true)}>A-Z</button>
            <button onClick={() => setZA(true)}>Z-A</button>
            <form>
                <select onChange={(e) => {setData(MovieData);setGenre(e.target.value)}} name="" id="genre">
                    <option value="">Choose Genre</option>
                    <option value="Crime">Crime</option>
                    <option value="Drama">Drama</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Action">Action</option>
                    <option value="Biography">Biography</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Western">Western</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Romance">Romance</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Sci-Fi">Sci-Fi</option>
                    <option value="Family">Family</option>
                    <option value="War">War</option>
                    <option value="Mystery">Mystery</option>
                    <option value="Animation">Animation</option>
                    <option value="Horror">Horror</option>
                    <option value="Music">Music</option>
                    <option value="Musical">Musical</option>
                    <option value="Film-Noir">Film-Noir</option>
                    <option value="Sport">Sport</option>
                </select>
                <input type="text" placeholder='search by keyword' id='keywordInput'/>
                <input onClick={searchKeyword} type="submit" value="search" />
            </form>
        </section>

        <section className='movie-sec'>
            {data.map((movie, index) => {return <MovieItem movie={movie} key={index} />})}
        </section>

        </>
     );
}
 
export default Home;