import movies from './movies_reducer';
import favorites from './fav_reducer'

import { combineReducers} from 'redux';


const rootReducer = combineReducers({
    movies: movies,
    favorites: favorites
})


export default rootReducer;