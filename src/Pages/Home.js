import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
export default class Home extends Component {
    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col><h1>Sportio</h1></Col>
                    
                    </Row>
                    <Row>
                        <Button variant="outline-warning">Jeden Przycisk</Button>
                        <Button variant="outline-danger">Jeden Przycisk</Button>
                        <Button  variant="outline-info"> Jeden Przycisk</Button>
                    </Row>
                </Container>
            </>
        )
    }
}
