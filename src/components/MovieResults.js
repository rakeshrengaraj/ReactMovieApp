import React, { Component } from 'react';
import Search from './Search';

import { connect } from 'react-redux';
import MovieItem from './MovieItem';

import {Link } from 'react-router-dom';


class MovieResults extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="col-12">
                    <Link to="/fav"><p className="text-center">Your Favorite Movies</p></Link>
                    <div className="row">
                        <Search></Search>

                    </div>
                </div>
                <div className="col-12">
                    <div className="row">
                        <div className="card-deck">
                            <div className="row">

                                {this.props.movies.map((item) => {
                                    return <MovieItem movie={item} key={item.id} showButton={true}></MovieItem>
                                }


                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>

        )
    }
}


function mapStateToProps(state) {
    return {
        movies: state.movies,
    }
}


export default connect(mapStateToProps, null)(MovieResults);