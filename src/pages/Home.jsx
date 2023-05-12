import Carousel from "react-bootstrap/Carousel";
import "./Carousel/PizzaCarousel.css";
import { Link } from "react-router-dom";
import FeaturedProducts from './FeaturedProducts/FeaturedProducts'


const Home = () => {
  return (
    <>
    <Carousel className="carousel slide" id="heroSlider" data-bs-ride="carousel">
    <Carousel.Item className="carousel-all carousel-item-one">
    <img 
        className="img-fluid"
        src="./assets/img/bgpizza.png"
        alt="pizzafloat"
        />
    <div className="col-lg-12 text-center text-lg-end overflow-hidden">
</div>
        <Carousel.Caption>
        <section className="cd-intro">
          <h1>The best <br/>
          quality ingredients</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Numquam, placeat doloribus sapiente.</p>
          <Link to='/menu' className="btn btn-danger py-sm-3 px-sm-5 me-3">ORDER NOW!</Link>
          </section>
        </Carousel.Caption>
        <div className="hero-shadow"></div>
      </Carousel.Item>
      <Carousel.Item className="carousel-all carousel-item-two">
      <img 
        className="img-fluid"
        src="./assets/img/bgpizza3.png"
        alt="pizzafloat2"
        />
      <div className="col-lg-6 text-center text-lg-end overflow-hidden"> </div>
        <Carousel.Caption>
        <section className="cd-intro">
          <h1>The best <br/>
          quality ingredients</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Link to='/menu' className="btn btn-danger">ORDER NOW!</Link>
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
          <h1>Where Pizza <br/>Happen?</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Link to='/menu' className="btn btn-danger">
            ORDER NOW!
            </Link>
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
