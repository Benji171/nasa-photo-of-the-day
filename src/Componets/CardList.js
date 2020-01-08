import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import { Container, Row } from "reactstrap";

export default function CardList() {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        axios

        .get("https://ghibliapi.herokuapp.com/films")
        .then(res => {
            setInfo(res.data)
        })
        .catch(err => {
            console.log("The data was not returned", err);
          });
    }, []);
    
console.log(info)
    return (
        <Container>
            <Row>
                {info.map(data => {
                    return (
                        <Card
                            key={data.id}
                            title={data.title}
                            photo={data.photo}
                            desc={data.description}
                            director={data.director}
                            date={data.release_date}
                        />
                    )
                })}
            </Row>
        </Container>
    )
}


