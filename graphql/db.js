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
