import React from "react";
import { Container, CardText, CardImg, CardTitle, CardSubtitle } from "reactstrap";

const Card = props => {
    return (
        <Container>
            <CardTitle>{props.title}</CardTitle>
            <CardImg>{props.photo}</CardImg>
            <CardText>{props.desc}</CardText>
            <CardText>Directed By : {props.director}</CardText>
            <CardSubtitle>{props.date}</CardSubtitle>
        </Container>
    )
}

export default Card;