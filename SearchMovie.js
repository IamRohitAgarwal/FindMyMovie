import React, {useState} from "react";
import MovieCard from "./MovieCard.js";
export default function SearchMovie() {

    const [query, SetQuery]=useState('');

    const [movies, SetMovies]=useState([]);

    const SearchMovie =async(e) => 
    {
        e.preventDefault();

        const url = `https://api.themoviedb.org/3/search/movie?api_key=578281572989eaf36a8fa29113feae30&language=en-US&query=${query}&page=1&include_adult=false`;
        try{
        const res=await fetch(url);
        const data=await res.json();
        //console.log(data.results);
        SetMovies(data.results);
        }
        catch(err)
        {
            console.error(err);
        }
    }

    return (
        <>
            <form className="form" onSubmit={SearchMovie}>
                <label className="label" htmlFor="query">Movie Name</label>
                <input className="input" type="text" name="query"
                    placeholder="i.e. Die Hard" value={query} onChange={(e) => SetQuery(e.target.value)
                    }/>
                <button className="button" type="submit">Search</button>
            </form>
        <div className="card-list">
            {
                movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCard movie={movie}key={movie.id}></MovieCard>
                ))}
        </div>
        </>
    )   
}