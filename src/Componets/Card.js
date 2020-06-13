import React from "react";
import { Card, CardText, CardImg, CardTitle, CardSubtitle, Button, Collapse } from "reactstrap";
import { useState } from "react";

const MovieCard = props => {

    let [Open, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!Open);

    return (
        <Card className="card">
            <CardTitle>{props.title}</CardTitle>
            <Button className="collapse-button" color="primary" onClick={toggle}>Unlock</Button>
                <Collapse isOpen={Open}>
                    <CardImg>{props.photo}</CardImg>
                    <CardText>{props.desc}</CardText>
                    <CardText>Directed By : {props.director}</CardText>
                    <CardSubtitle>{props.date}</CardSubtitle>
                </Collapse>
        </Card>
    )
}

export default MovieCard;