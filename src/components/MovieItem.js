import React, { Component } from 'react';
import { faStar, faHeart, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { connect } from 'react-redux'
import { addToFavorite, removeFromFavorite } from '../actions';


const url_component = 'https://image.tmdb.org/t/p/w342';
const movieUrl = "https://www.themoviedb.org/movie/";

class MovieItem extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            favorited: false
        }
    }

    addToFavorite() {
        this.setState({
            favorited: !this.state.favorited
        })
        this.props.addToFavorite(this.props.movie)
    }

    removeFromFavorite() {
        this.setState({
            favorited: !this.state.favorited
        })
        this.props.removeFromFavorite(this.props.movie)
    }


    displayFavoriteIcon() {
        if (this.props.movie.isFavorite) {
            return <span onClick={() => this.removeFromFavorite()} className="badge badge-success"><FontAwesomeIcon icon={faHeart} /> Added to favorites</span>
        } else {
            return <span onClick={() => this.addToFavorite()} className="badge badge-primary"><FontAwesomeIcon icon={faThumbsUp} /> Add to favorites</span>
        }
    }


    render() {
        return (
            <div className="col-md-3">
                <div className="card">
                    <a href={movieUrl + this.props.movie.id} target="_blank" rel="noopener noreferrer">
                        <img className="card-img-top" src={url_component + this.props.movie.poster_path} alt="poster" />
                    </a>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.movie.title}</h5>
                        <p className="card-text">{this.props.movie.overview}</p>
                    </div>
                    <div class="card-footer">
                        <p className="card-text">Release Date - {this.props.movie.release_date}</p>
                        <p className="card-text">Rating - &nbsp;
                            <span className="badge badge-info">
                                <FontAwesomeIcon icon={faStar} /> &nbsp;&nbsp; {this.props.movie.vote_average}
                            </span>
                        </p>
                        <p className="card-text">
                            {this.props.showButton ? this.displayFavoriteIcon() : null}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}




export default connect(null, { addToFavorite, removeFromFavorite })(MovieItem);