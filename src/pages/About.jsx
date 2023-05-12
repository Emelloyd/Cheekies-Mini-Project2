import React from 'react'
import { Row,Col } from 'react-bootstrap'

const About = () => {
  return (
    <>
      <div Style={{marginTop: '50px'}}>
        <h1>OUR STORY</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Quidem a repellendus expedita dignissimos quam eum nobis, 
          voluptatibus, eaque aperiam magni quasi voluptate ex quae, 
          beatae ducimus aut! Corrupti, fuga optio.</p>
          <h1>OUR SPECIALTY</h1>
      <Row>
        <Col md={6}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ipsa accusantium ipsam distinctio sint reprehenderit asperiores 
            qui expedita delectus ut dolores tempore, dolor assumenda magni 
            perferendis libero minima possimus fugit? Veniam!</p>
        </Col>
        <Col md={6}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ipsa accusantium ipsam distinctio sint reprehenderit asperiores 
            qui expedita delectus ut dolores tempore, dolor assumenda magni 
            perferendis libero minima possimus fugit? Veniam!</p>
        </Col>
      </Row>
      <Row>
        <h1>Our Chief</h1>
        <Col md={3}>Lorem ipsum dolor sit amet consectetur, 
        adipisicing elit. Illum aliquid reiciendis, cupiditate dicta sit,
        dolore eum at exercitationem, impedit minus voluptatibus ratione 
        ullam eligendi magni hic distinctio fuga itaque similique!
        </Col>
        <Col md={3}>Lorem ipsum dolor sit amet consectetur, 
        adipisicing elit. Illum aliquid reiciendis, cupiditate dicta sit,
        dolore eum at exercitationem, impedit minus voluptatibus ratione 
        ullam eligendi magni hic distinctio fuga itaque similique!
        </Col>
        <Col md={3}>Lorem ipsum dolor sit amet consectetur, 
        adipisicing elit. Illum aliquid reiciendis, cupiditate dicta sit,
        dolore eum at exercitationem, impedit minus voluptatibus ratione 
        ullam eligendi magni hic distinctio fuga itaque similique!
        </Col>
        <Col md={3}>Lorem ipsum dolor sit amet consectetur, 
        adipisicing elit. Illum aliquid reiciendis, cupiditate dicta sit,
        dolore eum at exercitationem, impedit minus voluptatibus ratione 
        ullam eligendi magni hic distinctio fuga itaque similique!
        </Col>
      </Row>
      </div>
    </>
  )
}

export default About
