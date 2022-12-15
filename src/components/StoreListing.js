import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Image } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

export default function StoreListing() {
    <h2>Browse stores in Los Angeles</h2>

    return (
        <Container style={{ marginTop: "40px", textAlign: "center" }}>
            <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}} >
                <Row>
                    <Col xs=".5" >
                        <Image src="[IMG SRC]" roundedCircle />
                    </Col>
                    <Col>
                        <h5 style={{ fontWeight: "bold" }}>Ralphs</h5>
                        <p>Delivery * Pickup</p>
                    </Col>
                </Row>
                <Col sm="1"></Col>
                <Row >
                    <Col xs=".5">
                        <Image src="[IMG SRC]" roundedCircle />
                    </Col>
                    <Col>
                        <h5 style={{ fontWeight: "bold" }}>Vons</h5>
                        <p>Delivery * Pickup</p>
                    </Col>
                </Row>
                <Col sm="1"></Col>
                <Row >
                    <Col xs=".5" >
                        <Image src="[IMG SRC]" roundedCircle />
                    </Col>
                    <Col md="6">
                        <h5 style={{ fontWeight: "bold" }}>Trader Joe's</h5>
                        <p>Delivery</p>
                    </Col>
                </Row>
            </Row>
        </Container>
    )
}