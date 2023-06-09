import Carousel from "react-bootstrap/Carousel";
import "./Carousel/PizzaCarousel";
import { Link } from "react-router-dom";



const Home = () => {
  return (
    <>
    <Carousel>
    <Carousel.Item className="carousel-all carousel-item-one">
      <div className="homepage">
        <img 
        className="img-fluid"
        src="./assets/img/bgpizza.png"
        alt="pizzafloat"
        />
        </div>
        <Carousel.Caption>
        <section className="cd-intro">
        <div className="content">
          <h1>The best <br/>
          quality ingredients</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Link to='/menu' className="btn btn-danger">ORDER NOW!</Link>
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
        <div className="content">
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
        alt="pizzafloat"
        />
        </div>
        <Carousel.Caption>
        <section className="cd-intro">
        <div className="content">
          <h1>Where Pizza <br/>Happen?</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Link to='/menu' className="btn btn-danger">ORDER NOW!</Link>
          </div>
          </section>
        </Carousel.Caption>
        <div className="hero-shadow"></div>
      </Carousel.Item>
    </Carousel>
    </>
   
  );
};

export default Home;
