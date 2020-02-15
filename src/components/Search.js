import React, { Component } from 'react';

import { API_KEY } from '../secrets';

import { connect } from 'react-redux';
import { movies } from '../actions';


class Search extends Component {

    constructor(props){
        super(props);
        this.state = {
            query: '',
        }

    }


    search(e) {
        e.preventDefault();
       let url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${this.state.query}`

       fetch(url).then((response) => response.json()).then((resultjson) => this.props.movies(resultjson.results))
    }

    getQuery(value){
        this.setState({query: value})
    }

    render() {
        return (
            <form class="form-inline  col-12" onSubmit={(e) =>this.search(e)}>
                <label class="sr-only" for="search">Search</label>
                <input type="text" class="form-control mb-2 mr-sm-2 col-lg" id="search" placeholder="Please enter the movie name" onChange={(event) => this.getQuery(event.target.value)} />

                <button type="submit" class="btn btn-primary mb-2">Submit</button>
            </form>

        )
    }
}



export default connect(null, {movies})(Search);