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
                        <Image src="https://www.instacart.com/image-server/87x87/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/38/bef2eb95-7375-4547-ab37-21502de090e0.png" roundedCircle  />
                    </Col>
                    <Col>
                        <h5 style={{ fontWeight: "bold" }}>Ralphs</h5>
                        <p>Delivery * Pickup</p>
                    </Col>
                </Row>
                <Col sm="1"></Col>
                <Row >
                    <Col xs=".5">
                        <Image src="https://www.instacart.com/image-server/87x87/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/279/59eb00b1-2e19-4912-bf2e-0c7a1f71f8b1.png" roundedCircle />
                    </Col>
                    <Col>
                        <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
                        <p>Delivery * Pickup</p>
                    </Col>
                </Row>
                <Col sm="1"></Col>
                <Row >
                    <Col xs=".5" >
                        <Image src="https://www.instacart.com/image-server/87x87/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/5/65f2304b-908e-4cd0-981d-0d4e4effa8de.png" roundedCircle />
                    </Col>
                    <Col md="6">
                        <h5 style={{ fontWeight: "bold" }}>Costco</h5>
                        <p>Delivery</p>
                    </Col>
                </Row>
            </Row>
        </Container>
    )
}