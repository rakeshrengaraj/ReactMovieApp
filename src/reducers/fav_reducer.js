import { ADD_FAV, REMOVE_FAV } from '../actions'


function addToFavorite(state=[], action){
    let favoriteMovies;
    switch(action.type){
        case ADD_FAV:
            favoriteMovies = [...state, action.movie]
            action.movie.isFavorite = true
            return favoriteMovies;
        case REMOVE_FAV:
            favoriteMovies = state.filter((item) => item.id !== action.movie.id)
            action.movie.isFavorite = false
            return favoriteMovies;
        default:
            return state;    
    }
}


export default addToFavorite;