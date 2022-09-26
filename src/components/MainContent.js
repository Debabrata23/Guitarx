import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import 'react-multi-carousel/lib/styles.css';
import '../App.css'
import Col from 'react-bootstrap/Col';


const MainContent = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
   
    <Row className="bodyContent">
      <Col xs={6}>
        <Col className="sideContent">
          <Row><span className="txtHeader"><h2>Purchase premium guitars</h2></span></Row>
          <Row><span className="txtHeader ">Guitars,picks,turner and everything in between</span></Row>
          <Row><Button className="btnDange" importiant="danger">Contact Us</Button></Row>
        </Col>
      </Col>
      <Col xs={6}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/zvp6woyzcz-81%3A31?alt=media&token=e1ad9c8c-9642-4f7c-9257-18ed34f90d6a"
          alt="Not Found"
          className="capa-1"
        />
      </Col>
      <Row className='carousalHeaderRow'><span className='carouselHeader'><h4>View our catalog of guitars</h4></span></Row>
      <Row><Carousel
      swipeable={true}
      draggable={false}
      showDots={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
     // autoPlay={this.props.deviceType !== "mobile" ? true : false}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={200}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      //deviceType={this.props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      <div className='geeks'><img className="carauselimg" src={require('../../src/images/img1.jpg')}></img></div>
      <div className='geeks'><img className="carauselimg" src={require('../../src/images/img2.jpg')}></img></div>
      <div className='geeks'><img className="carauselimg" src={require('../../src/images/img3.jpg')}></img></div>
      <div className='geeks'><img className="carauselimg" src={require('../../src/images/img4.jpg')}></img></div>
      <div className='geeks'><img className="carauselimg" src={require('../../src/images/img5.jpg')}></img></div>
      <div className='geeks'><img className="carauselimg" src={require('../../src/images/img6.jpg')}></img></div>
      <div className='geeks'><img className="carauselimg" src={require('../../src/images/rectangle_8.png')}></img></div>
      <div className='geeks'><img className="carauselimg" src={require('../../src/images/rectangle_9.png')}></img></div>
      <div className='geeks'><img className="carauselimg" src={require('../../src/images/rectangle_10.png')}></img></div>
      <div className='geeks'><img className="carauselimg" src={require('../../src/images/rectangle_11.png')}></img></div>
      <div className='geeks'><img className="carauselimg" src={require('../../src/images/rectangle_12.png')}></img></div>
    </Carousel>;</Row>
    </Row>

  )
}

export default MainContent
