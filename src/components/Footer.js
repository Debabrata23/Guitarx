import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import "react-multi-carousel/lib/styles.css";
import 'react-multi-carousel/lib/styles.css';
import '../App.css'
import Col from 'react-bootstrap/Col';
const Footer = () => {
    return (
        <Row className="footerData">
            <Col xs={3}>
                <div className='footerdiv1'><img
                    src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/795sagk1oin-76%3A148?alt=media&token=6f669840-9ce2-41b6-ae1a-37055f06c949"
                    alt="Not Found"
                    className="icon"
                /><span className='imgHeading'>GuitarX</span></div>
                <div className='guitartext'>Guitars,picks,turner and everything in between</div>
                <div id='divimage1'><img alt='#' className="image1" src={require('../images/twitter.jpg')} /><img  alt='#' className="image2" src={require('../images/instagram.jpg')} /></div>
            </Col>
            <Col xs={3}>
               <div className='midDiv'><span className='footerhead'>Company</span></div>
               <div className='midDiv'><span className='subdiv'>About</span></div>
               <div className='midDiv'><span className='subdiv'>Twitter</span></div>
               <div className='midDiv'><span className='subdiv'>Blog</span></div>
            </Col>
            <Col xs={3}>
            <div className='midDiv'><span className='footerhead'>Product</span></div>
               <div className='midDiv'><span className='subdiv'>Pricing</span></div>
               <div className='midDiv'><span className='subdiv'>Features</span></div>
               <div className='midDiv'><span className='subdiv'>Templates</span></div>
            </Col>
            <Col xs={3}>
            <div className='midDiv'><span className='footerhead'>Resources</span></div>
               <div className='midDiv'><span className='subdiv'>Testimonials</span></div>
               <div className='midDiv'><span className='subdiv'>Support</span></div>
               <div className='midDiv'><span className='subdiv'>Terms</span></div>
               <div className='midDiv'><span className='subdiv'>Privacy</span></div>
            </Col>

        </Row>
    )
}

export default Footer
