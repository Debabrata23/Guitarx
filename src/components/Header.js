import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';
const Header = () => {
    return (
        <Container className='mainContainer'>
        <Row className="mainRow">
            
                <Col xs={4}> <a href="#" className='anchor-img'><img
                    src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/795sagk1oin-76%3A148?alt=media&token=6f669840-9ce2-41b6-ae1a-37055f06c949"
                    alt="Not Found"
                    className="icon"
                /></a><span className='spanHeaderText'>GuitarX</span></Col>
                
            
           
                <Col xs={2}><Button className="btnHeaderHome" variant="light">Home</Button></Col>
                <Col xs={2}><Button variant="light">About Us</Button></Col>
            
            
                <Col xs={4} ><Button className="btnHeaderContactUs" variant="outline-secondary">Contact Us</Button></Col>
            
            </Row>
        </Container>
        /*<div>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='col-lg-4'>
                            <div className='col-md-2'>
                                <a href="#" className='anchor-img'><img
                                    src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/795sagk1oin-76%3A148?alt=media&token=6f669840-9ce2-41b6-ae1a-37055f06c949"
                                    alt="Not Found"
                                    className="icon"
                                /></a></div>
                            <div className='col-mg-2'><span>GuitarX</span></div>

                        </div>
                        <div className='col-lg-4'>
                            <div className='col-md-2'><Button variant="light">Home</Button></div>
                            <div className='col-md-2'><Button variant="light">About Us</Button></div>
                        </div>
                        <div className='col-lg-4'>
                        <Button variant="outline-secondary">Secondary</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>*/
    )
}

export default Header
