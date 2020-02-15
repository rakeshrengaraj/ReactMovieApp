import React, { Component } from 'react';

import { connect } from 'react-redux';

import MovieItem from './MovieItem';

import {Link } from 'react-router-dom';


class FavoriteMovie extends Component {
    render() {
        return (
            <div className="col-12">
                <Link to="/"><p className="text-center">Home</p></Link>
                <div className="row">
                    <h5>My Favorite Movies</h5>
                    <div className="card-deck">
                        <div className="row">

                            {this.props.favorites.map((item) => {
                                return <MovieItem movie={item} key={item.id} showButton={false}></MovieItem>
                            }


                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        favorites: state.favorites
    }

}

export default connect(mapStateToProps, null)(FavoriteMovie);