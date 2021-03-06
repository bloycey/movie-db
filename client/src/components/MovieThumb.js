import React, { Component } from "react";
import { Col } from "reactstrap";
import { format } from "date-fns";
import "../App.scss";

const MovieThumb = props => {

    const posterImg = props.posterPath === null ? "https://via.placeholder.com/342x513.png?text=No+Poster+Available" : props.baseUrl + props.smPosterSize + props.posterPath;
    const { name, date } = props;
    const formattedDate = format(date.replace("-", "/"), "MMMM YYYY");
    const ratingPercent = props.voteRating * 10;
    const RatingBadge = () => {
        if (ratingPercent > 70) {
            return <span className="rating-badge high-rating">{ratingPercent}%</span>
        } else if (ratingPercent > 30) {
            return <span className="rating-badge medium-rating">{ratingPercent}%</span>
        } else {
            return <span className="rating-badge low-rating">{ratingPercent}%</span>
        }
    }

    return (
        <Col xs={6} md={4} lg={3} className="movie-thumb-wrapper pointer" onClick={() => { props.goToPage("/movie/" + encodeURIComponent(name) + "/" + props.id) }}>
            <div className="thumb-img-wrapper">
                <img src={posterImg} alt={name + " Poster"} className="img-fluid movie-thumb-img" />
                <RatingBadge />
            </div>
            <p className="movie-name">{name}</p>
            <p className="release-date">{formattedDate}</p>
        </Col>
    )
}

export default MovieThumb;