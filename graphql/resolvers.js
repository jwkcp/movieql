import { get_movies, get_movie_details, get_movies_suggestion } from './db'

const resolvers = {
  Query: {
    movies:(_, {limit, rating}) => get_movies(limit, rating),
    movie:(_, {id}) => get_movie_details(id),
    movies_suggestion: (_, {id}) => get_movies_suggestion(id),
  }
}

export default resolvers