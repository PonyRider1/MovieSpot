const apiBaseUrl = "https://api.themoviedb.org/3";
const apiKey = "f05dd01c035619269493d61fc4c2f64e";
const imageBaseUrl ="https://image.tmdb.org/t/p/w300";

const moviesGrid = document.getElementById("movies-grid")

async function fetchMoviesNowPlaying() {
    const response = await fetch(`${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`);
    const jsonResponse = await response.json();
    const movies = jsonResponse.results;
    displayMovies(movies);  
}

function displayMovies(movies) {
moviesGrid.innerHTML = movies.map((movie) =>
 `<div class = "movie-card">
<img src="${imageBaseUrl}${movie.poster_path}"/>
<p> ⭐ ${movie.vote_average}</p>
<h1>${movie.title}</h1>
</div>`
).join("");
}

fetchMoviesNowPlaying();

