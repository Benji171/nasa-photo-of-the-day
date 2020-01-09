import React from "react";
import { Card, CardText, CardImg, CardTitle, CardSubtitle } from "reactstrap";

const MovieCard = props => {
    return (
        <Card className="card">
            <CardTitle>{props.title}</CardTitle>
            <CardImg>{props.photo}</CardImg>
            <CardText>{props.desc}</CardText>
            <CardText>Directed By : {props.director}</CardText>
            <CardSubtitle>{props.date}</CardSubtitle>
        </Card>
    )
}

export default MovieCard;