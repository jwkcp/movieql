import axios from 'axios'

const BASE_URL = "https://yts.am/api/v2/"
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json'`
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`

export const get_movies = async (limit, rating) => {
  const res = await axios.get(LIST_MOVIES_URL, {
    params: {
      limit,
      minimum_rating: rating
    }
  })
  return res.data.data.movies
}

export const get_movie_details = async id => {
  const res = await axios.get(MOVIE_DETAILS_URL, {
    params: {
      movie_id: id,
    }
  })
  
  return res.data.data.movie
}

export const get_movies_suggestion = async id => {
  const res = await axios.get(MOVIE_SUGGESTIONS_URL, {
    params: {
      movie_id: id,
    }
  })

  return res.data.data.movies
} 













// let movies = [
//   {
//     id: 0,
//     name: "Star Wars - The new one",
//     score: 0.1
//   },
//   {
//     id: 1,
//     name: "Avengers - The new one",
//     score: 8
//   },
//   {
//     id: 2,
//     name: "The Godfather",
//     score: 99
//   },
//   {
//     id: 3,
//     name: "Logan",
//     score: 2
//   }
// ]

// export const getMovies = () => movies

// export const getById = id => {
//   const filteredMovies = movies.filter(movie => movie.id === id)
//   console.log(movies)
//   return filteredMovies[0]
// }

// export const add_movie = (name, score) => {
//   const newMovie = {
//     // "id": `${movies.length + 1}` ,
//     "id": movies.length + 1,
//     name,
//     score
//   }

//   movies.push(newMovie)
//   return newMovie
// }

// export const delete_movie = id => {
//   const cleanedMovies = movies.filter(movie => movie.id !== id)
  
//   if (movies.length > cleanedMovies.length) {
//     movies = cleanedMovies
//     return true
//   }
//   else {
//     return false
//   }

// }