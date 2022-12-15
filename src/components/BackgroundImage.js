import { Card } from 'react-bootstrap'
import '../App.css'

export default function BackgroundImage() {

    return (
        <Card>
            <Card.Img src="https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg" alt="card image" style={{ backgroundColor: "#deedd6", paddingLeft: "500px", alignContent: "right", width: "100%", height: "300px", position: "relative" }} />
            <Card.ImgOverlay>
                <Card.Title style={{display: "block", margin: "0px", padding: "100px 100px 0 0"}}><b>Order groceries for delivery or pickup today</b></Card.Title>
                <Card.Text style={{display: "block", margin: "0px", padding: "0 60px 0 0"}}>Whatever you want from local stores, brought right to your door</Card.Text>
            </Card.ImgOverlay>
        </Card>
    )
}