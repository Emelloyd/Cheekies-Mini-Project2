import Carousel from "react-bootstrap/Carousel";
import "./Carousel/PizzaCarousel";
import { Link } from "react-router-dom";
import FeaturedProducts from './FeaturedProducts/FeaturedProducts'


const Home = () => {
  return (
    <>
    <Carousel>
    <Carousel.Item className="carousel-all carousel-item-one">
    <div className="col-lg-6 text-center text-lg-end overflow-hidden">
        <img 
        className="img-fluid"
        src="./assets/img/bgpizza.png"
        alt="pizzafloat"
        />
        </div>
        <Carousel.Caption>
        <section className="cd-intro">
        <div className="section">
          <h1>The best <br/>
          quality ingredients</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Numquam, placeat doloribus sapiente, ab perspiciatis 
            eligendi aspernatur reiciendis explicabo sint iste, 
            ducimus tempore? Velit voluptatem rem voluptates, 
            ratione id facere labore.</p>
          <Link to='/menu' className="btn btn-danger py-sm-3 px-sm-5 me-3">ORDER NOW!</Link>
          </div>
          </section>
        </Carousel.Caption>
        <div className="hero-shadow"></div>
      </Carousel.Item>
      <Carousel.Item className="carousel-all carousel-item-two">
      <div className="col-lg-6 text-center text-lg-end overflow-hidden">
        <img 
        className="img-fluid"
        src="./assets/img/bgpizza3.png"
        alt="pizzafloat2"
        />
        </div>
        <Carousel.Caption>
        <section className="cd-intro">
        <div className="section">
          <h1>The best <br/>
          quality ingredients</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Link to='/menu' className="btn btn-danger">ORDER NOW!</Link>
          </div>
          </section>
        </Carousel.Caption>
        <div className="hero-shadow"></div>
      </Carousel.Item>
      <Carousel.Item className="carousel-all carousel-item-three">
      <div className="col-lg-6 text-center text-lg-end overflow-hidden">
        <img 
        className="img-fluid"
        src="./assets/img/bgpizza2.png"
        alt="pizzafloat3"
        />
        </div>
        <Carousel.Caption>
        <section className="cd-intro">
        <div className="section">
          <h1>Where Pizza <br/>Happen?</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Link to='/menu' className="btn btn-danger">ORDER NOW!</Link>
          </div>
          </section>
        </Carousel.Caption>
        <div className="hero-shadow"></div>
      </Carousel.Item>
    </Carousel>

    <FeaturedProducts />

    </>
   
  );
};

export default Home;
